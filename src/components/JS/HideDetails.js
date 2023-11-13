import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function HideNav({ children }) {
  const location = useLocation();
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    // console.log("location", location);
    if (location.pathname.startsWith("/FilmDetails")) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [location]);

  return <div>{showNav && children}</div>;
}
