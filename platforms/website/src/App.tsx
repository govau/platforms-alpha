import * as React from "react";
import "./App.css";

import logo from "./coa.svg";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Platforms.gov.au</h1>
        </header>
        <p className="App-intro">Welcome. Here are all the platforms:</p>
        <ul>
          <li>
            <a href="https://identity-website.apps.y.cld.gov.au/">Identity</a>
          </li>
          <li>
            <a href="https://message-website.apps.y.cld.gov.au/">Message</a>
          </li>
          <li>
            <a href="https://notify-website.apps.y.cld.gov.au/">Notify</a>
          </li>
          <li>
            <a href="https://tell-website.apps.y.cld.gov.au/">Tell</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
