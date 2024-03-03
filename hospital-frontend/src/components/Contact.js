import React, { useState } from "react";
import Services from "./Services/Services";


function Contact() {
  const [name1, setName1] = useState("");
  const [email1, setEmail1] = useState("");
  const [message1, setMessage1] = useState("");

  const handleEnquiry = () => {
    const enquiry = {
      name: name1,
      email: email1,
      message: message1,
    };

    Services.addEnquiry(enquiry)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };


  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
        
          </p>
        </div>
      </div>
      <div>
        <iframe
          style={{ border: 0, width: "100%", height: 350 }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14903.937222721543!2d74.1249624!3d20.9531454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bde574fb23956cd%3A0xc3d1eb06bbc2a79d!2sTawade%20Maternity%20and%20Dental%20Hospital!5e0!3m2!1sen!2sin!4v1707227667448!5m2!1sen!2sin" 
          frameBorder={0}
          allowFullScreen=""
        />
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt" />
                <h4>Location:</h4>
                <p>X43F+7X4, Satana Rd, Sukapur, Pimpalner, Maharashtra 424306</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope" />
                <h4>Email:</h4>
                <p>
RahulTawde1983@gmail.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone" />
                <h4>Call:</h4>
                <p>+91 9404001711</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0">
            <div
             
              className="php-email-form"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required=""
                    onChange={(e) => setName1(e.target.value)}

                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    onChange={(e) => setEmail1(e.target.value)}

                    required=""
                  />
                </div>
              </div>
           
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  onChange={(e) => setMessage1(e.target.value)}

                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit"
            onClick={handleEnquiry}
                
                
                >Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
