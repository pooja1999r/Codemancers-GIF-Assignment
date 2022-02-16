import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import '../css/top.css';
import CloseIcon from '@mui/icons-material/Close';

export default function () {
  return (
      <div >
    <div className='header-top'>
        <div className='d-flex edit'>
          <EditIcon />
          <h3 className='h3-1'>Edit</h3>
        </div>
        <div className='d-flex photo'>
          <PhotoSizeSelectActualIcon />
          <h3>Photos/videos Album</h3>
        </div>
        <div className=' d-flex vedio'>
         <LiveTvIcon />
         <h3>Live Vedios</h3>
        </div>
        <div className='d-flex cross'>
            <CloseIcon className='grey' />
        </div>
    </div>
    <div className='line-1'></div>
    </div>
  )
}
