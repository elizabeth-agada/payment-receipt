import React from 'react';
import '../App.css';


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
  status = 'Not provided', // 
}) => {
  return (
    <>
      <h2 className='text-xl font-semibold'>SHF</h2>
      <h2 className='text-xl font-semibold'>Single Haulage Fee</h2>
      <h2 className='text-lg'>{date} {time}</h2>
      <h2 className="text-lg">======================</h2>
      <h2 className='text-lg'>payer: {payerId}</h2>
      <h2 className='text-lg'>Phone Number: {phoneNumber}</h2>
      <h2 className='text-lg'>Vehicle Number: {vehicleNumber}</h2>
      <h2 className='text-lg w-60'>Vehicle Type: {vehicleType}</h2>
      <h2 className='text-lg'>Origin State: {originState}</h2>
      <h2 className='text-lg'>Origin LGA: {originLga}</h2>
      <h2 className='text-lg'>Destination State: {destinationState}</h2>
      <h2 className='text-lg'>Destination LGA: {destinationLga}</h2>
      <h2 className='text-lg'>Contact: {contact}</h2>
      <h2 className='w-48 text-lg'>Transaction Reference: {transactionReference}</h2>
      <h2 className='text-lg'>Terminal ID: {terminalId}</h2>
      <h2 className='text-lg'>Date: {date} {time}</h2>
      <h2 className="text-lg">=====================</h2>
      <h2 className='font-semibold text-2xl'>Amount Paid: {amountPaid}</h2>
      <h2 className='font-semibold text-2xl'>Status: {status}</h2>
    </>
  );
};

export default PaymentDetails;
