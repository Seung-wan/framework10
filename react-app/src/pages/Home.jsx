import React from 'react';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div>
      <h1>Routing Home</h1>
      <Link to="/todo">Todo</Link>
    </div>
  );
}
