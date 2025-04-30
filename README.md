# Phone Banner Library

`phone-banner-lib` is a reusable React library that provides a mobile banner component (`PhoneBanner`) and a hook (`useIsMobile`) to detect if the user is on a mobile device. This library enhances user experience by displaying a customizable banner for mobile users and providing a utility to check the user's device type.

---

## Installation

Install the library using npm:

```bash
npm install phone-banner-lib
```

---

## Features

### 1. `PhoneBanner`
A React component that displays a customizable banner for mobile users.

### 2. `useIsMobile`
A React hook that detects if the user is on a mobile device.

---

## Usage

### 1. `useIsMobile`

The `useIsMobile` hook can be used to determine if the user is on a mobile device. It returns a boolean (`true` for mobile devices, `false` otherwise).

```javascript
import { useIsMobile } from "phone-banner-lib";

const isMobile = useIsMobile();

if (isMobile) {
  console.log("The user is on a mobile device.");
} else {
  console.log("The user is not on a mobile device.");
}
```

### 2. `PhoneBanner`

The `PhoneBanner` component displays a banner for mobile users with links to the App Store or Play Store. It is fully customizable via props.

#### Props:
- **IOStoreLink**: The URL for the iOS App Store.
- **PLayStoreLink**: The URL for the Google Play Store.
- **logo**: The logo image to display in the banner.
- **AppTitle**: The title of the app.
- **CompanyName**: The name of the company.
- **timeHidden**: The time (in milliseconds) to hide the banner after it is dismissed.

#### Example:

```javascript
import { PhoneBanner } from "phone-banner-lib";
import logo from "./path-to-logo.png";

function App() {
  return (
    <PhoneBanner
      IOStoreLink="https://appstorelink"
      PLayStoreLink="https://playstorelink"
      logo={logo}
      AppTitle="Title of the App"
      CompanyName="Company Name"
      timeHidden={20000} // 20 seconds
    />
  );
}
```

---

## How It Works

### `useIsMobile`:
- Detects if the user is on a mobile device using `window.navigator.userAgent`.
- Automatically updates on window resize.

### `PhoneBanner`:
- Displays a banner only for mobile users.
- Provides links to the App Store or Play Store based on the user's device.
- Allows the user to dismiss the banner, which will remain hidden for the specified `timeHidden` duration.

---

Enhance your mobile user experience with `phone-banner-lib` today!

---
### Example Video

Here is a video demonstration of the `PhoneBanner` component in action:

[![PhoneBanner Demo]](https://streamable.com/95f8bp "PhoneBanner Demo")

---

# Report errors

[Report issues or contribute on GitHub](https://github.com/FC-d2g/phone-banner-lib.git)