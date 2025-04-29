import React, { useEffect, useState } from "react";
import { useIsMobile } from "../index";
import "../../dist/components/phonebanner.css";
function PhoneBanner(props) {
    var isMobile = useIsMobile();
    var getAppStoreLink = function () {
        var userAgent = window.navigator.userAgent;
        if (/iPhone|iPad|iPod/i.test(userAgent)) {
            return props.IOStoreLink;
        }
        else if (/Android/i.test(userAgent)) {
            return props.PLayStoreLink;
        }
        else {
            return "https://localhost:3000";
        }
    };
    var _a = useState(getAppStoreLink()), storeLink = _a[0], setStoreLink = _a[1];
    var _b = useState("appear"), isBannerVisible = _b[0], setIsBannerVisible = _b[1];
    useEffect(function () {
        var lastHiddenTime = localStorage.getItem("bannerHiddenTime");
        if (lastHiddenTime) {
            var elapsedTime = Date.now() - parseInt(lastHiddenTime, 10);
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
    return (React.createElement("div", { className: "banner" + " " + isBannerVisible },
        React.createElement("div", { className: "all-content" },
            React.createElement("i", { className: "moon-xmark", onClick: Hidebanner }),
            React.createElement("img", { src: props.logo, alt: "", className: "app-logo" }),
            React.createElement("div", { className: "content" },
                React.createElement("h3", { className: "title" }, props.AppTitle),
                React.createElement("h6", { className: "company" }, props.CompanyName),
                React.createElement("h6", null,
                    "GET - On the",
                    " ",
                    storeLink.includes("play.google.com") ? "Play Store" : "App Store"))),
        React.createElement("a", { href: storeLink, target: "_blank", rel: "noopener noreferrer" }, "View")));
}
export default PhoneBanner;
