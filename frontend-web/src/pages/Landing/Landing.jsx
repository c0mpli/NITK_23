import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Landing.css";
import heroBG from "../../assets/hero-bg.png";
import { useNavigate } from "react-router-dom";
import readmeImg from "../../assets/readme.png";
import featuresIcon from "../../assets/featuresIcon.png";
import heartIcon from "../../assets/heart.png";

import tips1 from "../../assets/ourtips1.png";
import tips2 from "../../assets/ourtips2.png";
import tips3 from "../../assets/ourtips3.png";

import newsLetter from "../../assets/newsletterBottom.png";

import Hero from "../../components/Landing/Hero/Hero";
import Services from "../../components/Landing/Services/Services";
import Recommend from "../../components/Landing/Recommend/Recommend";
import Footer from "../../components/Landing/Footer/Footer";

{
  /*const exploreData = [
  {
    title: "Cafe",
    image: explore1,
  },
  {
    title: "Staycations",
    image: explore2,
  },
  {
    title: "Homestays",
    image: explore3,
  },
  {
    title: "Short Tours",
    image: explore4,
  },
  {
    title: "Bike Rides",
    image: explore5,
  },
  {
    title: "Night Tours",
    image: explore6,
  },
  {
    title: "Treks",
    image: explore7,
  },
  {
    title: "International",
    image: explore8,
  },
];*/
}

function Landing() {
  const navigate = useNavigate();
  return (
    <div>
      <img className="hero-bg" src={heroBG} alt="bgImage" />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Footer />
      {/* <div className="hero-section" id="landing">
        <div className="hero-content">
          <h1>
            Your likes. Your person.<br></br> The{" "}
            <em className="hero-upperPerfect">perfect</em>
            <em className="hero-perfect">perfect</em> date.
          </h1>
          <p>
            From <em className="hero-specialP">Harry Potter</em> to{" "}
            <em className="hero-specialP">How to Lose a Guy in 10 Days</em>,
            pick up a conversation and kickstart a meaningful relationship.
          </p>
        </div>
        <div className="hero-buttons">
          <button onClick={() => navigate("/login")}>Sign me up !👋</button>
          <button>Why you ?🤔</button>
        </div>
      </div>
      <div className="readme-section">
        <div className="readme-content-wrapper">
          <h1 className="readme-title">
            <em className="readme-uppertitle">
              That’s what <br></br>They said !
            </em>
            <em>
              That’s what <br></br>They said !
            </em>
          </h1>
          <p>
            Take a look at Arya and Suraj’s meet-up story and how one pizza
            started a relatinship for years to last 🍕
          </p>
          <button>Read me 👉</button>
        </div>
        <img src={readmeImg} />
      </div>
      <div className="features-section">
        <div className="features-lhs">
          <img src={featuresIcon} alt="Features icon" />
          <h2>Efficient</h2>
          <p>
            Our specially programmed algorithms are sure to help you find the
            perfect match according to your likes. You can update your
            preferences even after registering.
          </p>
        </div>
        <div className="features-vertical-line"></div>
        <div className="features-mhs">
          <img src={featuresIcon} alt="Features icon" />
          <h2>Secure</h2>
          <p>
            Each profile that is registered on our platform has gone through
            face verification to make sure that you are chatting with a real
            person.
          </p>
        </div>
        <div className="features-vertical-line"></div>
        <div className="features-rhs">
          <img src={featuresIcon} alt="Features icon" />
          <h2>Reliable</h2>
          <p>
            Although we cannot guarantee whether you will strike a chord with
            your person at first, we can assure to send you the most compatible
            profiles according to your interests.
          </p>
        </div>
      </div>
      <div className="tips-section">
        <div className="tips-title">
          <img src={heartIcon} alt="Heart Icon" />
          <h1>Our Tips</h1>
          <img src={heartIcon} alt="Heart Icon" />
        </div>
        <div className="ourtips-cards"></div>
      </div>
      <div className="pricing-section">
        <div className="pricing-lhs">
          <h1>Free !</h1>
          <ul>
            <li>Profile Matching according to interests.</li>
            <li>30 minute timer for chatting with matched users.</li>
            <li>Upto 5 free games for each match.</li>
          </ul>
          <button>Already Chosen!</button>
        </div>
        <div className="pricing-rhs">
          <h1>Paid, but a small fee</h1>
          <ul>
            <li>Profile Boosting with increased visibility rates.</li>
            <li>Unlimited timer for chatting with matched users.</li>
            <li>Unlimited free games for each match.</li>
            <li>See who viewed your profile.</li>
            <li>New profile suggestions every week.</li>
          </ul>
          <button>Upgrade</button>
        </div>
      </div>
      <div className="newsletter-section">
        <div className="newsletter-content">
          <h1>Join Our Fam !</h1>
          <p>
            There are endless number of hearts looking for love. Be a part of
            our community to get exclusive articles to improve upon your dating
            life, profile recommendations, notifications, etc.
          </p>
        </div>
        <div className="input-wrapper">
          <input placeholder="Your Email" />
        </div>
        <img src={newsLetter} />
      </div>
      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1E1E1E",
          color: "white",
          height: "5rem",
        }}
      >
        Made with 🤍
      </footer> */}
    </div>
  );
}

export default Landing;
