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
    <div className='w-full'>
      <h2 className='text-2xl'>SHF</h2>
      <h2 className='text-2xl'>Single Haulage Fee</h2>
      <h2 className='text-xl'>{date} {time}</h2>
      <h2 className="text-xl">======================</h2>
      <h2 className='text-xl'>payer: {payerId}</h2>
      <h2 className='text-xl'>Phone Number: {phoneNumber}</h2>
      <h2 className='text-xl'>Vehicle Number: {vehicleNumber}</h2>
      <h2 className='text-xl w-48'>Vehicle Type: {vehicleType}</h2>
      <h2 className='text-xl'>Origin State: {originState}</h2>
      <h2 className='text-xl'>Origin LGA: {originLga}</h2>
      <h2 className='text-xl'>Destination State: {destinationState}</h2>
      <h2 className='text-xl'>Destination LGA: {destinationLga}</h2>
      <h2 className='text-xl'>Contact: {contact}</h2>
      <h2 className='w-48'>Transaction Reference: {transactionReference}</h2>
      <h2 className='text-xl'>Terminal ID: {terminalId}</h2>
      <h2 className='text-xl'>Date: {date} {time}</h2>
      <h2 className="text-xl">=====================</h2>
      <h2 className='font-semibold text-2xl'>Amount Paid: {amountPaid}</h2>
      <h2 className='font-semibold text-2xl'>Status: {status}</h2>
    </div>
  );
};

export default PaymentDetails;
