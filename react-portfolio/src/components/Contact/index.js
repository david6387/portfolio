import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Contact = () => {
  return (
    <>
      <div className="container contact">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={[
                'P',
                'o',
                'u',
                'r',
                ' ',
                'm',
                `'`,
                'é',
                'c',
                'r',
                'i',
                'r',
                'e',
              ]}
              idx={15}
            />
          </h1>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  )
}

export default Contact
