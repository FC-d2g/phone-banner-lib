import React, { useEffect, useState } from "react";
import { useIsMobile } from "../index";
import "../../dist/components/phonebanner.css";

function PhoneBanner(props: any) {
  const isMobile = useIsMobile();

  const getAppStoreLink = () => {
    const userAgent = window.navigator.userAgent;

    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      return props.IOStoreLink;
    } else if (/Android/i.test(userAgent)) {
      return props.PLayStoreLink;
    } else {
      return "https://localhost:3000";
    }
  };

  const [storeLink, setStoreLink] = useState(getAppStoreLink());
  const [isBannerVisible, setIsBannerVisible] = useState("appear");

  useEffect(() => {
    const lastHiddenTime = localStorage.getItem("bannerHiddenTime");
    if (lastHiddenTime) {
      const elapsedTime = Date.now() - parseInt(lastHiddenTime, 10);
      if (elapsedTime < props.timeHidden) {
        setIsBannerVisible("disappear");
      }
    }
  }, []);

  function Hidebanner() {
    setIsBannerVisible("disappear");
    localStorage.setItem("bannerHiddenTime", Date.now().toString());
  }

  if (!isMobile) {
    return null;
  }

  return (
    <div className={"banner" + " " + isBannerVisible}>
      <div className="all-content">
        <i className="moon-xmark" onClick={Hidebanner} />
        <img src={props.logo} alt="" className="app-logo" />
        <div className="content">
          <h3 className="title">{props.AppTitle}</h3>
          <h6 className="company">{props.CompanyName}</h6>
          <h6>
            GET - On the{" "}
            {storeLink.includes("play.google.com") ? "Play Store" : "App Store"}
          </h6>
        </div>
      </div>
      <a href={storeLink} target="_blank" rel="noopener noreferrer">
        View
      </a>
    </div>
  );
}

export default PhoneBanner;