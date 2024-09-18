import React from 'react';

const PrintButton: React.FC = () => {
  const handlePrint = () => {
    // Implement printing logic using window.print() or a printing library
    window.print();
  };

  return <button onClick={handlePrint}>Print</button>;
};

export default PrintButton;