import React, { useState, useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  const [news, setNews] = useState([])
  const fetchNews = async () => {
    const api = "https://newsdata.io/api/1/latest?apikey=pub_c34b9d7f3c6549a4a8f23c8d36ca7748&q=pizza"
    const res = await fetch(api);
    const dataa = await res.json();
    setNews(dataa.articles);
    console.log(dataa);
    console.log("News-->", news)

  }
  fetchNews();
  useEffect(() => {
    fetchNews();
  })




  return (
    <>
      <main>

        <section className="hero">

          <img src="https://static.beebom.com/wp-content/uploads/2023/02/one-piece-live-action-teaser.webp?quality=75&strip=all" alt="One Piece" />
          <div className="hero-content">
            <span className="meta">📺 Netflix • 12 min ago</span>
            <h1>Welcome to the world of the ONE PIECE live action.</h1>
            <p>The COPE is over! It's finally here! Meet the Straw Hat crew. Eiichiro Oda's epic masterpiece is about to come to life like never before!</p>
            <span className="tag">Entertainment • 8 min read</span>
          </div>
        </section>


        <section className="latest-news">
          <div className="section-header">
            <h2>Latest News</h2>
            <a href="#">See all →</a>
          </div>

          {
            news?.map((data, index) => (
              // console.log(data)
              <p>`${data.content}`</p>
            ))
          }

          <div className="cards">
            <div className="card">
              <img src="https://www.livemint.com/lm-img/img/2023/07/12/600x338/FxfrxZaacAED0vv_1689129545367_1689129566847.jpg" alt="Oppenheimer" />
              <div className="card-content">
                <span className="meta">📰 CNN • 12 min ago</span>
                <h3>Oppenheimer: Nolan's Best Film Yet, Critics Rave!</h3>
                <p>Oppenheimer’s genius lies in crafting J. Robert’s pivotal role in the creation of the world’s first atomic bomb.</p>
                <span className="tag">Entertainment • 8 min read</span>
              </div>
            </div>

            <div className="card">
              <img src="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/214b/live/1bbdffe0-56a3-11f0-9074-8989d8c97d87.jpg.webp" alt="Messi" />
              <div className="card-content">
                <span className="meta">⚽ 433 • 13 min ago</span>
                <h3>Inter Miami’s Drought Shattered by Messi’s Arrival!</h3>
                <p>The “Messi effect” not only led to victories but also energized fans and teammates alike.</p>
                <span className="tag">Sport • 7 min read</span>
              </div>
            </div>

            <div className="card">
              <img src="https://assets.goal.com/images/v3/bltde6603695a3810b2/Lindsey-Horan-on-the-rebound.jpg?auto=webp&format=pjpg&width=640&quality=60" alt="Captain" />
              <div className="card-content">
                <span className="meta">🏅 Goal • 15 min ago</span>
                <h3>Captain Lindsey Horan Talks Pre World Cup Pressure</h3>
                <p>Being a role model for little girls and boys was unexpected, but it’s incredible.</p>
                <span className="tag">Sport • 6 min read</span>
              </div>
            </div>

            <div className="card">
              <img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/E7BC/production/_130442395_gettyimages-170472886.jpg.webp" alt="Apple" />
              <div className="card-content">
                <span className="meta">🖥️ BBC • 18 min ago</span>
                <h3>Apple slams UK surveillance-bill proposals</h3>
                <p>The tech giant objected to potential legislation impacting user privacy and security.</p>
                <span className="tag">Tech • 10 min read</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 DailyScope. All rights reserved.</p>
      </footer>
    </>
  )
}
export default Home