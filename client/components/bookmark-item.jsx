import React from 'react';

export default function BookmarkItem(props) {
  return (
    <>
      <div className='col-2'>
        <img className='images' src='../images/bookmark_blue.png'></img>
      </div>
      <div className='col-10' style={{ fontSize: '18px' }}>
        <p className="roboto-font"><b>Date:</b> {props.date}</p>
        <p className="roboto-font"><b>Address:</b> {props.address}</p>
        <p className="roboto-font"><b>Details:</b> {props.details}</p>
      </div>
      <hr className='horizontal-row'></hr>
    </>
  );
}
