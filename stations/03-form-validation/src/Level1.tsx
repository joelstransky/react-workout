import React, { useState } from 'react';

export default function Level1() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      {/* 🧠 WORKOUT START */}
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}
