import React from "react";
import "./hero.scss";

function Hero() {
  return (
    <div className="hero_banner">
      <div class="backg">
        <div class="planet">
          <div class="r1"></div>
          <div class="r2"></div>
          <div class="r3"></div>
          <div class="r4"></div>
          <div class="r5"></div>
          <div class="r6"></div>
          <div class="r7"></div>
          <div class="r8"></div>
          <div class="shad"></div>
        </div>
        <div class="stars">
          <div class="s1"></div>
          <div class="s2"></div>
          <div class="s3"></div>
          <div class="s4"></div>
          <div class="s5"></div>
          <div class="s6"></div>
        </div>
        <div class="an">
          <div class="tank"></div>
          <div class="astro">
            <div class="helmet">
              <div class="glass">
                <div class="shine"></div>
              </div>
            </div>
            <div class="dress">
              <div class="c">
                <div class="btn1"></div>
                <div class="btn2"></div>
                <div class="btn3"></div>
                <div class="btn4"></div>
              </div>
            </div>
            <div class="handl">
              <div class="handl1">
                <div class="glovel">
                  <div class="thumbl"></div>
                  <div class="b2"></div>
                </div>
              </div>
            </div>
            <div class="handr">
              <div class="handr1">
                <div class="glover">
                  <div class="thumbr"></div>
                  <div class="b1"></div>
                </div>
              </div>
            </div>
            <div class="legl">
              <div class="bootl1">
                <div class="bootl2"></div>
              </div>
            </div>
            <div class="legr">
              <div class="bootr1">
                <div class="bootr2"></div>
              </div>
            </div>
            <div class="pipe">
              <div class="pipe2">
                <div class="pipe3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="hero_banner_background" src="assets/Layers.png" alt="" />
      <div className="hero_container">
        <img src="assets/stars_friends_logo.png" alt="" />
      </div>
      <button href="discord.gg/ZgbavxQB7J" target="_blank">
        Join Our discord
      </button>
    </div>
  );
}

export default Hero;
