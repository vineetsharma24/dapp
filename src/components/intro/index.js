import React from "react";
import "./index.css";

import Button from "../ButtonWithRouter";
import { withContext } from "./../../provider/index";
import ether from "../../assets/ether.png";

export default withContext(({ ctx }) => (
  <section className="flex-container intro">
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ minWidth: "500px", paddingTop: "100px" }}>
        <h2 className="ms-green">Multisend</h2>
        <p>
          With Multisend, you can distribute Ether to multiple wallet addresses
          at once with a single transaction fee. MultiSends saves you an
          incredible amount of time, energy and money in distributing Ethereum
          assets.
        </p>
        {ctx.auth ? (
          <Button
            to="/send"
            customStyle="ms-btn wt-icon ms-green-bg"
            style={{ color: "aqua" }}
          >
            START SENDING <span className="send-arrow">↗</span>
          </Button>
        ) : (
          <Button
            to="/connect"
            customStyle="ms-btn wt-icon ms-green-bg"
            style={{ color: "aqua" }}
          >
            START SENDING <span className="send-arrow">↗</span>
          </Button>
        )}
      </div>
      <div
        style={{ minWidth: "500px", paddingTop: "50px", paddingLeft: "100px" }}
      >
        <img style={{ height: "500px" }} src={ether}></img>
      </div>
    </div>
  </section>
));
