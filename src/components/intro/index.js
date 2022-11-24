import React from "react";
import "./index.css";

import Button from "../ButtonWithRouter";
import { withContext } from "./../../provider/index";

export default withContext(({ ctx }) => (
  <section className="flex-container intro">
    <div>
      <h2>
        Send Ether to <span className="ms-green">Multiple</span> Ethereum
        Addresses
      </h2>
      <p>
        With Multisend, you can distribute Ether to multiple wallet addresses at
        once with a single transaction fee. MultiSends saves you an incredible
        amount of time, energy and money in distributing Ethereum assets.
      </p>
      {ctx.auth ? (
        <Button to="/send" customStyle="ms-btn wt-icon ms-green-bg">
          START SENDING <span className="send-arrow">↗</span>
        </Button>
      ) : (
        <Button to="/connect" customStyle="ms-btn wt-icon ms-green-bg">
          START SENDING <span className="send-arrow">↗</span>
        </Button>
      )}
    </div>
  </section>
));
