// import Title from '@/components/Title';
// import RedBullCar from '@/components/RedBullCar';

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between">
//       <Title />
//       <RedBullCar />
//     </main>
//   );
// }

import { Navbar } from "@/components/common/Navbar"
import { NextRaceWidget } from "@/components/features/NextRaceWidget"
import RedBullCar from "@/components/RedBullCar"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, TrendingUp } from "lucide-react"

// --- PLACEHOLDER FOR YOUR THREEJS COMPONENT ---
// Replace this with your actual import, e.g.:
// import RedBullCarCanvas from "@/components/3d/RedBullCarCanvas";

// const ThreeJSRedBullCanvasMock = () => {
//   return (
//     <div className="absolute inset-0 z-0 bg-neutral-950 flex items-center justify-center overflow-hidden">
//        {/* Replace this div with your <Canvas> component */}
//        <div className="relative w-full h-full">
//           {/* Fake 3D effect for demonstration */}
//           {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-900/40 via-transparent to-red-900/40 blur-[100px] opacity-50"></div> */}
//           <RedBullCar />
//           {/* Add a subtle grid floor */}
//           {/* <div className="absolute bottom-0 w-full h-1/2 bg-[linear-gradient(to_bottom,transparent_0%,#0a0a0a_100%),linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> */}
//        </div>
//     </div>
//   )
// }
// --------------------------------------------


export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col font-sans bg-neutral-950 overflow-hidden select-none">
      {/* Background 3D Car - Full screen, interactive */}
      <RedBullCar />

      {/* Overlay: Gradient fade at bottom */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-neutral-950"></div>
      
      {/* Content Overlay - Positioned on top but allows clicks through empty areas */}
      <div className="absolute inset-0 z-10 flex flex-col pointer-events-none">
        <Navbar />

        {/* Main Content Container */}
        <div className="container mx-auto flex-1 flex flex-col md:flex-row items-center justify-between px-4 md:px-6 pt-28 pb-12 gap-12 pointer-events-none">
          
          {/* Left Column: Hero Text */}
          <div className="flex-1 text-left space-y-8 max-w-2xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-[1.1] mb-4">
                The Ultimate <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">F1 Command Center</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
                Dive deeper into Formula 1 with real-time telemetry, AI-powered race strategy predictions, and immersive 3D analysis tools.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pointer-events-auto">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8">
                Enter Dashboard <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                View Predictor
              </Button>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Cpu className="h-4 w-4 text-red-500" /> AI Strategy
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <TrendingUp className="h-4 w-4 text-red-500" /> Live Telemetry
                </div>
            </div>
          </div>

          {/* Right Column: Widget (Pushed slightly down for visual balance) */}
          <div className="md:mt-20 animate-in fade-in slide-in-from-right-10 duration-1000 delay-300 pointer-events-auto">
            <NextRaceWidget />
          </div>

        </div>
      </div>
    </main>
  )
}