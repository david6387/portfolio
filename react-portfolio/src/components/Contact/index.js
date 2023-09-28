import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import Loader from 'react-loaders'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  // const serviceId = process.env.REACT_APP_SERVICE_ID
  // const templateId = process.env.REACT_APP_TEMPLATE_ID
  // const publicKey = process.env.REACT_APP_PUBLIC_KEY

  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    return () =>
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_da75jrp',
        'template_26v303w',
        refForm.current,
        'MQ_tzmew_giPaEu9L'
      )
      .then(
        () => {
          alert('Message bien envoyé!')
          window.location.reload(false)
        },
        () => {
          alert(`Echec de l'envoi! Essayez une nouvelle fois!`)
        }
      )
  }

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
            <form ref={refForm} onSubmit={sendEmail}>
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
