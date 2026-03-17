import React, { useState } from 'react';

export default function Level3() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const isNameValid = name.trim().length > 2;
  const isEmailValid = email.includes('@');
  const isValid = isNameValid && isEmailValid;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) alert(`Submitted: ${name}, ${email}`);
  };

  return (
    <div>
      <h2>Level 3: Real-time Validation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name (min 3 chars): </label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
          {!isNameValid && name.length > 0 && <span style={{color:'red'}}> Too short</span>}
        </div>
        <div>
          <label>Email (must contain @): </label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          {!isEmailValid && email.length > 0 && <span style={{color:'red'}}> Invalid email</span>}
        </div>
        <button type="submit" disabled={!isValid}>Submit</button>
      </form>
    </div>
  );
}
