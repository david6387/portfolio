import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-d.png'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'v', 'i', 'd', ',']
  const jobArray = [
    'd',
    'é',
    'v',
    'e',
    'l',
    'o',
    'p',
    'p',
    'e',
    'u',
    'r',
    ' ',
    'w',
    'e',
    'b',
    '.',
  ]

  useEffect(() => {
    return () =>
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>B</span>
            <span className={`${letterClass} _12`}>o</span>
            <span className={`${letterClass} _13`}>n</span>
            <span className={`${letterClass} _14`}>j</span>
            <span className={`${letterClass} _15`}>o</span>
            <span className={`${letterClass} _16`}>u</span>
            <span className={`${letterClass} _17`}>r</span>
            <span className={`${letterClass} _18`}>,</span>
            <br />
            <span className={`${letterClass} _19`}>J</span>
            <span className={`${letterClass} _20`}>e</span>
            <span className={`${letterClass} _21`}> </span>
            <span className={`${letterClass} _22`}>s</span>
            <span className={`${letterClass} _23`}>u</span>
            <span className={`${letterClass} _24`}>i</span>
            <span className={`${letterClass} _25`}>s</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={20}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={15}
            />
          </h1>
          <h2>
            Développeur sur la stack MERN / MongoDB / Express.js / React / Node
          </h2>
          <Link to="/contact" className="flat-button">
            ECRIVEZ-MOI
          </Link>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  )
}
export default Home
