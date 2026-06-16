function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        AirsoftHub
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Events</a>
        <a href="#">Teams</a>
        <a href="#">Community</a>
      </div>

      <button className="login-btn">
        Login
      </button>
    </nav>
  )
}

export default Navbar
