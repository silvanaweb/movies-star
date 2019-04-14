import React from "react";
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
  const [value, setValue] = React.useState(defaultValue);
  const [mood, setMood] = React.useState(moods.NEUTRAL);
  const badMoodLimit = max * 0.4;
  const gooMoodLimit = max * 0.6;

  React.useEffect(() => {
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
    onValueChange(valueN);
  }, [value]);

  const onChangeRange = e => {
    const { value } = e.target;

    setValue(value);
  };
  return (
    <div className="RangeSlider">
      <div className="RangeSlider__side">{min}</div>
      <div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChangeRange}
          className={`RangeSlider__input slider--${mood}`}
        />
      </div>
      <div className="RangeSlider__side">{max}</div>
    </div>
  );
};

export { RangeSlider };
