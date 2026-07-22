import la from "../img/la.jpg";
import hommeBarbu from "../img/l'homme barbu.jpg";
import femmeQuiAppelle from "../img/femme qui appelle.webp";
import hommeProfil from "../img/homme qui regarde de profil.jpg";
function Team(){
    return(

<section className="team">
  <div className="container">

    <div className="row py-5 text-center justify-content-center">
      <div className="col-lg-6 reveal reveal-up">
        <h2 className="fw-bold">Our Team</h2>

        <p className="title-lines">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
        </p>
      </div>
    </div>

    <div className="row justify-content-center pb-5">

      {/* Team 1 */}
      <div className="col-lg-4 col-md-6 d-flex justify-content-center py-3 reveal reveal-left">
        <div className="team-card">
          <img src={la} className="photo" alt="John Doe" />

          <div className="overlay">
            <h3>John Doe</h3>
            <p>Web Designer</p>

            <div className="member-social">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Team 2 */}
      <div className="col-lg-4 col-md-6 d-flex justify-content-center py-3 reveal reveal-up">
        <div className="team-card">
          <img src={hommeBarbu} className="photo" alt="Michael" />

          <div className="overlay">
            <h3>Michael</h3>
            <p>Developer</p>

            <div className="member-social">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-github"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Team 3 */}
      <div className="col-lg-4 col-md-6 d-flex justify-content-center py-3 reveal reveal-right">
        <div className="team-card">
          <img src={femmeQuiAppelle} className="photo" alt="Sarah" />

          <div className="overlay">
            <h3>Sarah</h3>
            <p>Designer</p>

            <div className="member-social">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-dribbble"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Team 4 */}
      <div className="col-lg-4 col-md-6 d-flex justify-content-center py-3 reveal reveal-left">
        <div className="team-card">
          <img src={hommeProfil} className="photo" alt="David" />

          <div className="overlay">
            <h3>David</h3>
            <p>Manager</p>

            <div className="member-social">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Team 5 */}
      <div className="col-lg-4 col-md-6 d-flex justify-content-center py-3 reveal reveal-right">
        <div className="team-card">
          <img src={la} className="photo" alt="Emma" />

          <div className="overlay">
            <h3>Emma</h3>
            <p>Marketing</p>

            <div className="member-social">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>
    );
}

export default Team;
