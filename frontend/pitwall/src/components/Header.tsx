import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold"><Link href="/">Pitwall</Link></h1>
      <nav>
        <Link href="/telemetry" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Telemetry</Link>
        <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">History</a>
        <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Settings</a>
      </nav>
    </header>
  );
};

export default Header;
