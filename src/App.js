import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';
import './App.css'
const valueSlice = createSlice({
  name: 'value',
  initialState: '',
  reducers: {
    updateValue: (state, action) => {
      return action.payload;
    },
  },
});

const { updateValue } = valueSlice.actions;



const ComponentB = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state);

  const handleChange = (event) => {
    dispatch(updateValue(event.target.value));
  };

  return (
    <div>
      <h2>Component B</h2>
      <input
        type="text"
        className="input-field"
        value={value}
        onChange={handleChange}
        placeholder='Enter the value'
      />
    </div>
  );
};

const ComponentC = () => {
  const value = useSelector((state) => state);

  return (
    <div>
      <h2>Component C</h2>
      <p>Value from Redux store: {value}</p>
      {value.length > 0 && <p>Length of value: {value.length}</p>}
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <h1>Component A</h1>
      <div className="components-container">
        <ComponentB />
        <ComponentC />
      </div>
    </div>
  );
};

export {valueSlice , App};
