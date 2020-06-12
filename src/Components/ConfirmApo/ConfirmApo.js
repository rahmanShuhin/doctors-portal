import React from 'react';
import { useParams } from 'react-router-dom';
import "./ConfirmApo.css";
const ConfirmApo = () => {
  const { key, date } = useParams();
  console.log(key, date);
  return (
    <div className="confirm">
      <h1>Confirm</h1>
    </div>
  );
};

export default ConfirmApo;