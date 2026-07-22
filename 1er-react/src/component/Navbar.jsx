

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navside shadow">
      <div className="container-fluid">

        {/* Logo */}
        <a className="navbar-brand fw-bold" href="#">
          <i className="fa-solid fa-store"></i>
          {" "}Flyer
        </a>

        {/* Bouton responsive */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Liens */}
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="custon-btn nav-link" href="#">
                Accueil
              </a>
            </li>

            <li className="nav-item">
              <a className="custom-btn nav-link" href="#">
                À propos
              </a>
            </li>

            <li className="nav-item">
              <a className="custom-btn nav-link" href="#">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="custom-btn nav-link" href="#">
                Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a className="custom-btn nav-link" href="#">
                Contact
              </a>
            </li>

            <li className="nav-item">
              <a className="custon-btn nav-link" href="#">
                <i className="fa-solid fa-user"></i>
                {" "}Connexion
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;