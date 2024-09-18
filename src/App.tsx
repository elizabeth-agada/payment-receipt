import PaymentDetails from './components/PaymentDetails';
import QRCode from './components/QRCode';
import PrintButton from './components/PrintButton';

function App() {
  const paymentData = {
    shf: 'Single Haulage Fee', // Add missing properties
    payerId: 'John Doe',
    phoneNumber: '09033838866',
    vehicleNumber: 'GMLB0BYX',
    vehicleType: '12/14 Tyres and its equivalent',
    originState: 'TARABA',
    originLga: 'Gastol',
    destinationState: 'NIGER',
    destinationLga: 'Bida',
    contact: '07035812750',
    transactionReference: '220231',
    terminalId: '20111810',
    date: '2024-09-17',
    time: '08:12:44', // 24-hour format
    amountPaid: 19250,
    status: 'APPROVED',
  };

  return (
    <div className="container mx-auto">
      <PaymentDetails {...paymentData} />
      <QRCode data={JSON.stringify(paymentData)} />
      <PrintButton />
    </div>
  );
}

export default App;