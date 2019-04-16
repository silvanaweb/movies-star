import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const testStyle = { color: "white", fontSize: "2.8rem" };

const animateStyle = show => ({
  transition: "opacity 300ms",
  opacity: show ? 1 : 0,
  ...testStyle
});

const NotFoundPage = () => {
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 2000);
  }, []);

  return (
    <div className="NotFoundPage">
      <div style={animateStyle(showText)}>
        <span>Got lost, huh?</span>{" "}
        <Link style={testStyle} to="/">
          Find your way home =>
        </Link>
      </div>
      <div className="NotFoundPageGif" />
    </div>
  );
};

export { NotFoundPage };
