import React from 'react';
import QRCode from 'react-qr-code';

interface QRCodeProps {
  data: string;
}

const QRCodeComponent: React.FC<QRCodeProps> = ({ data }) => {
  return (
    <div>
      <QRCode value={data} />
      <p className="">============================</p> 
      <p className="">powered by Citiserve</p>
    </div>
  );
};

export default QRCodeComponent;
