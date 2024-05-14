'use client'
 
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import utilStyles from '../styles/utils.module.css'
 
export function InteractivesClient() {
  const pathname = usePathname()
  let title;
  const interactiveMap = {
        'tilePhysics': {
            title: 'Image Tile Physics',
            link: 'https://editor.p5js.org/brycecparkman/embed/a1zLjaEwz'
        },
        'flock': {
            title: 'Flocking Simulation',
            link: 'https://editor.p5js.org/brycecparkman/embed/zZz2SBkV6'
        },
        'hue': {
            title: 'I Love Hue Remake',
            link: 'https://editor.p5js.org/brycecparkman/full/5Bv_YGAdi'
        },
        'leaves': {
            title: 'Falling, Changing',
            link: 'https://editor.p5js.org/brycecparkman/full/C5WPTqD4-'
        },
        'pi': {
            title: 'Pi Collisions',
            link: 'https://editor.p5js.org/brycecparkman/embed/BdTKeFnMQ'
        },
        'recaman': {
            title: 'Recaman Sequence',
            link: 'https://editor.p5js.org/brycecparkman/embed/L2YG0FptR'
        },
        'blob': {
            title: 'Perlin Noise Blob',
            link: 'https://editor.p5js.org/brycecparkman/embed/VKK1mkHne'
        },
    }
    
    let [link, setLink] = useState(null)
 
    useEffect(() => {
        const split = pathname.split('/')
        const name = split[split.length - 1]
        const test = interactiveMap[name]
        setLink(test['link'])
    }, [pathname, link])
    
    return (
        <div className={utilStyles.headingMdPadding}> 
            <iframe src={link} width={640} height={500} frameBorder={0} style={{margin: "auto"}}></iframe>
        </div>
    );
}