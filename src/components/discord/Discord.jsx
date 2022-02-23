import React from "react";
import "./discord.scss";

export default function Discord() {
  return (
    <div className="discord">
      <img className="discord_bg_top" src="assets/cloud_top.png" alt="" />
      <div className="container">
        <h1>Join our community</h1>
        <div className="discord_bg">
          <p>
            Stars Friends Discord just opened on the galaxy ! If you want to
            join the #starsfriends it’s here. Join us to get the news as soon as
            possible and follow our latest announcements.
          </p>
          <div className="btn_discord">
            <button href="discord.gg/ZgbavxQB7J" target="_blank">
              Join Our discord
            </button>
          </div>
        </div>
      </div>
      <img className="discord_bg_top" src="assets/cloud_bot.png" alt="" />
    </div>
  );
}
