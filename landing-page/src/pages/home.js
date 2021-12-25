import { useEffect, useRef } from "react";
import "./home.css"

function Home() {
    return (
        <div className="home-container">
            <video className="video" autoPlay muted>
                <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4"/>
            </video>

            <div className="hero-text">
                <h1 className="hero-header">It's time to find your new best friend.</h1>
            </div>

            {/* <div className="hero-content">
                <img src="https://www.ctvsh.com/sites/default/files/styles/large/public/golden-retriever-dog-breed-info.jpg?itok=KV7Ojj-C"/>
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"></img>
            </div> */}
        </div>
    )
}

export default Home;