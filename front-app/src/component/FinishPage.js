import React from 'react';
import { Link } from 'react-router-dom';

const FinishPage = () => {
  return (
  <div>
      <h1>ขอบคุณที่ใช้บริการครับ</h1>
      <Link to='/'>กลับหน้าหลัก</Link>
  </div>
  );
};

export default FinishPage;
