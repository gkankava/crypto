import React from "react";

function Fees() {
  return (
    <section id="fees" className="container">
      <h1>Fees</h1>
      <div className="content-wrapper">
        <div className="main-wrapper">
          <div className="header">
            <span>Currency</span>
            <span style={{ width: "200px" }}>Payment method </span>
            <span style={{ width: "200px" }}>Deposit</span>
            <span>Withdrawal</span>
          </div>
          <div className="main-block">
            <div className="r">
              <div className="col col-1">
                <div className="cur-v">
                  <div className="cont">
                    <div className="ico">€</div>
                    <div className="title">EUR</div>
                  </div>
                </div>
              </div>
              <div className="col col-2">
                <div className="row">
                  <span className="crd">Visa</span>
                  <span className="dps">1.5% + 5 €</span>
                  <span>
                    <div>
                      <span className="sc">Service charge:</span>
                      <div className="sc-val">2.9%</div>
                    </div>
                  </span>
                  <span>
                    <div>
                      <span className="sc">Commission:</span>
                      <div>+ 5 €</div>
                    </div>
                  </span>
                </div>
                <div className="row">
                  <span className="crd">MasterCard</span>
                  <span className="dps">1.5% + 5 €</span>
                  <span>
                    <div>
                      <span className="sc">Service charge:</span>
                      <div className="sc-val">2.9%</div>
                    </div>
                  </span>
                  <span>
                    <div>
                      <span className="sc">Commission:</span>
                      <div>+ 5 €</div>
                    </div>
                  </span>
                </div>
                <div className="row">
                  <span className="crd">SEPA</span>
                  <span className="dps">0 €</span>
                  <span>
                    <div>
                      <span>0.3% + 10 €</span>
                    </div>
                  </span>
                  <span>
                    <div></div>
                  </span>
                </div>
              </div>
            </div>
            <div className="border" />
            <div className="r">
              <div className="col col-1">
                <div className="cur-v">
                  <div className="cont">
                    <div className="ico">₿</div>
                    <div className="title">BTC</div>
                  </div>
                </div>
              </div>
              <div className="col col-2">
                <div className="row" style={{ height: "100%" }}>
                  <span className="crd"></span>
                  {/* <span className="dps"></span> */}
                  <div style={{ width: "200px" }}>
                    <span className="sc">Minimum deposit:</span>
                    <div className="sc-val">0.001 BTC</div>
                  </div>
                  <span>
                    <div>
                      <span className="sc">Minimum withdrawal:</span>
                      <div className="sc-val">0.002 BTC</div>
                    </div>
                  </span>
                  <span>
                    <div>
                      <span className="sc">Withdrawal fee :</span>
                      <div>0.0005 BTC</div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fees;
