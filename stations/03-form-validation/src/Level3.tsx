import React, { useState, useEffect } from 'react';

export default function Level3() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  // 🧠 WORKOUT START
  useEffect(() => {
    const newErrors: { name?: string; email?: string } = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email.includes('@')) newErrors.email = 'Invalid email';
    setErrors(newErrors);
  }, [name, email]);

  const isValid = Object.keys(errors).length === 0;

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <button type="submit" disabled={!isValid}>Submit</button>
    </form>
  );
}
