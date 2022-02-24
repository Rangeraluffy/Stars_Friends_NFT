import React from "react";
import "./discord.scss";

export default function Discord() {
  return (
    <div className="discord">
      <img
        className="discord_bg_top"
        src="assets/cloud_top.png"
        alt="cloud_top_side_discord"
      />
      <div className="background_global">
        <div className="container">
          <h1>Join our community</h1>
          <div className="discord_bg">
            <p>
              Stars Friends Discord just opened on the galaxy ! If you want to
              join the #starsfriends it’s here. Join us to get the news as soon
              as possible and follow our latest announcements.
            </p>
            <div class="btn-cont">
              <a
                class="btn"
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
        </div>
      </div>
      <img
        className="discord_bg_top"
        src="assets/cloud_bot.png"
        alt="cloud_bot_side_discord"
      />
    </div>
  );
}
