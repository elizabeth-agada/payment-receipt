import React from 'react';

const PrintButton: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return <button className='bg-blue-500 text-white py-2 px-6 rounded-lg mt-4 hover:bg-blue-600 mb-10' onClick={handlePrint}>Print</button>;
};

export default PrintButton;