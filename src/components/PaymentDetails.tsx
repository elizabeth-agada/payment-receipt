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
    <div>
      <p className='text-xs'>SHF</p>
      <p className='text-xs>Single Haulage Fee</p>
      <p className='text-xs>Date: {date}</p>
      <p className='text-xs'>Time: {time}</p>
      <p className=""> ============================</p>
      <p className='text-xs'>Payer ID: {payerId}</p>
      <p className='text-xs'>Phone Number: {phoneNumber}</p>
      <p className='text-xs'>Vehicle Number: {vehicleNumber}</p>
      <p className='w-64'>Vehicle Type: {vehicleType}</p>
      <p className='text-xs'>Origin State: {originState}</p>
      <p className='text-xs'>Origin LGA: {originLga}</p>
      <p className='text-xs'>Destination State: {destinationState}</p>
      <p className='text-xs'>Destination LGA: {destinationLga}</p>
      <p className='text-xs'>Contact: {contact}</p>
      <p className='w-64'>Transaction Reference: {transactionReference}</p>
      <p className='text-xs'>Terminal ID: {terminalId}</p>
      <p className='text-xs'>Date: {date}</p>
      <p className='text-xs'>Time: {time}</p>
      <p className=""> ============================</p>
      <p className='text-xs'>Amount Paid: {amountPaid}</p>
      <p className='font-semibold text-2xl'>Status: {status}</p>
    </div>
  );
};

export default PaymentDetails;
