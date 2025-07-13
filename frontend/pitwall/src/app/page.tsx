import RedBullCar from '@/components/RedBullCar';
import Title from '@/components/Title';
import McLarenCar from '@/components/McLarenCar';
import FerrariCar from '@/components/FerrariCar';
import AstonMartinCar from '@/components/AstonMartinCar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Title />
      <RedBullCar />
      <FerrariCar />
      <AstonMartinCar />
      <McLarenCar />
    </main>
  );
}
