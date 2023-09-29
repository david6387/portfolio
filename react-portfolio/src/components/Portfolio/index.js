import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return () =>
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'o', 'r', 't', 'f', `o`, 'l', 'i', 'o']}
              idx={15}
            />
          </h1>
          <p>
            Eu in culpa in nostrud eu enim veniam aute aute exercitation.
            Adipisicing occaecat laborum aliqua ea incididunt ea occaecat anim.
            Dolore magna amet officia Lorem eu culpa voluptate. Incididunt velit
            occaecat nostrud amet aliquip ad ipsum ipsum laborum occaecat duis
            sunt nulla. Consequat aute laborum reprehenderit minim.
          </p>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  )
}

export default Portfolio
