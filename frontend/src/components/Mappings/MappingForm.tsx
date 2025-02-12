import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MappingForm: React.FC = () => {
  const { t } = useTranslation();
  const [ehrSystem, setEhrSystem] = useState('Athena'); // Valor por defecto
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      ehrSystem,
      patient: {
        name,
        gender,
        dob,
        address,
        phone,
        email,
      },
    };

    try {
      const response = await fetch('http://localhost:3000/api/patients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Respuesta del servidor:', result);
    } catch (error) {
      console.error('Error enviando los datos:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={ehrSystem} onChange={(e) => setEhrSystem(e.target.value)}>
        <option value="Athena">Athena</option>
        <option value="Allscripts">Allscripts</option>
      </select>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
      <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} />
      <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">{t('SUBMIT')}</button>
    </form>
  );
};

export default MappingForm;
