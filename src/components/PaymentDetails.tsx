import React from 'react';
import '../App.css'; // Make sure to reference your custom CSS

interface PaymentDetailsProps {
  payerId: string;
  phoneNumber: string;
  vehicleNumber: string;
  vehicleType: string;
  originState: string;
  originLga: string;
  destinationState: string;
  destinationLga: string;
  contact: string;
  transactionReference: string;
  terminalId: string;
  date: string;
  time: string;
  amountPaid: string;
  status?: string;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  payerId,
  phoneNumber,
  vehicleNumber,
  vehicleType,
  originState,
  originLga,
  destinationState,
  destinationLga,
  contact,
  transactionReference,
  terminalId,
  date,
  time,
  amountPaid,
  status = 'Not provided',
}) => {
  return (
    <div className="w-full">
      <h2 className="receipt-header">SHF</h2>
      <h2 className="receipt-subheader">Single Haulage Fee</h2>
      <p className="text-xl">{date} {time}</p>
      <p className="">==============================</p>
      <p className='text-xl'>Payer: {payerId}</p>
      <p className='text-xl'>Phone Number: {phoneNumber}</p>
      <p className='text-xl'>Vehicle Number: {vehicleNumber}</p>
      <p className='w-60 text-xl'>Vehicle Type: {vehicleType}</p>
      <p className='text-xl'>Origin State: {originState}</p>
      <p className='text-xl'>Origin LGA: {originLga}</p>
      <p className='text-xl'>Destination State: {destinationState}</p>
      <p className='text-xl'>Destination LGA: {destinationLga}</p>
      <p className='text-xl'>Contact: {contact}</p>
      <p className='w-60 text-xl'>Transaction Reference: {transactionReference}</p>
      <p className='text-xl'>Terminal ID: {terminalId}</p>
      <p className="receipt-date text-xl">{date} {time}</p>
      <p className="">==============================</p>
      <p className="receipt-amount">Amount Paid: {amountPaid}</p>
      <p className="receipt-status">Status: {status}</p>
    </div>
  );
};

export default PaymentDetails;
