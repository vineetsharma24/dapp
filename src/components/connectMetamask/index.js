import React, { Component } from "react";
import "./index.css";
import imgs from "./../../assets/imgs/index";
import Button from "../ButtonWithRouter";
import ethApi from "./../../utils/contractCall/index";
import { withContext } from "./../../provider/index";
import Modal from "react-modal";

class connectMetamask extends Component {
  state = {
    modalIsOpen: false,
    secondModalIsOpen: false,
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  openSecondModal = () => {
    this.setState({ secondModalIsOpen: true });
  };

  closeSecondModal = () => {
    this.setState({ secondModalIsOpen: false });
  };

  render() {
    const { ctx } = this.props;
    return (
      <div>
        <div style={{ height: "100px" }} />

        <div
          className="flex-container shadowize board connect-metamask-board"
          style={{ marginLeft: "150px" }}
        >
          <img src={imgs.metamask} alt="metamask-logo" />
          <div>
            <h2>Connect to Metamask</h2>
            <p>Connect & sign transaction via browser extension</p>
          </div>
          <div>
            <Button
              to="/send"
              handleClick={async () => {
                const ade = await ethApi.checkMetamask();
                if (ade === false) {
                  return this.openModal();
                } else {
                  const res = await ethApi.enableMetamask();
                  if (res === "1234") {
                    return this.openModal();
                  } else {
                    ctx.handleChange("auth", true);
                    ctx.handleChange("metamaskAddress", res);

                    return res;
                  }
                }
              }}
              customStyle="ms-btn"
            >
              Connect
            </Button>
            <Modal
              isOpen={this.state.modalIsOpen}
              ariaHideApp={false}
              onRequestClose={this.closeModal}
            >
              <img src={imgs.error} alt="error" />
              <h2>No web3 provider found</h2>
              <div>
                Install web3 provider. <br />{" "}
                <span style={{ color: "#5D3FD3" }}>For Desktop:</span>
                <br />
                Please install{" "}
                <a
                  className="app-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://metamask.io"
                >
                  Metamask
                </a>
                {", "}
                and return to this page to continue. <br />
                <span style={{ color: "#5D3FD3" }}>For Mobile:</span>
                <br />
                Please go to your device appstore, download{" "}
                <span>
                  <a
                    className="app-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://trustwallet.com"
                  >
                    Trustwallet
                  </a>{" "}
                  or{" "}
                  <a
                    className="app-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://status.im/get"
                  >
                    Status.im
                  </a>
                </span>{" "}
                and open this page from within the app
              </div>
              <button onClick={this.closeModal}>Got it</button>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}
export default withContext(connectMetamask);
