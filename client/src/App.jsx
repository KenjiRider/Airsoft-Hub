import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <main className="hero">
        <div className="hero-content">
          <span className="hero-tag">
            GLOBAL AIRSOFT COMMUNITY
          </span>
          <h1>
            Find Airsoft Events Around The World
          </h1>
          <p>
            Discover games, teams and players from different countries.
            Join the global tactical community.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Events
            </button>
            <button className="secondary-btn">
              Create Team
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
