import ('./HomePage.css')
import { Link } from "react-router-dom";


export default function HomePage() {

  const shibaImg = "https://static.vecteezy.com/system/resources/previews/010/792/526/original/cute-shiba-inu-dog-cartoon-element-free-png.png"
    return (
     <>
      <section className="homePage-container">
          <img src={shibaImg} className="intro-img"></img>
          <h1>It's a Dog's Life</h1>
          <h2>Welcome to the cutest place on the internet!</h2>
          <ul className="homepage-list">
              <li><Link to="/dogs">Explore All Our Dogs</Link></li>
              <li><Link to="/search">Search For a Specific Dog</Link></li>
          </ul>
      </section>
     </>
    )
  }
  