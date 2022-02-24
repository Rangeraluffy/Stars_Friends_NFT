import React from "react";
import "./hero.scss";

function Hero() {
  return (
    <div className="hero_banner">
      <div className="backg">
        <div className="planet">
          <div className="r1"></div>
          <div className="r2"></div>
          <div className="r3"></div>
          <div className="r4"></div>
          <div className="r5"></div>
          <div className="r6"></div>
          <div className="r7"></div>
          <div className="r8"></div>
          <div className="shad"></div>
        </div>
        <div className="stars">
          <div className="s1"></div>
          <div className="s2"></div>
          <div className="s3"></div>
          <div className="s4"></div>
          <div className="s5"></div>
          <div className="s6"></div>
        </div>
        <div className="an">
          <div className="tank"></div>
          <div className="astro">
            <div className="helmet">
              <div className="glass">
                <div className="shine"></div>
              </div>
            </div>
            <div className="dress">
              <div className="c">
                <div className="btn1"></div>
                <div className="btn2"></div>
                <div className="btn3"></div>
                <div className="btn4"></div>
              </div>
            </div>
            <div className="handl">
              <div className="handl1">
                <div className="glovel">
                  <div className="thumbl"></div>
                  <div className="b2"></div>
                </div>
              </div>
            </div>
            <div className="handr">
              <div className="handr1">
                <div className="glover">
                  <div className="thumbr"></div>
                  <div className="b1"></div>
                </div>
              </div>
            </div>
            <div className="legl">
              <div className="bootl1">
                <div className="bootl2"></div>
              </div>
            </div>
            <div className="legr">
              <div className="bootr1">
                <div className="bootr2"></div>
              </div>
            </div>
            <div className="pipe">
              <div className="pipe2">
                <div className="pipe3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="hero_banner_background"
        src="assets/Layers.png"
        alt="background_stars_friends"
      />
      <div className="hero_container">
        <img src="assets/stars_friends_logo.png" alt="logo_stars_friends" />
      </div>
      <div className="btn-cont">
        <a
          className="btn"
          href="https://discord.gg/ZgbavxQB7J"
          target="_blank"
          rel="noreferrer noopener"
        >
          Join Discord
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
          <span className="line-4"></span>
        </a>
      </div>
    </div>
  );
}

export default Hero;
