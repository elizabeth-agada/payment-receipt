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
      <p>SHF</p>
      <p>Single Haulage Fee</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p className=""> ============================</p>
      <p>Payer ID: {payerId}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Vehicle Number: {vehicleNumber}</p>
      <p className='w-64'>Vehicle Type: {vehicleType}</p>
      <p>Origin State: {originState}</p>
      <p>Origin LGA: {originLga}</p>
      <p>Destination State: {destinationState}</p>
      <p>Destination LGA: {destinationLga}</p>
      <p>Contact: {contact}</p>
      <p className='w-64'>Transaction Reference: {transactionReference}</p>
      <p>Terminal ID: {terminalId}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p className=""> ============================</p>
      <p>Amount Paid: {amountPaid}</p>
      <p className='font-semibold text-2xl'>Status: {status}</p>
    </div>
  );
};

export default PaymentDetails;
