import React, { useState, useEffect } from 'react';
import PaymentDetails from './PaymentDetails';
import QRCode from './QRCode';


// States and their respective LGAs
const statesWithLgas: { [key: string]: string[] } = {
  'Abia State': ['Aba North', 'Aba South', 'Arochukwu', 'Bende', 'Ikwuano', 'Isiala Ngwa North', 'Isiala Ngwa South', 'Isiukwuato', 'Obi Ngwa', 'Ohafia', 'Osisioma', 'Ugwunagbo', 'Ukwa East', 'Ukwa West', 'Umuahia North', 'Umuahia South', 'Umunneochi'],
   
  'Adamawa State': ['Demsa', 'Fufure', 'Ganye', 'Girei', 'Gombi', 'Guyuk', 'Hong', 'Jada', 'Lamurde', 'Madagali', 'Maiha', 'Mayo-Belwa', 'Michika', 'Mubi North', 'Mubi South', 'Numan', 'Shelleng', 'Song', 'Toungo', 'Yola North', 'Yola South'],
   
  'Akwa Ibom State': ['Abak', 'Eastern Obolo', 'Eket', 'Esit Eket', 'Essien Udim', 'Etim Ekpo', 'Etinan', 'Ibeno', 'Ibesikpo Asutan', 'Ibiono Ibom', 'Ika', 'Ikono', 'Ikot Abasi', 'Ikot Ekpene', 'Ini', 'Itu', 'Mbo', 'Mkpat-Enin', 'Nsit-Atai', 'Nsit-Ibom', 'Nsit-Ubium', 'Obot Akara', 'Okobo', 'Onna', 'Oron', 'Oruk Anam', 'Udung-Uko', 'Ukanafun', 'Uruan', 'Urue-Offong/Oruko', 'Uyo'],
   
  'Anambra State': ['Aguata', 'Anambra East', 'Anambra West', 'Anaocha', 'Awka North', 'Awka South', 'Ayamelum', 'Dunukofia', 'Ekwusigo', 'Idemili North', 'Idemili South', 'Ihiala', 'Njikoka', 'Nnewi North', 'Nnewi South', 'Ogbaru', 'Onitsha North', 'Onitsha South', 'Orumba North', 'Orumba South', 'Oyi'],

  'Bauchi State': ['Alkaleri', 'Bauchi', 'Bogoro', 'Damban', 'Darazo', 'Dass', 'Gamawa', 'Ganjuwa', 'Giade', 'Itas/Gadau', 'Jama’are', 'Katagum', 'Kirfi', 'Misau', 'Ningi', 'Shira', 'Tafawa Balewa', 'Toro', 'Warji', 'Zaki'],

  'Bayelsa State': ['Brass', 'Ekeremor', 'Kolokuma/Opokuma', 'Nembe', 'Ogbia', 'Sagbama', 'Southern Ijaw', 'Yenagoa'],

  'Benue State': ['Ado', 'Agatu', 'Apa', 'Buruku', 'Gboko', 'Guma', 'Gwer East', 'Gwer West', 'Katsina-Ala', 'Konshisha', 'Kwande', 'Logo', 'Makurdi', 'Obi', 'Ogbadibo', 'Ohimini', 'Oju', 'Okpokwu', 'Otukpo', 'Tarka', 'Ukum', 'Ushongo', 'Vandeikya'],

  'Borno State': ['Abadam', 'Askira/Uba', 'Bama', 'Bayo', 'Biu', 'Chibok', 'Damboa', 'Dikwa', 'Gubio', 'Guzamala', 'Gwoza', 'Hawul', 'Jere', 'Kaga', 'Kala/Balge', 'Konduga', 'Kukawa', 'Kwaya Kusar', 'Mafa', 'Magumeri', 'Maiduguri', 'Marte', 'Mobbar', 'Monguno', 'Ngala', 'Nganzai', 'Shani'],

  'Cross River State': ['Abi', 'Akamkpa', 'Akpabuyo', 'Bakassi', 'Bekwarra', 'Biase', 'Boki', 'Calabar Municipal', 'Calabar South', 'Etung', 'Ikom', 'Obanliku', 'Obubra', 'Obudu', 'Odukpani', 'Ogoja', 'Yakuur', 'Yala'],

  'Delta State': ['Aniocha North', 'Aniocha South', 'Bomadi', 'Burutu', 'Ethiope East', 'Ethiope West', 'Ika North East', 'Ika South', 'Isoko North', 'Isoko South', 'Ndokwa East', 'Ndokwa West', 'Okpe', 'Oshimili North', 'Oshimili South', 'Patani', 'Sapele', 'Udu', 'Ughelli North', 'Ughelli South', 'Ukwuani', 'Uvwie', 'Warri North', 'Warri South', 'Warri South West'],

  'Ebonyi State': ['Abakaliki', 'Afikpo North', 'Afikpo South', 'Ebonyi', 'Ezza North', 'Ezza South', 'Ikwo', 'Ishielu', 'Ivo', 'Izzi', 'Ohaozara', 'Ohaukwu', 'Onicha'],

  'Edo State': ['Akoko-Edo', 'Egor', 'Esan Central', 'Esan North-East', 'Esan South-East', 'Esan West', 'Etsako Central', 'Etsako East', 'Etsako West', 'Igueben', 'Ikpoba-Okha', 'Oredo', 'Orhionmwon', 'Ovia North-East', 'Ovia South-West', 'Owan East', 'Owan West', 'Uhunmwonde'],

  'Ekiti State': ['Ado Ekiti', 'Efon', 'Ekiti East', 'Ekiti South-West', 'Ekiti West', 'Emure', 'Gbonyin', 'Ido Osi', 'Ijero', 'Ikere', 'Ikole', 'Ilejemeje', 'Irepodun/Ifelodun', 'Ise/Orun', 'Moba', 'Oye'],

  'Enugu State': ['Aninri', 'Awgu', 'Enugu East', 'Enugu North', 'Enugu South', 'Ezeagu', 'Igbo Etiti', 'Igbo Eze North', 'Igbo Eze South', 'Isi Uzo', 'Nkanu East', 'Nkanu West', 'Nsukka', 'Oji River', 'Udenu', 'Udi', 'Uzo Uwani'],

  'Gombe State': ['Akko', 'Balanga', 'Billiri', 'Dukku', 'Funakaye', 'Gombe', 'Kaltungo', 'Kwami', 'Nafada', 'Shongom', 'Yamaltu/Deba'],

  'Imo State': ['Aboh Mbaise', 'Ahiazu Mbaise', 'Ehime Mbano', 'Ezinihitte', 'Ideato North', 'Ideato South', 'Ihitte/Uboma', 'Ikeduru', 'Isiala Mbano', 'Isu', 'Mbaitoli', 'Ngor Okpala', 'Njaba', 'Nkwerre', 'Nwangele', 'Obowo', 'Oguta', 'Ohaji/Egbema', 'Okigwe', 'Onuimo', 'Orlu', 'Orsu', 'Oru East', 'Oru West', 'Owerri Municipal', 'Owerri North', 'Owerri West'],

  'Jigawa State': ['Auyo', 'Babura', 'Biriniwa', 'Birnin Kudu', 'Buji', 'Dutse', 'Gagarawa', 'Garki', 'Gumel', 'Guri', 'Gwaram', 'Gwiwa', 'Hadejia', 'Jahun', 'Kafin Hausa', 'Kaugama', 'Kazaure', 'Kiri Kasama', 'Kiyawa', 'Maigatari', 'Malam Madori', 'Miga', 'Ringim', 'Roni', 'Sule Tankarkar', 'Taura', 'Yankwashi'],

  'Kaduna State': ['Birnin Gwari', 'Chikun', 'Giwa', 'Igabi', 'Ikara', 'Jaba', 'Jema\'a', 'Kachia', 'Kaduna North', 'Kaduna South', 'Kagarko', 'Kajuru', 'Kaura', 'Kauru', 'Kubau', 'Kudan', 'Lere', 'Makarfi', 'Sabon Gari', 'Sanga', 'Soba', 'Zangon Kataf', 'Zaria'],

  'Kano State': ['Ajingi', 'Albasu', 'Bagwai', 'Bebeji', 'Bichi', 'Bunkure', 'Dala', 'Dambatta', 'Dawakin Kudu', 'Dawakin Tofa', 'Doguwa', 'Fagge', 'Gabasawa', 'Garko', 'Garun Mallam', 'Gaya', 'Gezawa', 'Gwale', 'Gwarzo', 'Kabo', 'Kano Municipal', 'Karaye', 'Kibiya', 'Kiru', 'Kumbotso', 'Kunchi', 'Kura', 'Madobi', 'Makoda', 'Minjibir', 'Nasarawa', 'Rano', 'Rimin Gado', 'Rogo', 'Shanono', 'Sumaila', 'Takai', 'Tarauni', 'Tofa', 'Tsanyawa', 'Tudun Wada', 'Ungogo', 'Warawa', 'Wudil'],

  'Katsina State': ['Bakori', 'Batagarawa', 'Batsari', 'Baure', 'Bindawa', 'Charanchi', 'Dandume', 'Danja', 'Dan Musa', 'Daura', 'Dutsi', 'Dutsin Ma', 'Faskari', 'Funtua', 'Ingawa', 'Jibia', 'Kafur', 'Kaita', 'Kankara', 'Kankia', 'Katsina', 'Kurfi', 'Kusada', 'Mai\'Adua', 'Malumfashi', 'Mani', 'Mashi', 'Matazu', 'Musawa', 'Rimi', 'Sabuwa', 'Safana', 'Sandamu', 'Zango'],

  'Kebbi State': ['Aleiro', 'Arewa Dandi', 'Argungu', 'Augie', 'Bagudo', 'Birnin Kebbi', 'Bunza', 'Dandi', 'Fakai', 'Gwandu', 'Jega', 'Kalgo', 'Koko/Besse', 'Maiyama', 'Ngaski', 'Sakaba', 'Shanga', 'Suru', 'Wasagu/Danko', 'Yauri', 'Zuru'],

  'Kogi State': ['Adavi', 'Ajaokuta', 'Ankpa', 'Bassa', 'Dekina', 'Ibaji', 'Idah', 'Igalamela Odolu', 'Ijumu', 'Kabba/Bunu', 'Kogi', 'Lokoja', 'Mopa Muro', 'Ofu', 'Ogori/Magongo', 'Okehi', 'Okene', 'Olamaboro', 'Omala', 'Yagba East', 'Yagba West'],

  'Kwara State': ['Asa', 'Baruten', 'Edu', 'Ekiti', 'Ifelodun', 'Ilorin East', 'Ilorin South', 'Ilorin West', 'Irepodun', 'Isin', 'Kaiama', 'Moro', 'Offa', 'Oke Ero', 'Oyun', 'Pategi'],

  'Lagos State': ['Agege', 'Ajeromi-Ifelodun', 'Alimosho', 'Amuwo-Odofin', 'Apapa', 'Badagry', 'Epe', 'Eti Osa', 'Ibeju-Lekki', 'Ifako-Ijaiye', 'Ikeja', 'Ikorodu', 'Kosofe', 'Lagos Island', 'Lagos Mainland', 'Mushin', 'Ojo', 'Oshodi-Isolo', 'Shomolu', 'Surulere'],

  'Nasarawa State': ['Akwanga', 'Awe', 'Doma', 'Karu', 'Keana', 'Keffi', 'Kokona', 'Lafia', 'Nasarawa', 'Nasarawa Egon', 'Obi', 'Toto', 'Wamba'],

  'Niger State': ['Agaie', 'Agwara', 'Bida', 'Borgu', 'Bosso', 'Chanchaga', 'Edati', 'Gbako', 'Gurara', 'Katcha', 'Kontagora', 'Lapai', 'Lavun', 'Magama', 'Mariga', 'Mashegu', 'Mokwa', 'Muya', 'Paikoro', 'Rafi', 'Rijau', 'Shiroro', 'Suleja', 'Tafa', 'Wushishi'],

  'Ogun State': ['Abeokuta North', 'Abeokuta South', 'Ado-Odo/Ota', 'Egbado North', 'Egbado South', 'Ewekoro', 'Ifo', 'Ijebu East', 'Ijebu North', 'Ijebu North East', 'Ijebu Ode', 'Ikenne', 'Imeko Afon', 'Ipokia', 'Obafemi Owode', 'Odeda', 'Odogbolu', 'Ogun Waterside', 'Remo North', 'Shagamu'],

  'Ondo State': ['Akoko North-East', 'Akoko North-West', 'Akoko South-East', 'Akoko South-West', 'Akure North', 'Akure South', 'Ese Odo', 'Idanre', 'Ifedore', 'Ilaje', 'Ile Oluji/Okeigbo', 'Irele', 'Odigbo', 'Okitipupa', 'Ondo East', 'Ondo West', 'Ose', 'Owo'],

  'Osun State': ['Atakunmosa East', 'Atakunmosa West', 'Aiyedaade', 'Aiyedire', 'Boluwaduro', 'Boripe', 'Ede North', 'Ede South', 'Egbedore', 'Ejigbo', 'Ife Central', 'Ife East', 'Ife North', 'Ife South', 'Ifedayo', 'Ifelodun', 'Ila', 'Ilesa East', 'Ilesa West', 'Irepodun', 'Irewole', 'Isokan', 'Iwo', 'Obokun', 'Odo Otin', 'Ola Oluwa', 'Olorunda', 'Oriade', 'Orolu'],

  'Oyo State': ['Afijio', 'Akinyele', 'Atiba', 'Atisbo', 'Egbeda', 'Ibadan North', 'Ibadan North-East', 'Ibadan North-West', 'Ibadan South-East', 'Ibadan South-West', 'Ibarapa Central', 'Ibarapa East', 'Ibarapa North', 'Ido', 'Irepo', 'Iseyin', 'Itesiwaju', 'Iwajowa', 'Kajola', 'Lagelu', 'Ogbomosho North', 'Ogbomosho South', 'Ogo Oluwa', 'Olorunsogo', 'Oluyole', 'Ona Ara', 'Orelope', 'Ori Ire', 'Oyo East', 'Oyo West', 'Saki East', 'Saki West', 'Surulere'],

  'Plateau State': ['Barkin Ladi', 'Bassa', 'Bokkos', 'Jos East', 'Jos North', 'Jos South', 'Kanam', 'Kanke', 'Langtang North', 'Langtang South', 'Mangu', 'Mikang', 'Pankshin', 'Qua\'an Pan', 'Riyom', 'Shendam', 'Wase'],

  'Rivers State': ['Abua/Odual', 'Ahoada East', 'Ahoada West', 'Akuku-Toru', 'Andoni', 'Asari-Toru', 'Bonny', 'Degema', 'Eleme', 'Emohua', 'Etche', 'Gokana', 'Ikwerre', 'Khana', 'Obio/Akpor', 'Ogba/Egbema/Ndoni', 'Ogu/Bolo', 'Okrika', 'Omuma', 'Opobo/Nkoro', 'Oyigbo', 'Port Harcourt', 'Tai'],

  'Sokoto State': ['Binji', 'Bodinga', 'Dange Shuni', 'Gada', 'Goronyo', 'Gudu', 'Gwadabawa', 'Illela', 'Isa', 'Kebbe', 'Kware', 'Rabah', 'Sabon Birni', 'Shagari', 'Silame', 'Sokoto North', 'Sokoto South', 'Tambuwal', 'Tangaza', 'Tureta', 'Wamako', 'Wurno', 'Yabo'],

  'Taraba State': ['Ardo Kola', 'Bali', 'Donga', 'Gashaka', 'Gassol', 'Ibi', 'Jalingo', 'Karim Lamido', 'Kumi', 'Lau', 'Sardauna', 'Takum', 'Ussa', 'Wukari', 'Yorro', 'Zing'],

  'Yobe State': ['Bade', 'Bursari', 'Damaturu', 'Fika', 'Fune', 'Geidam', 'Gujba', 'Gulani', 'Jakusko', 'Karasuwa', 'Machina', 'Nangere', 'Nguru', 'Potiskum', 'Tarmuwa', 'Yunusari', 'Yusufari'],

  'Zamfara State': ['Anka', 'Bakura', 'Birnin Magaji/Kiyaw', 'Bukkuyum', 'Bungudu', 'Gummi', 'Gusau', 'Kaura Namoda', 'Maradun', 'Maru', 'Shinkafi', 'Talata Mafara', 'Tsafe', 'Zurmi']

};


