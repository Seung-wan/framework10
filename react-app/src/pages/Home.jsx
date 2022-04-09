import React from 'react';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className="container">
      <h1>Main Page</h1>
      <Link to="/todo">Todo</Link>
    </div>
  );
}
