import React from 'react';
import QRCode from 'react-qr-code';

interface QRCodeProps {
  data: string;
}

const QRCodeComponent: React.FC<QRCodeProps> = ({ data }) => {
  return (
    <div>
      <QRCode value={data} />
      <p className="text-center">============================</p> 
      <p className="text-center">powered by Citiserve</p>
    </div>
  );
};

export default QRCodeComponent;
