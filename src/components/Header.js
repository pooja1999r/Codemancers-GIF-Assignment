import React from 'react';
import '../css/header.css';
import Header3 from './Header3';
import Top from './Top';
export default function Header() {
  return (
    <div className='header'>
        <Top />
       <Header3 />
    </div>
  )
}
