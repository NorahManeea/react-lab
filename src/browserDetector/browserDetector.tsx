import React from "react";
import Bowser from "bowser";

const BrowserDetector = () => {
  const userAgent = window.navigator.userAgent;
  const browser = Bowser.getParser(userAgent);
  const os = browser.getOSName();
  const browserName = browser.getBrowserName();

  return (
    <div>
      {browserName === "Safari" ? (
        <button onClick={() => console.log("Apple Wallet Clicked")}>
          Add to Apple Wallet
        </button>
      ) : os === "Android" && browserName !== "Safari" ? (
        <button onClick={() => console.log("Google Wallet Clicked")}>
          Add to Google Wallet
        </button>
      ) : (
        <p>Wallet option not available for this OS</p>
      )}
    </div>
  );
};

export default BrowserDetector;
