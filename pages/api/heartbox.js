import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'

const cors = initMiddleware(
    Cors({
      methods: ['GET', 'PUT'],
    })
  )

let state = {
    K: false,
    B: false
}

export default async (req, res) => {

    await cors(req,res);

    if(req.method === 'PUT'){
        let box = req.body.name;
        if(req.body.value === "true"){
            state[box] = true;
        }
        else if(req.body.value === "false"){
            state[box] = false;
        }
        res.status(200);
        res.end();
    }
    else if(req.method === 'GET'){
        res.status(200).send('K=' + state["K"] + '&B=' + state["B"]);
        res.end();
    }
    else {
        res.status(400);
        res.end();
    }
};
