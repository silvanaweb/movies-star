import React from "react";
import { connect } from "react-redux";
import { setSelectedRating } from "../../store/actions/filters";
import { RangeSlider } from "../RangeSlider/RangeSlider";

const FilterByRating = ({
  className,
  setSelectedRating,
  filters: { rating }
}) => {
  const onSelectedRatingChange = rating => {
    // dispatch to filters
    setSelectedRating(rating);
  };
  return (
    <div className={className}>
      <RangeSlider
        defaultValue={rating}
        min={1}
        max={10}
        step={0.5}
        onValueChange={onSelectedRatingChange}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    filters: state.filters
  };
};
const mapDispatchToProps = dispatch => ({
  setSelectedRating: rating => dispatch(setSelectedRating(rating))
});

export { FilterByRating };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterByRating);