const generateTransactionReference = () => {
  const randomNum = Math.floor(Math.random() * 100); // Generate a random number
  return `22023227622ED9DB9${randomNum}`; // Format as desired
};

const PaymentForm: React.FC = () => {
  const [originState, setOriginState] = useState<string>('');
  const [originLga, setOriginLga] = useState<string>('');
  const [destinationState, setDestinationState] = useState<string>('');
  const [destinationLga, setDestinationLga] = useState<string>('');

  const [formData, setFormData] = useState({
    payerId: '',
    phoneNumber: '',
    vehicleNumber: '',
    vehicleType: '12/14 Tyres and its equivalent',
    originState: '',
    originLga: '',
    destinationState: '',
    destinationLga: '',
    contact: '',
    transactionReference: generateTransactionReference(),
    terminalId: '201118TD',
    date: '',
    time: '',
    amountPaid: '',
    status: 'Approved',
  });

  const [submitted, setSubmitted] = useState(false);
  // const [lgas, setLgas] = useState<string[]>([]);
  const [qrData, setQrData] = useState('');

  // Automatically set the current date and time when the component renders
  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    const formattedTime = currentDate.toLocaleTimeString(); // Format as HH:MM:SS

    setFormData((prev) => ({
      ...prev,
      date: formattedDate,
      time: formattedTime,
      transactionReference: generateTransactionReference(), // Regenerate transaction reference if needed
    }));
  }, []); // Empty dependency array means this runs only once, when the component mounts

  const handleOriginStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOriginState(event.target.value);
    setOriginLga(''); // Reset the origin LGA when the state changes
  };

  const handleDestinationStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDestinationState(event.target.value);
    setDestinationLga(''); // Reset the destination LGA when the state changes
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === 'amountPaid' ? parseFloat(value) : value,
    }));

    if (name === 'time') {
      // Fallback for unsupported browsers
      const timeFallback = document.getElementById('timeFallback') as HTMLInputElement;
      timeFallback.value = value;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Format the data for the QR code
    const formattedQrData = `
      SHF
      Single Haulage Fee
      Date: ${formData.date} ${formData.time}
      ============================
      Payer ID: ${formData.payerId}
      Phone Number: ${formData.phoneNumber}
      Vehicle Number: ${formData.vehicleNumber}
      Vehicle Type: ${formData.vehicleType}
      Origin State: ${formData.originState}
      Origin LGA: ${formData.originLga}
      Destination State: ${formData.destinationState}
      Destination LGA: ${formData.destinationLga}
      Contact: ${formData.contact}
      Transaction Reference: ${formData.transactionReference}
      Terminal ID: ${formData.terminalId}
    
      ============================
    
      Amount Paid: ₦${formData.amountPaid}
      Status: ${formData.status}
    `.trim();

    console.log('Form Data for QR Code:', formattedQrData);
    setQrData(formattedQrData);
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto bg-white">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 max-w-4xl mx-auto gap-4 p-5">
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
              value={originState}
              onChange={handleOriginStateChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select State</option>
              {Object.keys(statesWithLgas).map((state) => (
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
              value={originLga}
              onChange={(e) => setOriginLga(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select LGA</option>
              {originState &&
            statesWithLgas[originState]?.map((lga) => (
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
              value={destinationState}
              onChange={handleDestinationStateChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select State</option>
              {Object.keys(statesWithLgas).map((state) => (
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
              value={destinationLga}
              onChange={(e) => setDestinationLga(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select LGA</option>
              {destinationState &&
            statesWithLgas[destinationState].map((lga) => (
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
            <label className="mb-1 font-semibold" htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="HH:MM"
            />
            {/* Fallback input for unsupported browsers */}
            <input
              type="text"
              id="timeFallback"
              name="timeFallback"
              required
              value={formData.time}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 hidden"
              placeholder="HH:MM"
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
            Submit & Generate QR Code
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