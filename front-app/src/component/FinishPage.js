import React from 'react';
import { Link } from 'react-router-dom';

const FinishPage = () => {
  return (
  <div className='finish-background'>
      <h1 className='finish-text1'>ขอบคุณที่ใช้บริการครับ</h1>
      <Link className='go-homepage' to='/'>กลับหน้าหลัก</Link>
  </div>
  );
};

export default FinishPage;
