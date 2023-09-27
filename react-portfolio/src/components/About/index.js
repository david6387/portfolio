import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return () =>
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['À', ' ', 'p', 'r', 'o', 'p', 'o', 's']}
            idx={15}
          />
        </h1>
        <p>
          Proident excepteur nostrud nostrud fugiat mollit ullamco qui. Eiusmod
          nulla anim anim do mollit minim laborum in tempor magna sunt nisi.
          Velit dolor pariatur laboris magna. Lorem excepteur proident
          incididunt tempor enim aute irure veniam.
        </p>
        <p>
          Proident excepteur nostrud nostrud fugiat mollit ullamco qui. Eiusmod
          nulla anim anim do mollit minim laborum in tempor magna sunt nisi.
          Velit dolor pariatur laboris magna. Lorem excepteur proident
          incididunt tempor enim aute irure veniam.
        </p>
        <p>
          Proident excepteur nostrud nostrud fugiat mollit ullamco qui. Eiusmod
          nulla anim anim do mollit minim laborum in tempor magna sunt nisi.
          Velit dolor pariatur laboris magna. Lorem excepteur proident
          incididunt tempor enim aute irure veniam.
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#61DBFB" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faSass} color="#CD6799" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faNodeJs} color="#68A063" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faCss3} color="#264de4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faHtml5} color="#e34c26" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faJsSquare} color="#F0DB4F" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
