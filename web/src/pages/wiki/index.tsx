import React from 'react';
import timelineOrder from './images/timelineOrder.jpg'

const Wiki = () => {
  return (
    <>
      <div className="content" style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <img src={timelineOrder} style={{
          width: '100%',
          height: '90vh'
        }} id="image1" alt="image1"/>
      </div>
    </>
  )
}

export default Wiki;