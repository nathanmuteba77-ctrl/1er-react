function Analyse() {
  return (
<section className="analyse">
  <div className="container">
    <div className="row justify-content-center text-center py-5">
      <div className="col-lg-8 py-5">
        <h2 className="fw-bold reveal reveal-up">
          Statistical analysis
        </h2>

        <p className="reveal reveal-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        </p>

        {/* Advertising */}
        <div className="diagramme pt-5 reveal reveal-left">
          <div className="d-flex justify-content-between mb-2">
            <h5>Advertising</h5>
            <span>75%</span>
          </div>

          <div className="bar">
            <div className="fill" data-width="75%">
              75%
            </div>
          </div>
        </div>

        {/* Marketing */}
        <div className="diagramme reveal reveal-up">
          <div className="d-flex justify-content-between mb-2">
            <h5>Marketing</h5>
            <span>90%</span>
          </div>

          <div className="bar">
            <div className="fill" data-width="90%">
              90%
            </div>
          </div>
        </div>

        {/* Design */}
        <div className="diagramme reveal reveal-right">
          <div className="d-flex justify-content-between mb-2">
            <h5>Design</h5>
            <span>60%</span>
          </div>

          <div className="bar">
            <div className="fill" data-width="60%">
              60%
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default Analyse;