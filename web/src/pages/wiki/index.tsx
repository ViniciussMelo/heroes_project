import React from 'react';
import timelineOrder from './images/timelineOrder.jpg'

const Wiki = () => {
  return (
    <>
      <div className="content" style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <img src={timelineOrder} id="image1" alt="image1"/>
      </div>
    </>
  )
}

export default Wiki;