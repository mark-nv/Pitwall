import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, CalendarClock } from "lucide-react"

// Example data - in a real app, fetch this
const nextRaceData = {
  name: "Italian Grand Prix",
  circuit: "Autodromo Nazionale Monza",
  date: "Sept 1-3, 2024",
  round: 16,
  // Placeholder for countdown values
  countdown: { d: "04", h: "12", m: "30", s: "15" }
};

export function NextRaceWidget() {
  return (
    <Card className="w-full max-w-md border-white/10 bg-black/40 backdrop-blur-lg text-white shadow-2xl shadow-black/50">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-2">
           <Badge variant="outline" className="text-red-500 border-red-900 bg-red-950/30 uppercase">Next Up</Badge>
           <span className="text-xs text-muted-foreground font-mono">Round {nextRaceData.round}</span>
        </div>
        <CardTitle className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
          {nextRaceData.name}
        </CardTitle>
        <CardDescription className="flex items-center gap-2 text-gray-400">
          <MapPin className="h-4 w-4" /> {nextRaceData.circuit}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
         {/* Abstract Track Map Placeholder */}
         {/* In a real app, use an SVG of the track map here */}
         <div className="h-24 w-full rounded-md bg-gradient-to-r from-red-900/20 to-transparent border border-white/5 relative overflow-hidden flex items-center justify-center">
            <span className="text-muted-foreground/30 text-sm italic">Track Map Visualization</span>
            <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-red-600/50 blur-[2px]"></div>
         </div>

         <Separator className="bg-white/10" />

         {/* Countdown Section */}
         <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
              <CalendarClock className="h-4 w-4" /> Lights out in:
            </div>
            {/* Use font-mono for data */}
            <div className="flex justify-between font-mono text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">{nextRaceData.countdown.d}</div>
                <div className="text-xs text-muted-foreground uppercase">Days</div>
              </div>
              <div className="text-3xl md:text-4xl font-light text-gray-500">:</div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">{nextRaceData.countdown.h}</div>
                <div className="text-xs text-muted-foreground uppercase">Hrs</div>
              </div>
              <div className="text-3xl md:text-4xl font-light text-gray-500">:</div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">{nextRaceData.countdown.m}</div>
                <div className="text-xs text-muted-foreground uppercase">Mins</div>
              </div>
              {/* Seconds often hidden on main dashboards to reduce visual noise, but OK here */}
              {/* <div className="text-3xl md:text-4xl font-light text-gray-500 md:block hidden">:</div>
              <div className="md:block hidden">
                <div className="text-3xl md:text-4xl font-bold text-red-500">{nextRaceData.countdown.s}</div>
                <div className="text-xs text-muted-foreground uppercase">Secs</div>
              </div> */}
            </div>
         </div>
      </CardContent>
    </Card>
  )
}