import React, { useState } from 'react';

export default function Level1() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Submitted: ${name}, ${email}`);
  };

  return (
    <div>
      <h2>Level 1: Controlled Inputs</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
