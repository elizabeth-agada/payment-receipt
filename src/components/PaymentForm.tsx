import React, { useState } from 'react';
import PaymentDetails from './PaymentDetails';
import QRCode from './QRCode';

const statesAndLgas: { [key: string]: string[] } = {
  Abia: ['Aba North', 'Aba South', 'Isiala Ngwa North', 'Isiala Ngwa South'],
  Adamawa: ['Demsa', 'Fufore', 'Ganye', 'Girei'],
  "Akwa Ibom": ['Abak', 'Eastern Obolo', 'Eket', 'Esit Eket'],
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
    date: '',
    time: '',
    amountPaid: 0,
    status: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [lgas, setLgas] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === 'amountPaid' ? parseFloat(value) : value,
    }));

    if (name === 'originState' || name === 'destinationState') {
      setFormData((prev) => ({
        ...prev,
        [`${name}Lga`]: '', // Reset the selected LGA when state changes
      }));
      setLgas(statesAndLgas[value] || []); // Update LGAs based on the selected state
    }
  };

  const [qrData, setQrData] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      <h2 className="text-2xl font-semibold text-center mb-6">SHF</h2>
      <h2 className="text-2xl font-semibold text-center mb-6">Single Haulage Fee</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <div className="flex flex-col">
            <div className="">
            <label className="mb-1 font-semibold" htmlFor="payerId">Payer ID</label>
            </div>
            <input
              type="text"
              id="payerId"
              name="payerId"
              required
              value={formData.payerId}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <div className="">
            <label className="mb-1 font-semibold" htmlFor="phoneNumber">Phone Number</label>
            </div>
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
            <div className="">
            <label className="mb-1 font-semibold" htmlFor="vehicleNumber">Vehicle Number</label>
            </div>
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
            <div className="">
            <label className="mb-1 font-semibold" htmlFor="vehicleType">Vehicle Type</label>
            </div>
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
            <div className="">
            <label className="mb-1 font-semibold" htmlFor="originState">Origin State</label>
            </div>
            <select
              id="originState"
              name="originState"
              required
              value={formData.originState}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select State</option>
              {Object.keys(statesAndLgas).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <div className="">
            <label className="mb-1 font-semibold" htmlFor="originLga">Origin LGA</label>
            </div>
            <select
              id="originLga"
              name="originLga"
              required
              value={formData.originLga}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select LGA</option>
              {lgas.map((lga) => (
                <option key={lga} value={lga}>
                  {lga}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <div className="">
            <label className="mb-1 font-semibold" htmlFor="destinationState">Destination State</label>
            </div>
            <select
              id="destinationState"
              name="destinationState"
              required
              value={formData.destinationState}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select State</option>
              {Object.keys(statesAndLgas).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <div className="">
            <label className="mb-1 font-semibold" htmlFor="destinationLga">Destination LGA</label>
            </div>
            <select
              id="destinationLga"
              name="destinationLga"
              required
              value={formData.destinationLga}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select LGA</option>
              {lgas.map((lga) => (
                <option key={lga} value={lga}>
                  {lga}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <div className="">
            <label className="mb-1 font-semibold" htmlFor="contact">Contact</label>
            </div>
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
            <div className="">
            <label className="mb-1 font-semibold" htmlFor="transactionReference">Transaction Reference</label>
            </div>
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
            <div className="">
            <label className="mb-1 font-semibold" htmlFor="terminalId">Terminal ID</label>
            </div>
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
            <div className="">
            <label className="mb-1 font-semibold" htmlFor="date">Date</label>
            </div>
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
            <div className="">
            <label className="mb-1 font-semibold" htmlFor="time">Time</label>
            </div>
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
            <div className="">
            <label className="mb-1 font-semibold" htmlFor="amountPaid">Amount Paid</label>
            </div>
            <input
              type="number"
              id="amountPaid"
              name="amountPaid"
              required
              value={formData.amountPaid}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="0"
              step="0.01"
            />
          </div>

          <div className="flex flex-col">
            <div className="">
            <label className="mb-1 font-semibold" htmlFor="status">Status</label>
            </div>
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

          <button type="submit" className="bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600">
            Generate QR Code
          </button>
        </form>
      ) : (
        <div className="mt-6">
          <PaymentDetails {...formData} />
          <QRCode data={qrData} />
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
