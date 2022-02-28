import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <img
        className="discord_bg_top"
        src="assets/cloud_top.png"
        alt="cloud_top_side_discord"
      />
      <div className="background_global">
        <div className="container">
          <h1>FAQ</h1>
          <div class="content">
            <details open>
              <summary>WEN MINT ?</summary>
              <div class="faq__content">
                <p className="faq_answer">
                  The mint day has still to be announced. Make sure to follow
                  the project on social networks to have the latest news.
                </p>
              </div>
            </details>
            <details open>
              <summary>WHERE MINT ?</summary>
              <div class="faq__content">
                <p className="faq_answer">
                  You will find our NFT on the secondary market OpenSea.
                </p>
              </div>
            </details>
            <details>
              <summary>HOW DO I MINT ?</summary>
              <div class="faq__content">
                <p className="faq_answer">
                  If you are on the whitelist, you will have early access to the
                  mint day, with a lower mint price. If not, you’ll have to wait
                  until the pre-launch ends to mint at the fixed public mint
                  price.
                </p>
              </div>
            </details>
            <details>
              <summary>HOW MANY CAN I MINT ?</summary>
              <div class="faq__content">
                <p className="faq_answer">
                  Maximum of 4 StarsFriends per person.{" "}
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
      <img
        className="discord_bg_top"
        src="assets/cloud_bot.png"
        alt="cloud_bot_side_discord"
      />
      <h2>&copy; 2022 Stars Friends NFT</h2>
    </div>
  );
}
