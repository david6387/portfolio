import './index.scss'
import AnimatedLetters from '../../components/AnimatedLetters/index'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return () =>
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
  }, [])

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio &&
          portfolio.map((port, idx) => {
            return (
              <div className="image-box" key={idx}>
                <img
                  src={port.cover}
                  className="portfolio-image"
                  alt="portolio"
                />
                <div className="content">
                  <p className="title">{port.title}</p>
                  <p className="description">{port.description}</p>
                  <p className="skills">{port.skills}</p>
                  <button className="btn" onClick={() => window.open(port.url)}>
                    Découvrir
                  </button>
                </div>
              </div>
            )
          })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...'Porfolio']}
              idx={15}
            />
          </h1>
          <div className="card-zone">{renderPortfolio(portfolioData)}</div>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  )
}

export default Portfolio
