import React from 'react';
export default function Form({ fields }) {
  console.log(fields);
  return (
    <div>
      <h1>Fields</h1>
      {Object.keys(fields).map((value, key) => {
        console.log(fields[value]);
        // Object.keys(fields[value]).map((item) => {
        //   return <div>{item}</div>;
        // });
        // console.log(fields[value] + fields[key]);
      })}
    </div>
  );
}
