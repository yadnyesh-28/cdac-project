function Doctors(){
    return(
        <section id="doctors" className="doctors">
  <div className="container">
    <div className="section-title">
      <h2>Doctors</h2>
      <p>
        
      </p>
    </div>
    <div className="row">
     
      <div className="col-lg-6">
        <div className="member d-flex align-items-start">
          <div className="pic">
            <img
              src="assets/img/doctors/doctor-1.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="member-info">
            <h4>Dr.Rahul Tawde</h4>
            <span>Master of Surgery in Obstetrics and Gynaecology </span>
            <p>200+ surgeries and 500+ delieveries with 100% success </p>
          </div>
          
        </div>
      </div>
      <div className="col-lg-6">
        <div className="member d-flex align-items-start">
          <div className="pic">
            <img
              src="assets/img/doctors/Cardiology-Harshad.jpeg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="member-info">
            <h4>Dr. Harshad Surana</h4>
            <span>Master of Surgery in Cardiology </span>
            <p> 80+ surgeries , 5 Heart Transplants and 50+ ByPass surgeries  </p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default Doctors;