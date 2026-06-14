"use client"

import { useEsp32 } from "@/hook/use-esp32"
import Esp32Card from "./ESP32Card";
import Esp32Status from "./Esp32Status";

export default function Esp32Dashboard(){
  const {data , isLoading, error}= useEsp32();

 
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading ... 
      </div>
    );
  }
  if (error) {
    return(
      <div className="text-red-500 text-center mt-10">
        Failed to load DATA.....
      </div>
    );
  }

  return(
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">IMM Dash Board</h1>
        <p className="text-muted-foreground"> Real time injection molding monitoring</p>
      </div>
      {/* Status */}
      <Esp32Status cycleTime={data.cycle_time_sec} />  

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

  {/* Combined Card */}
  <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
    
    <p className="text-sm text-muted-foreground">Device ID</p>
    <p className="text-xl font-bold">{data.device_id}</p>

    <div className="mt-4">
      <p className="text-sm text-muted-foreground">Cycle Time</p>
      <p className="text-2xl font-bold">
        {data.cycle_time_sec} <span className="text-sm font-medium">sec</span>
      </p>
      
    </div>
     <p className="text-2xl font-bold">
        {data.cycle_time_sec} <span className="text-sm font-medium">sec</span>
      </p>

    <div className="mt-4">
      <p className="text-sm text-muted-foreground">Production Count</p>
      <p className="text-2xl font-bold">
        {data.production_count} <span className="text-sm font-medium">Nos.</span>
      </p>
      
    </div>
    <div className="mt-4">
      <p className="text-sm text-muted-foreground">Production Count</p>
      <p className="text-2xl font-bold">
        {data.} <span className="text-sm font-medium">Nos.</span>
      </p>
      
    </div>

  </div>


</div>

      {/* Server time  */}
      {/* <div className="border rounded-lg p-4 bg-background">
        <p className="text-sm text-muted-foreground"> Server time {data.server_time}</p>

      </div> */}

    </div>
  );
}