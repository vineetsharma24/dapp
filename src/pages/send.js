import React from "react";
import SendBox from "../components/sendBox";

import Modals from "../components/modals";

export default () => (
  <main className="send">
    <SendBox />
    <Modals modalName="success" />
  </main>
);
