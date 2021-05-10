import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact-area pt-110 pb-120 bg_cover" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title section-title-white mb-75 text-center wow fadeInUp">
              <span className="span">Get in touch</span>
              <h2>Write Us a Message</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="contact-form wow fadeInUp">
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Full Name"
                        name="name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Phone Number"
                        name="phone"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form_group">
                      <select className=' form_control'>
                        <option value="1">Choose services</option>
                        <option value="2">Choose services1</option>
                        <option value="3">Choose services2</option>
                        <option value="4">Choose services3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form_group">
                      <textarea
                        className="form_control"
                        name="message"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form_group text-center">
                      <button type="submit" className="main-btn">
                        Send message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
