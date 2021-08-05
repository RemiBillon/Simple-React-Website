import { NavLink } from 'react-router-dom';


const Header = () => {
    return(
        <header >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"></a>
            <img src={require('../../assets/logo-m2i.jpg').default} width = "50" alt="logo" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink activeClassName = "active" exact className="nav-link" aria-current="page" to="/" >Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName = "active" className="nav-link" to="/carousel">Carousel</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName = "active" className="nav-link" to="/gallery">Gallery</NavLink>
                </li>
                <li className="nav-item">
                <NavLink activeClassName = "active" className="nav-link" to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    )
}

export default Header;