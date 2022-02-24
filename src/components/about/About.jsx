import React from "react";
import "./about.scss";

export default function About() {
  return (
    <div className="about">
      <img className="about_bg_top" src="assets/cloud_top.png" alt="" />
      <div className="background_global">
        <div className="container">
          <div className="about_flex_container">
            <div className="about_img">
              <img src="assets/Stars_Friends_GIF.gif" alt="" />
            </div>
            <div className="about_content">
              <h1 className="title">What is Stars Friends ?</h1>
              <p className="sub_title">
                The StarsVerse is a collection of 7,777 generative Stars Friends
                with hundreds of elements inspired by different feelings in the
                real world with custom skins inspired by the world of video
                games and manga.
              </p>
              <p>
                Each artwork is original, with its own color palette and
                creation and subtle reference. The objective was to make each
                Star unique to each person who wishes to have it as a friend.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img className="about_bg_top" src="assets/cloud_bot.png" alt="" />
    </div>
  );
}
