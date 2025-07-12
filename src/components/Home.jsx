import React, { useState, useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";
import { format } from 'timeago.js';
import Navbar from './Navbar';

const Home = ({ category }) => {
  
  const [news, setNews] = useState([])
  const fetchNews = async () => {
    const api = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=22&apikey=c02da59f735891a4886224fc81bad92f`
    const res = await fetch(api);
    const dataa = await res.json();
    setNews(dataa.articles);
    console.log(dataa);


  }

  useEffect(() => {
    fetchNews();
  }, [category]);




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

        <h1 id="latest">Latest News</h1>
        <section className="latest-news">

          {
            news?.map((data, index) => (
              
              //first api
              <div className="cards" key={data.url || index}>
                {/* <div className="card">
                  <a href={data.url}>
                    <img src={data.urlToImage} alt="news" />
                  </a>

                  <div className="card-body">
                    <span className="meta">📰 CNN • {data.publishedAt}</span>
                    <h3>{data.title}</h3>
                    <p>{data.content}</p>
                    <span className="tag">Entertainment • 8 min read</span>
                  </div>

                  <div className="card-footer">
                    <a href={data.url}>
                      <button>Read More</button>
                    </a>
                  </div>
                </div> */}
                <div className="card">
                  <a href={data.url}>
                    <img src={data.image} alt="news" />
                  </a>

                  <div className="card-body">
                    <span className="meta">📰 CNN • {format(data.publishedAt)}</span>
                    <h3>{data.title}</h3>
                    <p>{data.content}</p>
                    <span className="tag">Entertainment • 8 min read</span>
                  </div>

                  <div className="card-footer">
                    <a href={data.url}>
                      <button>Read More</button>
                    </a>
                  </div>
                </div>
              </div>

            ))
          }

          
        </section>
      </main>

      <footer>
        <p>© 2025 DailyScope. All rights reserved.</p>
      </footer>
    </>
  )
}
export default Home