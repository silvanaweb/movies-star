import React, { useState } from "react";
import { RangeSlider } from "../RangeSlider/RangeSlider";

const FilterByRating = () => {
  const [rating, setRating] = useState(3);

  return (
    <div>
      <RangeSlider />
    </div>
  );
};

export default FilterByRating;
