import React, { useState } from "react";
import axios from "axios";
import styles from "./Contact.module.css";
import ClipLoader from "react-spinners/ClipLoader";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const infoCards = [
    {
      icon: "bi bi-pin-map-fill",
      title: "Location",
      text: "Addis Ababa, Ethiopia",
    },
    {
      icon: "bi bi-envelope-open",
      title: "Email",
      text: "meronsolomondana@gmail.com",
    },
    { icon: "bi bi-telephone-fill", title: "Phone", text: "+251 966 125 639" },
    {
      icon: "bi bi-clock-history",
      title: "Availability",
      text: "Monday-Saturday: 9AM - 7PM EAT",
    },
  ];

 const socialLinks = [
   { icon: "twitter-x", url: "https://twitter.com/TheMeronWay" },
   { icon: "telegram", url: "https://t.me/Danytt00" },
   { icon: "linkedin", url: "https://www.linkedin.com/in/merontsegay/" },
   { icon: "github", url: "https://github.com/Merisola" },
 ];


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/contact`,
        data,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.status === 200) {
        setMessage("✅ Message sent successfully!");
        e.target.reset();
      } else {
        setMessage("⚠️ Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setMessage(
        "❌ Something went wrong. Check your connection or try again later."
      );
    } finally {
      setLoading(false);
    }

    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <section id="contact" className={`${styles.contact} section`}>
      <div className={`container ${styles.sectionTitle}`} data-aos="fade-up">
        <span className={styles.descriptionTitle}>Get In Touch</span>
        <h2>Contact Me</h2>
        <p>
          I'm open to new opportunities and collaborations. Feel free to reach
          out!
        </p>
      </div>

      <div className="container">
        <div className={styles.contactWrapper}>
          {/* Contact Info Panel */}
          <div className={styles.contactInfoPanel}>
            <div className={styles.contactInfoHeader}>
              <h3>Contact Information</h3>
              <p>
                You can reach me via email, phone, or connect on social media. I
                usually respond within 24 hours.
              </p>
            </div>

            <div className={styles.contactInfoCards}>
              {infoCards.map((card, i) => (
                <div key={i} className={styles.infoCard}>
                  <div className={styles.iconContainer}>
                    <i className={card.icon}></i>
                  </div>
                  <div className={styles.cardContent}>
                    <h4>{card.title}</h4>
                    <p>{card.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.socialLinksPanel}>
              <h5>Follow Me</h5>
              <div className={styles.socialIcons}>
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.icon}
                  >
                    <i className={`bi bi-${link.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className={styles.contactFormPanel}>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.936502918529!2d38.7580080153167!3d9.005401393447992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8539f7f4e7e7%3A0x3e98b9d24d6aee5c!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className={styles.formContainer}>
              <h3>Send Me a Message</h3>
              <p>
                Have a project, question, or just want to say hi? Fill out the
                form below and I'll get back to you soon.
              </p>

              <form onSubmit={handleSubmit}>
                {["name", "email", "subject"].map((field, i) => (
                  <div key={i} className={styles.formFloating}>
                    <input
                      type={field === "email" ? "email" : "text"}
                      className={styles.formControl}
                      id={`${field}Input`}
                      name={field}
                      required
                    />
                    <label htmlFor={`${field}Input`}>
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                  </div>
                ))}

                <div className={styles.formFloating}>
                  <textarea
                    className={styles.formControl}
                    id="messageInput"
                    name="message"
                    rows="5"
                    style={{ height: "150px" }}
                    required
                  ></textarea>
                  <label htmlFor="messageInput">Your Message</label>
                </div>

                <div className={styles.dGrid}>
                  <button
                    type="submit"
                    className={styles.btnSubmit}
                    disabled={loading}
                  >
                    {loading ? (
                      <ClipLoader size={20} color="#fff" />
                    ) : (
                      <>
                        Send Message <i className="bi bi-send-fill ms-2"></i>
                      </>
                    )}
                  </button>
                </div>

                {message && <p className={styles.feedbackMessage}>{message}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
