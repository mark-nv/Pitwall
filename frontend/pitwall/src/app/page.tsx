import RedBullCar from '@/components/RedBullCar';
import Title from '@/components/Title';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Title />
      <RedBullCar />
    </main>
  );
}
