import React, { useEffect, useState } from "react";
import "./RangeSlider.css";

const moods = {
  NEUTRAL: "neutral",
  BAD: "bad",
  GOOD: "good",
  BLISSFUL: "blissful",
  BADBAD: "very-bad"
};

const RangeSlider = ({
  defaultValue = 5,
  min = 1,
  max = 10,
  step = 1,
  onValueChange = () => undefined
}) => {
  const [value, setValue] = useState(`${defaultValue}`);
  const [mood, setMood] = useState(moods.NEUTRAL);
  const [tooltipPos, setTooltipPos] = useState(-1);
  const [showTooltip, setShowtooltip] = useState(false);
  const badMoodLimit = max * 0.4;
  const gooMoodLimit = max * 0.6;
  const inputRef = React.createRef();

  useEffect(() => {
    const valueN = parseFloat(value);
    if (valueN === min) {
      setMood(moods.BADBAD);
    } else if (valueN === max) {
      setMood(moods.BLISSFUL);
    } else if (valueN < badMoodLimit) {
      setMood(moods.BAD);
    } else if (valueN > gooMoodLimit) {
      setMood(moods.GOOD);
    } else {
      setMood(moods.NEUTRAL);
    }
    mkToolTip(valueN);
    onValueChange(valueN);
  }, [value]);

  useEffect(() => {
    let timeTT;
    if (tooltipPos > 0) {
      timeTT && clearTimeout(timeTT);
      setShowtooltip(true);
      timeTT = setTimeout(() => {
        setShowtooltip(false);
      }, 2000);
    }
  }, [tooltipPos]);

  const mkToolTip = valueN => {
    const inputWidth = inputRef.current.offsetWidth;
    const pos = ((inputWidth * (valueN - min)) / (max - min)) * 0.9;
    setTooltipPos(pos);
  };

  const onChangeRange = e => {
    const { value } = e.target;
    setValue(value);
  };

  const animateTooltip = (show, pos) => ({
    opacity: show ? 1 : 0,
    left: pos
  });

  return (
    <div className="RangeSlider">
      <div className="RangeSlider__side">{min}</div>
      <div className="RangeSlider__center">
        <div
          className="RangeSlider__tooltip"
          style={animateTooltip(showTooltip, tooltipPos)}
        >
          {value}
        </div>

        <input
          className={`RangeSlider__input slider--${mood}`}
          max={max}
          min={min}
          onChange={onChangeRange}
          ref={inputRef}
          step={step}
          type="range"
          value={value}
        />
      </div>
      <div className="RangeSlider__side">{max}</div>
    </div>
  );
};

export { RangeSlider };
