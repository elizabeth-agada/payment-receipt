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
    <div className="">
      <h2 className="receipt-header">SHF</h2>
      <h2 className="receipt-subheader">Single Haulage Fee</h2>
      <p className="text-sm">{date} {time}</p>
      <p className="">==============================</p>
      <p className='text-sm'>Payer: {payerId}</p>
      <p className='text-sm'>Phone Number: {phoneNumber}</p>
      <p className='text-sm'>Vehicle Number: {vehicleNumber}</p>
      <p className='w-60 text-sm'>Vehicle Type: {vehicleType}</p>
      <p className='text-sm'>Origin State: {originState}</p>
      <p className='text-sm'>Origin LGA: {originLga}</p>
      <p className='text-sm'>Destination State: {destinationState}</p>
      <p className='text-sm'>Destination LGA: {destinationLga}</p>
      <p className='text-sm'>Contact: {contact}</p>
      <p className='w-60 text-sm'>Transaction Reference: {transactionReference}</p>
      <p className='text-sm'>Terminal ID: {terminalId}</p>
      <p className="receipt-date text-sm">{date} {time}</p>
      <p className="">==============================</p>
      <p className="receipt-amount">Amount Paid: {amountPaid}</p>
      <p className="receipt-status">Status: {status}</p>
    </div>
  );
};

export default PaymentDetails;
