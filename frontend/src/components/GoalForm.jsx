import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { create, reset } from "../features/goals/goalSlice";

const GoalForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(create({ text }));
    setText("");
  };

  return (
    <section className="form">
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="text"
            name="text"
            value={text}
            placeholder="Please Enter your goal"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-block" />
        </div>
      </form>
    </section>
  );
};

export default GoalForm;
