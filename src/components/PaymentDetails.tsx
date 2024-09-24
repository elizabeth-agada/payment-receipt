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
    <div className='text-base '>
      <h2 className=''>SHF</h2>
      <h2 className=''>Single Haulage Fee</h2>
      <p className=''>{date} {time}</p>
      <p className="">======================</p>
      <p className=''>Payer: {payerId}</p>
      <p className=''>Phone Number: {phoneNumber}</p>
      <p className=''>Vehicle Number: {vehicleNumber}</p>
      <p className='w-48'>Vehicle Type: {vehicleType}</p>
      <p className=''>Origin State: {originState}</p>
      <p className=''>Origin LGA: {originLga}</p>
      <p className=''>Destination State: {destinationState}</p>
      <p className=''>Destination LGA: {destinationLga}</p>
      <p className=''>Contact: {contact}</p>
      <p className='w-48'>Transaction Reference: {transactionReference}</p>
      <p className=''>Terminal ID: {terminalId}</p>
      <p className=''>Date: {date} {time}</p>
      <p className="">=====================</p>
      <p className='font-semibold text-lg'>Amount Paid: {amountPaid}</p>
      <p className='font-semibold text-lg'>Status: {status}</p>
    </div>
  );
};

export default PaymentDetails;
