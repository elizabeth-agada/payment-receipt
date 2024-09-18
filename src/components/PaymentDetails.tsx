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
  time: string; // 24-hour format
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
  const [hours, minutes, seconds] = time.split(':');
  const twelveHourTime =
    parseInt(hours) >= 12
      ? `${parseInt(hours) - 12}:${minutes}:${seconds} PM`
      : `${hours}:${minutes}:${seconds} AM`;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <p>Date: {date} {twelveHourTime}</p>
      <p>============================</p>
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
      <p>Date: {date} {twelveHourTime}</p>
      <p>============================</p>
      <p className="text-2xl font-bold">Amount Paid: ₦{amountPaid.toFixed(2)}</p>
      <p className="font-bold text-2xl">Status: {status}</p>
    </div>
  );
};

export default PaymentDetails
