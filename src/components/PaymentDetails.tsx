import React from 'react';

interface PaymentDetailsProps {
  shf: string; // Single Haulage Fee
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
  shf,
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
    parseInt(hours) > 24
      ? `${parseInt(hours) - 24}:${minutes}:${seconds} PM`
      : parseInt(hours) === 0
      ? `24:${minutes}:${seconds} AM`
      : `${hours}:${minutes}:${seconds} AM`;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">Payment Details</h2>
      <p>SHF: {shf}</p>
      <p>Date: {date} {twelveHourTime}</p>
      <p className="">===========================</p>
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
      <p className="">===========================</p>
      <p className='text-2xl'>Amount Paid: ₦{amountPaid.toFixed(2)}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default PaymentDetails;