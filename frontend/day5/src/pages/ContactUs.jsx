import React, { useState } from "react";
import "../assets/css/ContactUs.css";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/myyrwglr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitError("Failed to submit the form. Please try again later.");
      }
    } catch (error) {
      setSubmitError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5
            style={{
              fontFamily: "Stencil",
              fontSize: "30px",
              color: "#F7258E",
            }}
          >
            Contact Us
          </h5>
          <h2
            style={{
              color: "white",
              marginTop: "7%",
              fontFamily: "Arial Black",
            }}
          >
            We'd Love To Hear From You.
          </h2>
          <p
            className="lead"
            style={{
              marginTop: "7%",
              color: "#C1BEC0",
              fontFamily: "Arial Black",
            }}
          >
            Feel free to Contact Us:
          </p>
        </div>
      </div>

      <div className="row contact-form">
        <div className="col-twelve">
          <form name="form" id="contactForm" onSubmit={handleSubmit}>
            <fieldset>
              <div className="form-field">
                <input
                  name="name"
                  type="text"
                  id="contactName"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  minLength="2"
                  required
                />
              </div>
              <div className="form-field">
                <input
                  name="email"
                  type="email"
                  id="contactEmail"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <input
                  name="subject"
                  type="text"
                  id="contactSubject"
                  placeholder="Regarding"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <textarea
                  name="message"
                  id="contactMessage"
                  placeholder="How Could We Help You ?"
                  rows="10"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-field">
                <button
                  type="submit"
                  className="submitform"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </div>
              {submitError && <div id="message-warning">{submitError}</div>}
              {submitSuccess && (
                <div id="message-success">
                  <i className="fa fa-check"></i> Your message was sent, thank
                  you!
                  <br />
                </div>
              )}
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
