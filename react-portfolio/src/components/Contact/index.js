import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import Loader from 'react-loaders'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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
            N'hésitez pas à me contacter pour toute question, collaboration ou
            pour discuter de vos projets.
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
                    type="text"
                    name="subject"
                    placeholder="Objet"
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
                  <input
                    type="submit"
                    className="flat-button"
                    value="ENVOYER"
                  />
                </li>
              </ul>
            </form>
          </div>
          <div className="info-map">
            <div>
              David,
              <br />
              France,
              <br />
              Bagneux, 92220
              <br />
              <span>webdev.dcmv@gmail.com</span>
            </div>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/davidcmv/"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/david6387"
                >
                  <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="map-wrap">
          <MapContainer center={[48.795294, 2.314432]} zoom={12}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[48.795294, 2.314432]}>
              <Popup>David habite par ici</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  )
}

export default Contact
