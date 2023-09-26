import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-d.png'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Bonjour, <br /> Je suis
          <img src={LogoTitle} alt="developer" />
          avid,
          <br />
          développeur web
        </h1>
        <h2>
          Développeur sur la stack MERN / MongoDB / Express.js / React / Node
        </h2>
        <Link to="/contact" className="flat-button">
          ECRIVEZ-MOI
        </Link>
      </div>
    </div>
  )
}
export default Home
