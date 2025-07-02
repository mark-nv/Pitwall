import React from 'react';
import Header from '@/components/Header';
import Card from '@/components/Card';

const TelemetryPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-8">Live Telemetry</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card title="Speed">
            <div className="h-40 bg-gray-700 rounded-lg"></div>
          </Card>
          <Card title="RPM">
            <div className="h-40 bg-gray-700 rounded-lg"></div>
          </Card>
          <Card title="Gear">
            <div className="h-40 bg-gray-700 rounded-lg"></div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default TelemetryPage;
