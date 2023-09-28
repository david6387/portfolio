import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Portfolio = () => {
  return (
    <>
      <div className="container portfolio">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['P', 'o', 'r', 't', 'f', `o`, 'l', 'i', 'o']}
              idx={15}
            />
          </h1>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  )
}

export default Portfolio
