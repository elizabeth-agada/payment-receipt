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
    <div className='p-0'>
      <h2 className='text-xl'>SHF</h2>
      <h2 className='text-xl'>Single Haulage Fee</h2>
      <h2 className=''>{date} {time}</h2>
      <h2 className="">======================</h2>
      <h2 className=''>payer: {payerId}</h2>
      <h2 className=''>Phone Number: {phoneNumber}</h2>
      <h2 className=''>Vehicle Number: {vehicleNumber}</h2>
      <h2 className='w-48'>Vehicle Tyh2e: {vehicleType}</h2>
      <h2 className=''>Origin State: {originState}</h2>
      <h2 className=''>Origin LGA: {originLga}</h2>
      <h2 className=''>Destination State: {destinationState}</h2>
      <h2 className=''>Destination LGA: {destinationLga}</h2>
      <h2 className=''>Contact: {contact}</h2>
      <h2 className='w-48'>Transaction Reference: {transactionReference}</h2>
      <h2 className=''>Terminal ID: {terminalId}</h2>
      <h2 className=''>Date: {date} {time}</h2>
      <h2 className="">=====================</h2>
      <h2 className='font-semibold text-xl'>Amount h2aid: {amountPaid}</h2>
      <h2 className='font-semibold text-xl'>Status: {status}</h2>
    </div>
  );
};

export default PaymentDetails;
