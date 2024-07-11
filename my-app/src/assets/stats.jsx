import React from 'react';
import { stats } from './Donne';

function Stats() {
  return (
    <>
      {stats.map(({ no, title }, i) => (
        <div className="stats__box" key={i}>
          <h3 className="stats__no">{no}</h3>
          <p className="stats__title" dangerouslySetInnerHTML={{ __html: title }} />
        </div>
      ))}
    </>
  );
}

export default Stats;
