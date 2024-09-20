import React from 'react';

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
  status?: string; // Make status optional
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
  status = 'Not provided', // Default value
}) => {
  return (
    <div className='px-2'>
      <h2 className=''>SHF</h2>
      <h2 className=''>Single Haulage Fee</h2>
      <p className='text-xs'>{date} {time}</p>
      <p className="">=====================</p>
      <p className='text-sm'>Payer ID: {payerId}</p>
      <p className='text-sm'>Phone Number: {phoneNumber}</p>
      <p className='text-sm'>Vehicle Number: {vehicleNumber}</p>
      <p className='w-48 text-sm'>Vehicle Type: {vehicleType}</p>
      <p className='text-sm'>Origin State: {originState}</p>
      <p className='text-sm'>Origin LGA: {originLga}</p>
      <p className='text-sm'>Destination State: {destinationState}</p>
      <p className='text-sm'>Destination LGA: {destinationLga}</p>
      <p className='text-sm'>Contact: {contact}</p>
      <p className='w-56 text-sm'>Transaction Reference: {transactionReference}</p>
      <p className='text-sm'>Terminal ID: {terminalId}</p>
      <p className='text-sm'>Date: {date} {time}</p>
      <p className="">=====================</p>
      <p className='font-semibold text-lg'>Amount Paid: {amountPaid}</p>
      <p className='font-semibold text-lg'>Status: {status}</p>
    </div>
  );
};

export default PaymentDetails;
