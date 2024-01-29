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
import AnimatedLetters from '../../components/AnimatedLetters/index'
import Loader from 'react-loaders'
import monCvPdf from '../../assets/cv.cognet.pdf'

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
            Après avoir exploré des expériences professionnelles variées, j'ai
            plongé dans l'univers captivant du{' '}
            <strong>développement web</strong> en 2020. Commençant en
            autodidacte j'ai décidé de consolider mes compétences avec
            OpenClassrooms, notamment dans des technologies telles que{' '}
            <strong>
              MongoDB, Express, React, Node.js, JavaScript, et le SEO
            </strong>
            .
          </p>
          <p>
            Mon bagage académique et professionnel m'a permis de développer des
            compétences analytiques, de recherche et de communication utiles
            dans le développement web. Mon approche méthodique et ma capacité à
            résoudre des problèmes sont des atouts précieux dans mon nouveau
            domaine d'expertise.
          </p>
          <p>
            Je crée des interfaces web dynamiques, conviviales et au design
            responsive personnalisé en suivant une charte graphique. N'hésitez
            pas à me contacter pour discuter de vos projets, qu'il s'agisse d'un{' '}
            <strong>
              site e-commerce, d'un site vitrine, d'un blog, ou de tout autre
              projet web innovant
            </strong>
            . J'ai hâte de mettre mes compétences au service d'une expérience
            utilisateur sur-mesure. Vous recherchez un développeur passionnée et
            motivé pour rejoindre votre équipe, ne cherchez pas plus loin !
          </p>
          <a href={monCvPdf} download="cv.cognet.pdf">
            <button className="flat-button">Télécharger mon CV</button>
          </a>
        </div>
        {window.innerWidth > 1100 ? (
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
        ) : null}
      </div>
      <Loader type="cube-transition" />
    </>
  )
}

export default About
