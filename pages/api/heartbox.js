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
        state[box] = req.body.value;
        res.status(200);
        res.end();
    }
    else if(req.method === 'GET'){
        res.status(200).json(state);
        res.end();
    }
    else {
        res.status(400);
        res.end();
    }
};
