import React, { useState } from 'react';

export default function Level2() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setError('All fields are required');
      return;
    }
    setError('');
    alert(`Submitted: ${name}, ${email}`);
  };

  return (
    <div>
      <h2>Level 2: Submission Validation</h2>
      <form onSubmit={handleSubmit}>
        {error && <p style={{color: 'red'}}>{error}</p>}
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
