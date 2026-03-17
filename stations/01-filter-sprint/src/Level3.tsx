import React, { useState } from 'react';

export const USERS = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi"];

export default function Level3() {
  // 🧠 WORKOUT START: Handle case-insensitive filtering and "no matches" state
  const [searchState, setSearchState] = useState<string>('');
  
  const results = USERS.filter((c:string) => {
    return c.toLowerCase().includes(searchState.toLowerCase());
  });

  return (
    <div className="station">
      <h2>Level 3: The Filter Sprint (Full)</h2>
      <form>
        <label>Search <input value={searchState} onChange={(e) => setSearchState(e.target.value)} type="text" placeholder="search here"/></label>
      </form>
      {/* 🏃‍♂️ WORKOUT START: Build your search input and filtered list */}
      <div>
        {results.length === 0 && "There are no matches"}
        {results.length > 0 && <ul>
          {results.map((r) => (<li key={r}>{r}</li>))}
        </ul>}
      </div>
    </div>
  );
}
