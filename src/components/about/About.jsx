import React from "react";
import "./about.scss";

export default function About() {
  return (
    <div className="about">
      <img
        className="about_bg_top"
        src="assets/cloud_top.png"
        alt="cloud_top_side_about"
      />
      <div className="background_global">
        <div className="container">
          <div className="about_flex_container">
            <div className="about_img">
              <img src="assets/Stars_Friends_GIF.gif" alt="stars_friends_gif" />
            </div>
            <div className="about_content">
              <h1 className="title">What is Stars Friends ?</h1>
              <p className="sub_title">
                The StarsFriends galaxy is a collection of 7,777 generative
                Stars Friends with hundreds of elements inspired by different
                feelings in the real world with custom.
              </p>
              <p>
                Each artwork is original, with its own color palette, creation
                and subtle reference. The objective is to make each Star unique
                to each person who wishes to have it as a friend.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        className="about_bg_top"
        src="assets/cloud_bot.png"
        alt="cloud_bot_side_about"
      />
    </div>
  );
}
