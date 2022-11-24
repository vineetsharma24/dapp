import React from "react";
import { withContext } from "./../../provider/index";
import Button from "../ButtonWithRouter";

export default withContext(({ Ref, ctx }) => (
  <div ref={Ref} className="board shadowize gs-modal success-txn">
    <div>
      <div>Transaction Successful!</div>
      <div className="success-msg">{`Your MATIC has been succesfully distributed`}</div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://mumbai.polygonscan.com/tx/${ctx.txHash}`}
      >
        View on polygonscan
      </a>
      <div>
        <Button
          to="/send"
          handleClick={() => ctx.handleChange("modalName", "")}
          customStyle="ms-btn back-btn vyper-btn"
        >
          No thanks
        </Button>
      </div>
    </div>
  </div>
));
