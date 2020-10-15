import React from 'react';

function WorkExp(props) {
  const { workDet } = props;
  return (
    <>
      <li>
        <h4>{workDet.workPlace}</h4>
      </li>
      <p>{workDet.type}</p>
      <p>{workDet.role}</p>
      <p>{workDet.duration}</p>
    </>
  );
}

export default WorkExp;
