"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface RaceResult {
  position: number;
  driver: string;
  team: string;
  time: string;
  status: string;
  points: number;
}

export default function Home() {
  const [results, setResults] = useState<RaceResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/latest-race")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.message);
        } else if (Array.isArray(data.results)) {
          setResults(data.results);
        } else {
          setError("Unexpected data format from API.");
        }
      })
      .catch((err) => {
        setError("Failed to fetch data from API: " + err.message);
      });
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="w-full">
          <h1 className="text-2xl font-bold mb-4">Latest Race Results</h1>
          {error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : results.length === 0 ? (
            <p>Loading race results...</p>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Position</th>
                  <th className="py-2 px-4 border-b">Driver</th>
                  <th className="py-2 px-4 border-b">Team</th>
                  <th className="py-2 px-4 border-b">Time</th>
                  <th className="py-2 px-4 border-b">Status</th>
                  <th className="py-2 px-4 border-b">Points</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result) => (
                  <tr key={result.position}>
                    <td className="py-2 px-4 border-b">{result.position}</td>
                    <td className="py-2 px-4 border-b">{result.driver}</td>
                    <td className="py-2 px-4 border-b">{result.team}</td>
                    <td className="py-2 px-4 border-b">{result.time}</td>
                    <td className="py-2 px-4 border-b">{result.status}</td>
                    <td className="py-2 px-4 border-b">{result.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}