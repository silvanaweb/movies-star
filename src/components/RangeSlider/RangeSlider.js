import React, { useEffect, useState } from "react";
import "./RangeSlider.css";

const moods = {
	NEUTRAL: "neutral",
	BAD: "bad",
	GOOD: "good",
	BLISSFUL: "blissful",
	BADBAD: "very-bad",
};

const RangeSlider = ({
	defaultValue = 5,
	labels = { tooltip: "" },
	min = 1,
	max = 10,
	step = 1,
	onValueChange = () => undefined,
}) => {
	const [value, setValue] = useState(`${defaultValue}`);
	const [mood, setMood] = useState(moods.NEUTRAL);
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
		onValueChange(valueN);
		return doShowTooltip();
	}, [value]);

	const doShowTooltip = () => {
		let timeTT;
		timeTT && clearTimeout(timeTT);
		setShowtooltip(true);
		timeTT = setTimeout(() => {
			setShowtooltip(false);
		}, 3000);
		return () => clearTimeout(timeTT);
	};

	const onChangeRange = e => {
		const { value } = e.target;
		setValue(value);
	};

	const animateTooltip = show => ({
		opacity: show ? 1 : 0,
	});

	return (
		<div className="RangeSlider">
			<div className="RangeSlider__side">{min}</div>
			<div className="RangeSlider__center">
				<div className="RangeSlider__tooltip" style={animateTooltip(showTooltip)}>
					{labels.tooltip} {value}
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
