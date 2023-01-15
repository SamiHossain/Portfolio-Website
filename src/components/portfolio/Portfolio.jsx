import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG1.png'
import IMG2 from '../../assets/IMG2.png'
import IMG3 from '../../assets/IMG3.png'



const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio_container">
          <article className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={IMG1} alt="Maze Runner game" />
            </div>
            <h3>Maze Runner Game</h3>
            <a href="https://github.com/SamiHossain/Maze-Runner-Game" className='btn' target='_blank'>Github</a>
          </article>

          <article className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={IMG2} alt="Stock analysis website" />
            </div>
            <h3>Simple Stock Analysis</h3>
            <a href="https://github.com/SamiHossain/Portfolio-Website" className='btn' target='_blank'>Github</a>
          </article>

          <article className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={IMG3} alt="Code for this website" />
            </div>
            <h3>Check out the code for this website</h3>
            <a href="https://github.com/SamiHossain/Portfolio-Website" className='btn' target='_blank'>Github</a>
          </article>

        </div>
      </section>
  )
}

export default Portfolio