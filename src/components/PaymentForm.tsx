import React, { useState } from 'react';
import PaymentDetails from './PaymentDetails';


const statesAndLgas: { [key: string]: string[] } = {
  Abia: ['Aba North', 'Aba South', 'Isiala Ngwa North', 'Isiala Ngwa South'],
  Adamawa: ['Demsa', 'Fufore', 'Ganye', 'Girei'],
  AkwaIbom: ['Abak', 'Eastern Obolo', 'Eket', 'Esit Eket'],
  Anambra: ['Aguata', 'Awka North', 'Awka South', 'Dunukofia'],
  Bauchi: ['Bauchi', 'Bogoro', 'Dambam', 'Darazo'],
  Bayelsa: ['Brass', 'Ekeremor', 'Kolokuma/Opokuma', 'Nembe'],
  Benue: ['Ado', 'Agatu', 'Apa', 'Buruku'],
  Borno: ['Abadam', 'Askira/Uba', 'Bama', 'Bayo'],
  CrossRiver: ['Abi', 'Akampka', 'Bakassi', 'Calabar South'],
  Delta: ['Aniocha South', 'Burutu', 'Ika North-East', 'Isoko South'],
  Ebonyi: ['Abakaliki', 'Ebonyi', 'Ezza North', 'Ishielu'],
  Edo: ['Akoko-Edo', 'Esan Central', 'Esan North-East', 'Esan South-East'],
  Ekiti: ['Ado Ekiti', 'Ekiti South-West', 'Ekiti East', 'Gboyin'],
  Enugu: ['Enugu East', 'Enugu North', 'Enugu South', 'Igbo Etiti'],
  Gombe: ['Akko', 'Balanga', 'Billiri', 'Dukku'],
  Imo: ['Aboh Mbaise', 'Ahiazu Mbaise', 'Isu', 'Njaba'],
  Jigawa: ['Babura', 'Dutse', 'Gwiwa', 'Hadejia'],
  Kaduna: ['Chikun', 'Giwa', 'Igabi', 'Jaba'],
  Kano: ['Ajingi', 'Albasu', 'Bagwai', 'Bebeji'],
  Katsina: ['Batagarawa', 'Batsari', 'Baure', 'Dandume'],
  Kebbi: ['Aliero', 'Arewa Dandi', 'Argungu', 'Bagudo'],
  Kogi: ['Adavi', 'Ajaokuta', 'Bassa', 'Bunu'],
  Kwara: ['Asa', 'Baruten', 'Ekiti', 'Ifelodun'],
  Lagos: ['Agege', 'Ikeja', 'Ikorodu', 'Lagos Mainland'],
  Nasarawa: ['Akwanga', 'Doma', 'Karu', 'Keana'],
  Niger: ['Agwara', 'Bida', 'Borgu', 'Chanchaga'],
  Ogun: ['Abeokuta North', 'Abeokuta South', 'Ado-Odo/Ota', 'Ewekoro'],
  Ondo: ['Akoko North-West', 'Akoko South-West', 'Idanre', 'Ilaje'],
  Osun: ['Atakunmosa East', 'Atakunmosa West', 'Ayedaade', 'Ilesa East'],
  Oyo: ['Akinyele', 'Atiba', 'Ayede', 'Bode Saadu'],
  Plateau: ['Bokkos', 'Jos East', 'Jos North', 'Mangu'],
  Rivers: ['Abua/Odual', 'Ahoada East', 'Ahoada West', 'Akuku-Toru'],
  Sokoto: ['Bodinga', 'Goronyo', 'Gudu', 'Illela'],
  Taraba: ['Ardo-Kola', 'Donga', 'Jalingo', 'Wukari'],
  Yobe: ['Bade', 'Damaturu', 'Fika', 'Fune'],
  Zamfara: ['Anka', 'Bakura', 'Bukkuyum', 'Gusau'],
};

const PaymentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    payerId: '',
    phoneNumber: '',
    vehicleNumber: '',
    vehicleType: '',
    originState: '',
    originLga: '',
    destinationState: '',
    destinationLga: '',
    contact: '',
    transactionReference: '',
    terminalId: '',
    date: new Date().toISOString().slice(0, 10),
    time: new Date().toLocaleTimeString('en-US', { hour12: false }),
    amountPaid: 0,
    status: 'Approved',
  });

  const [submitted, setSubmitted] = useState(false);
  const [lgas, setLgas] = useState<string[]>([]);
  const [qrData, setQrData] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: 
 name === 'amountPaid' ? parseFloat(value) : value,
    }));

    if (name === 'originState' || name === 'destinationState') {
      setLgas(statesAndLgas[value] || []); // Update LGAs based on the selected state
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form data before submitting
    if (!formData.payerId || !formData.phoneNumber || !formData.vehicleNumber || !formData.vehicleType ||
        !formData.originState || !formData.originLga || !formData.destinationState || !formData.destinationLga ||
        !formData.contact || !formData.transactionReference || !formData.terminalId || !formData.date ||
        !formData.time || formData.amountPaid <= 0) {
      alert('Please fill in all required fields.');
      return;
    }

    // Format the data for the QR code according to the specified format
    const formattedQrData = `
SHF
Single Haulage Fee
Date: ${formData.date ? `${formData.date} ${formData.time || ''}` : 'undefined:undefined AM'}

============================

Payer ID: ${formData.payerId || ''}
Phone Number: ${formData.phoneNumber || ''}
Vehicle Number: ${formData.vehicleNumber || ''}
Vehicle Type: ${formData.vehicleType || ''}
Origin State: ${formData.originState || ''}
Origin LGA: ${formData.originLga || ''}
Destination State: ${formData.destinationState || ''}
Destination LGA: ${formData.destinationLga || ''}
Contact: ${formData.contact || ''}
Transaction Reference: ${formData.transactionReference || ''}
Terminal ID: ${formData.terminalId || ''}
Date: ${formData.date ? `${formData.date} ${formData.time || ''}` : 'undefined:undefined AM'}

============================

Amount Paid: ₦${formData.amountPaid.toFixed(2)}
Status: ${formData.status || ''}
    `.trim();

    console.log('Form Data for QR Code:', formattedQrData); // Log the formatted QR data
    setQrData(formattedQrData);
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto grid grid-cols-1 gap-4">
          <div className="flex flex-col">
            <label className="mb-1 font-semibold" htmlFor="payerId">Payer ID</label>
            <input
              type="text"
              id="payerId"
              name="payerId"
              required
              value={formData.payerId}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold" htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold" htmlFor="vehicleNumber">Vehicle Number</label>
            <input
              type="text"
              id="vehicleNumber"
              name="vehicleNumber"
              required
              value={formData.vehicleNumber}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold" htmlFor="vehicleType">Vehicle Type</label>
            <input
              type="text"
              id="vehicleType"
              name="vehicleType"
              required
              value={formData.vehicleType}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold" htmlFor="originState">Origin State</label>
            <select
              id="originState"
              name="originState"
              required
              value={formData.originState}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a state</option>
              {Object.keys(statesAndLgas).map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold" htmlFor="originLga">Origin LGA</label>
            <select
              id="originLga"
              name="originLga"
              required
              value={formData.originLga}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select an LGA</option>
              {lgas.map((lga) => (
                <option key={lga} value={lga}>{lga}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold" htmlFor="destinationState">Destination State</label>
            <select
              id="destinationState"
              name="destinationState"
              required
              value={formData.destinationState}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a state</option>
              {Object.keys(statesAndLgas).map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold" htmlFor="destinationLga">Destination LGA</label>
            <select
              id="destinationLga"
              name="destinationLga"
              required
              value={formData.destinationLga}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select an LGA</option>
              {lgas.map((lga) => (
                <option key={lga} value={lga}>{lga}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold" htmlFor="contact">Contact</label>
            <input
              type="text"
              id="contact"
              name="contact"
              required
              value={formData.contact}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold" htmlFor="transactionReference">Transaction Reference</label>
            <input
              type="text"
              id="transactionReference"
              name="transactionReference"
              required
              value={formData.transactionReference}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold" htmlFor="terminalId">Terminal ID</label>
            <input
              type="text"
              id="terminalId"
              name="terminalId"
              required
              value={formData.terminalId}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold" htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold" htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold" htmlFor="amountPaid">Amount Paid</label>
            <input
              type="number"
              id="amountPaid"
              name="amountPaid"
              required
              value={formData.amountPaid}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold" htmlFor="status">Status</label>
            <input
              type="text"
              id="status"
              name="status"
              required
              value={formData.status}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button type="submit" className="mt-4 bg-blue-600 text-white rounded-lg p-3 hover:bg-blue-700">
            Submit
          </button>
        </form>
      ) : (
        <PaymentDetails qrData={qrData}
        />
      )}
    </div>
  );
};

export default PaymentForm;
