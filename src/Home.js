import { useNavigate } from "react-router-dom";


function Home() {

  const navigate = useNavigate();
  const gotouseeffect =()=>{navigate ('/useeffect')};
    return (
      <div className="home-container">
        <header className="hero-section">
          <h1>Welcome to World Explorer</h1>
          <p>Discover detailed information about 250 countries, their capitals, languages, and more.</p>
        </header>
       
        <div className="features">
          <div className="feature-card">
            <h2>250 Countries</h2>
            <p>Get to know every country from South Georgia to Switzerland.</p>
          </div>
          <div className="feature-card">
            <h2>Official Languages</h2>
            <p>Explore native and official languages spoken around the globe.</p>
          </div>
          <div className="feature-card">
            <h2>Capitals and Flags</h2>
            <p>Visualize country flags and their capital cities in an intuitive layout.</p>
          </div>
          
        </div>
        <button className="button" onClick={gotouseeffect}>CLICK HERE TO EXPLORE</button>
      </div>
    
    );
  }
  
  export default Home;