import React from 'react';
import QRCode from 'react-qr-code';

interface QRCodeProps {
  data: string;
  size?: number;  // Optional size prop
}

const QRCodeComponent: React.FC<QRCodeProps> = ({ data, size = 170 }) => {
  return (
    <div className=''>
      <QRCode value={data} size={size} className='text-sm px-2'/>
      <p className="">=====================</p> 
      <p className="text-sm">powered by Citiserve</p>
    </div>
  );
};

export default QRCodeComponent;
