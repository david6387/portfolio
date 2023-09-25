import { Link } from 'react-router-dom'
import './index.scss'
import LogoD from '../../assets/images/logo-d.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoD} alt="logo" />
      <img src={LogoSubtitle} alt="David" />
    </Link>
  </div>
)

export default Sidebar
