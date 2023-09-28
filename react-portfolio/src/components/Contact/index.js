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
          <p>
            Eu in culpa in nostrud eu enim veniam aute aute exercitation.
            Adipisicing occaecat laborum aliqua ea incididunt ea occaecat anim.
            Dolore magna amet officia Lorem eu culpa voluptate. Incididunt velit
            occaecat nostrud amet aliquip ad ipsum ipsum laborum occaecat duis
            sunt nulla. Consequat aute laborum reprehenderit minim.
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Nom" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Objet"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  )
}

export default Contact
