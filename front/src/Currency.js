import React, { Component } from "react";

import Output from "./Output";
import ron from "./Images/ron.png";
import gbp from "./Images/gbp.png";
import usd from "./Images/USD.png";
import eur from "./Images/EURO.png";
import aud from "./Images/aud.png";
import bgn from "./Images/bgn.png";
import brl from "./Images/brl.png";
import cad from "./Images/cad.png";
import chf from "./Images/chf.png";
import cny from "./Images/cny.png";
import czk from "./Images/czk.png";
import dkk from "./Images/dkk.png";
import hkd from "./Images/hkd.png";
import hrk from "./Images/hrk.png";
import huf from "./Images/huf.png";
import idr from "./Images/idr.png";
import ils from "./Images/ils.png";
import inr from "./Images/inr.png";
import isk from "./Images/isk.png";
import jpy from "./Images/jpy.png";
import krw from "./Images/krw.png";
import mxn from "./Images/mxn.png";
import myr from "./Images/myr.png";
import nok from "./Images/nok.png";
import nzd from "./Images/php.png";
import php from "./Images/php.png";
import pln from "./Images/pln.png";
import sek from "./Images/sek.png";
import rub from "./Images/rub.png";
import sgd from "./Images/sgd.png";
import thb from "./Images/thb.png";
import tri from "./Images/try.png";
import zar from "./Images/ZAR.png";

export default class Currency extends Component {
  constructor() {
    super();
    this.state = {
      currency: "Not yet",
      value: "EUR",
      value2: "EUR",
      rates: [],
      output: 0,
      images: {
        EUR: eur,
        RON: ron,
        USD: usd,
        GBP: gbp,
        AUD: aud,
        BGN: bgn,
        BRL: brl,
        CAD: cad,
        CHF: chf,
        CNY: cny,
        CZK: czk,
        DKK: dkk,
        HKD: hkd,
        HRK: hrk,
        HUF: huf,
        IDR: idr,
        ILS: ils,
        INR: inr,
        ISK: isk,
        JPY: jpy,
        KRW: krw,
        MXN: mxn,
        MYR: myr,
        NOK: nok,
        NZD: nzd,
        PHP: php,
        PLN: pln,
        RUB: rub,
        SEK: sek,
        SGD: sgd,
        THB: thb,
        TRY: tri,
        ZAR: zar,
      },
    };
  }

  componentDidMount() {
    this.getRon();
  }

  handleValueChange = (event) => {
    (async () => {
      await this.setState({
        value: event.target.value,
      });
      const img = document.getElementById("img1");

      img.src = this.state.images[this.state.value];

      this.refs.Output.getRon();
    })();
  };

  handleValueChange2 = (event) => {
    (async () => {
      await this.setState({
        value2: event.target.value,
      });
      const img = document.getElementById("img2");

      img.src = this.state.images[this.state.value2];

      this.refs.Output.getRon();
    })();
  };

  getRon = async () => {

    await fetch(
      "http://data.fixer.io/api/latest?access_key=028cf1377528629161103838ee51e32d"
    )
      .then(async (response) => {
        let ratesFull = await response.json();
        this.setState({
          rates: ratesFull.rates,
        });
        this.state.rates.EUR = 1;
        const inputValue = document.getElementById("inputValue");
        const outputValue = document.getElementById("outputValue");

        outputValue.value = (
          (this.state.rates[this.state.value2] /
            this.state.rates[this.state.value]) *
          inputValue.value
        ).toFixed(4);

        this.refs.Output.getRon();
      })
      .catch((err) => {
        console.warn(err);
      });

    // });
  };

  render() {
    return (
      <div class="inputs">
        <div className="container">
          <div className="part1">
            <select value={this.state.value} onChange={this.handleValueChange}>
              <option value="EUR">EUR</option>
              <option value="AUD">AUD</option>
              <option value="BGN">BGN</option>
              <option value="BRL">BRL</option>
              <option value="CAD">CAD</option>
              <option value="CHF">CHF</option>
              <option value="CNY">CNY</option>
              <option value="CZK">CZK</option>
              <option value="DKK">DKK</option>
              <option value="GBP">GBP</option>
              <option value="HKD">HKD</option>
              <option value="HRK">HRK</option>
              <option value="HUF">HUF</option>
              <option value="IDR">IDR</option>
              <option value="ILS">ILS</option>
              <option value="INR">INR</option>
              <option value="ISK">ISK</option>
              <option value="JPY">JPY</option>
              <option value="KRW">KRW</option>
              <option value="MXN">MXN</option>
              <option value="MYR">MYR</option>
              <option value="NOK">NOK</option>
              <option value="NZD">NZD</option>
              <option value="PHP">PHP</option>
              <option value="PLN">PLN</option>
              <option value="RON">RON</option>
              <option value="RUB">RUB</option>
              <option value="SEK">SEK</option>
              <option value="SGD">SGD</option>
              <option value="THB">THB</option>
              <option value="TRY">TRY</option>
              <option value="USD">USD</option>
              <option value="ZAR">ZAR</option>
            </select>
            <img
              id="img1"
              className="imagine"
              src={eur}
              alt=""
              width="35px"
            ></img>
            <input id="inputValue" type="number"></input>
          </div>

          <div className="part2">
            <select
              value={this.state.value2}
              onChange={this.handleValueChange2}
            >
              <option value="EUR">EUR</option>
              <option value="AUD">AUD</option>
              <option value="BGN">BGN</option>
              <option value="BRL">BRL</option>
              <option value="CAD">CAD</option>
              <option value="CHF">CHF</option>
              <option value="CNY">CNY</option>
              <option value="CZK">CZK</option>
              <option value="DKK">DKK</option>
              <option value="GBP">GBP</option>
              <option value="HKD">HKD</option>
              <option value="HRK">HRK</option>
              <option value="HUF">HUF</option>
              <option value="IDR">IDR</option>
              <option value="ILS">ILS</option>
              <option value="INR">INR</option>
              <option value="ISK">ISK</option>
              <option value="JPY">JPY</option>
              <option value="KRW">KRW</option>
              <option value="MXN">MXN</option>
              <option value="MYR">MYR</option>
              <option value="NOK">NOK</option>
              <option value="NZD">NZD</option>
              <option value="PHP">PHP</option>
              <option value="PLN">PLN</option>
              <option value="RON">RON</option>
              <option value="RUB">RUB</option>
              <option value="SEK">SEK</option>
              <option value="SGD">SGD</option>
              <option value="THB">THB</option>
              <option value="TRY">TRY</option>
              <option value="USD">USD</option>
              <option value="ZAR">ZAR</option>
            </select>
            <img
              id="img2"
              className="imagine"
              src={eur}
              alt=""
              width="35px"
            ></img>

            <input type="text" id="outputValue"></input>
          </div>
          <button onClick={() => this.getRon()}>Get Currency</button>
          <Output state={this.state} getRon={this.getRon} ref="Output" />
        </div>
      </div>
    );
  }
}
