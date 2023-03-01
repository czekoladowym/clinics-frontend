import { useState } from "react";

const checkBoxes = ["City", "State", "ZIP", "Clinic Name", "Suburb"];
const Checkbox = ({ onChange, activeSelector }: any) => {
  return (
    <div className="custom-radio">
      {checkBoxes.map((checkBox, i) => (
        <label className="container-radio" key={i}>
          {checkBox}
          <input
            type="radio"
            name="radio-input"
            value={checkBox}
            checked={activeSelector == checkBox}
            onChange={(e) => {
              onChange(e.target.value);
            }}
          />
          <span className="checkmark"></span>
        </label>
      ))}
    </div>
  );
};
export default Checkbox;
