import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return () =>
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
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
