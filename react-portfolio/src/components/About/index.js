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
import AnimatedLetters from '../AnimatedLetters/index'
import Loader from 'react-loaders'
import monCvPdf from '../../assets/cv.david.webdev.pdf'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return () =>
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...'À propos']}
              idx={15}
            />
          </h1>
          <p>
            Passionné par le web depuis des années j'ai commencé à modifier des
            sites puis à apprendre à en créer en autodidacte… J'ai fini par
            réaliser qu'il s'agissait d'une véritable passion et je me suis
            formé auprès d'OpenClassrooms afin d'en apprendre encore plus! Je
            cherche actuellement un poste de Développeur Web.
          </p>
          <p>
            J'ai des compétences en HTML, CSS, JavaScript, ainsi que React. Mais
            également en Back-end, SEO, Methodes agiles.
          </p>
          <p>
            Je cherche à progresser et à participer à des projets challengeants,
            si vous avez une proposition de ce type je serais ravi d'en parler
            avec vous.
          </p>
          <a href={monCvPdf} download="cv.david.webdev.pdf">
            <button className="flat-button">Télécharger mon CV</button>
          </a>
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
      <Loader type="cube-transition" />
    </>
  )
}

export default About
