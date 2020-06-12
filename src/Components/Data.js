import React, { createContext, useEffect, useState } from 'react';
export const DataContext = createContext();
export const Data = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/Appointment')
      .then(response => response.json())
      .then(jsun => setData(jsun.reverse()));
  }, []);
  console.log("ami aschi")
  return (
    <DataContext.Provider value={[data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
};

