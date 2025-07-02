import React from 'react';
import Header from './Header';
import Card from './Card';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card title="Live Telemetry">
            <div className="h-40 bg-gray-700 rounded-lg"></div>
          </Card>
          <Card title="Driver Rankings">
            <div className="h-40 bg-gray-700 rounded-lg"></div>
          </Card>
          <Card title="Track Map">
            <div className="h-40 bg-gray-700 rounded-lg"></div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
