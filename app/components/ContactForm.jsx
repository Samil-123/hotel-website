'use client'

import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    Ime: '',
    Prezime: '',
    telefona: '',
    Poruka: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/SendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message || 'Message sent successfully');
        // Reset form
        setFormData({
          Ime: '',
          Prezime: '',
          telefona: '',
          Poruka: '',
        });
      } else {
        alert(result.message || 'Error sending message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 max-md:flex max-md:flex-col gap-5'>
          <div className='flex flex-col'>
            <label className='text-white'>Ime</label>
            <input
              className='border border-gray-400 text-gray-400 outline-none bg-transparent rounded-sm px-4 py-2 mt-3'
              type='text'
              name='Ime'
              value={formData.Ime}
              onChange={handleChange}
              placeholder='Ime'
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-white'>Prezime</label>
            <input
              className='border border-gray-400 text-gray-400 outline-none bg-transparent rounded-sm px-4 py-2 mt-3'
              type='text'
              name='Prezime'
              value={formData.Prezime}
              onChange={handleChange}
              placeholder='Prezime'
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-white'>Broj telefona</label>
            <input
              className='border border-gray-400 text-gray-400 outline-none bg-transparent rounded-sm px-4 py-2 mt-3'
              type='text'
              name='telefona'
              value={formData.telefona}
              onChange={handleChange}
              placeholder='Broj telefona'
            />
          </div>
          <div className='flex flex-col col-span-2'>
            <label className='text-white'>Poruka</label>
            <textarea
              rows={7}
              placeholder='Ostavite poruku'
              className='border border-gray-400 text-gray-400 outline-none bg-transparent rounded-sm px-4 py-2 mt-3'
              name='Poruka'
              value={formData.Poruka}
              onChange={handleChange}
            />
          </div>

          <button className='bg-Primary-Golden mt-2 text-white col-span-2 py-3'>
            Pošalji
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
