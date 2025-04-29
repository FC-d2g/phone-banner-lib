import { useEffect, useState } from "react";
var useIsMobile = function () {
    var isMobileDevice = function () {
        return /Mobi|Android|iPhone|iPad|iPod/i.test(window.navigator.userAgent);
    };
    var _a = useState(isMobileDevice()), isMobile = _a[0], setIsMobile = _a[1];
    useEffect(function () {
        var handleResize = function () {
            setIsMobile(isMobileDevice());
        };
        window.addEventListener("resize", handleResize);
        return function () {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return isMobile;
};
export default useIsMobile;
