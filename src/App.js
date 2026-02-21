import './App.css';

function App() {
  return (
    <div className="App">
  <nav className="navbar-custom d-flex align-items-center justify-content-between">
    <div className="d-flex align-items-center">
      <div className="brand-badge">☕</div>
      <span className="brand-label">Coffee Time</span>
    </div>
    <div className="nav-links">
      <a href="#home"    className="active">Home</a>
      <a href="#coffee"          >Coffee</a>
      <a href="#about"           >About Us</a>
      <a href="#contact"         >Contact</a>
    </div>
  </nav>

  <section className="hero" id="home">
    <div className="container">
      <div className="row align-items-center justify-content-center gy-5">
        <div className="col-auto fade-up d1">
          <div className="hero-cup">☕</div>
        </div>
        <div className="col-md-6 fade-up d2 ps-md-5 text-center text-md-start">
          <h1 className="hero-title">Coffee Time</h1>
          <p className="hero-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut
          </p>
        </div>
      </div>
    </div>
  </section>

  <section className="order-section" id="coffee">
    <div className="container text-center">
      <h2 className="section-title mb-3 fade-up d1">Order Our Coffee</h2>
      <p className="section-lead mb-5 fade-up d2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      </p>

      <div className="row g-4 justify-content-center">
      
        <div className="col-6 col-md-3 fade-up d2">
          <div className="coffee-card">
            <div className="card-name">Cappuccino</div>
            <div className="card-img-box mb-3">☕</div>
            <button className="order-btn">$3 – order</button>
          </div>
        </div>
        
        <div className="col-6 col-md-3 fade-up d3">
          <div className="coffee-card">
            <div className="card-name">Espresso</div>
            <div className="card-img-box mb-3">🍵</div>
            <button className="order-btn">$3 – order</button>
          </div>
        </div>
        
        <div className="col-6 col-md-3 fade-up d4">
          <div className="coffee-card">
            <div className="card-name">Latte Macchiato</div>
            <div className="card-img-box mb-3">🥛</div>
            <button className="order-btn">$3 – order</button>
          </div>
        </div>
       
        <div className="col-6 col-md-3 fade-up d5">
          <div className="coffee-card">
            <div className="card-name">Americano</div>
            <div className="card-img-box mb-3">☕</div>
            <button className="order-btn">$3 – order</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section className="about-section" id="about">
    <div className="container text-center">
      <h2 className="section-title mb-3 fade-up d1">About us</h2>
      <p className="section-lead mb-5 fade-up d2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad
      </p>

      <div className="row g-4 justify-content-center">
        <div className="col-6 col-md-3 fade-up d2">
          <div className="team-card">
            <div className="avatar-circle">👔</div>
            <div className="team-role">CEO</div>
            <div className="team-name">Tom Smith</div>
          </div>
        </div>
        <div className="col-6 col-md-3 fade-up d3">
          <div className="team-card">
            <div className="avatar-circle">👩‍💼</div>
            <div className="team-role">Manager</div>
            <div className="team-name">Emily Knight</div>
          </div>
        </div>
        <div className="col-6 col-md-3 fade-up d4">
          <div className="team-card">
            <div className="avatar-circle">🧑‍🍳</div>
            <div className="team-role">HM</div>
            <div className="team-name">Marcos Gomez</div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section className="contact-section" id="contact">
    <div className="container">
      <h2 className="section-title text-center mb-5 fade-up d1">Contact US</h2>

      <div className="row g-5 justify-content-center align-items-start">
        
        <div className="col-md-3 text-center fade-up d2">
          <div className="col-title">Opening Hours</div>
          <ul className="hours-list">
            <li>Monday - 09:00 – 21:00</li>
            <li>Tuesday - 09:00 – 21:00</li>
            <li>Wednesday - 09:00 – 21:00</li>
            <li>Thursday - 09:00 – 21:00</li>
            <li>Friday - 09:00 – 21:00</li>
          </ul>
        </div>

        
        <div className="col-md-3 text-center fade-up d3">
          <div className="col-title">Info</div>
          <ul className="info-list">
            <li>Phone number - 06123456789</li>
            <li>Email - CoffeeShop@email.com</li>
            <li>Street - coffeshop street NYC</li>
          </ul>
        </div>

       
        <div className="col-md-4 fade-up d4">
          <div className="map-box">
            <div className="map-grid"></div>
            <div className="map-road-h"></div>
            <div className="map-road-v"></div>
            <div className="map-pin">📍</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="footer-custom">Copyright@2026</footer>
    </div>
  );
}

export default App;
