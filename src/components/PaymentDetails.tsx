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
  amountPaid: number;
  status: string;
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
  status,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <p>SHF</p>
      <p className="">Single Haulage Fee</p>
      <p>Date: {date} {time}</p>
      <p>Payer ID: {payerId}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Vehicle Number: {vehicleNumber}</p>
      <p>Vehicle Type: {vehicleType}</p>
      <p>Origin State: {originState}</p>
      <p>Origin LGA: {originLga}</p>
      <p>Destination State: {destinationState}</p>
      <p>Destination LGA: {destinationLga}</p>
      <p>Contact: {contact}</p>
      <p>Transaction Reference: {transactionReference}</p>
      <p>Terminal ID: {terminalId}</p>
      <p>Amount Paid: ₦{amountPaid.toFixed(2)}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default PaymentDetails;
