export default function Esp32Status({ cycleTime = 0  }) {
  let status = "GREEN";
  console.log("cycle time ----->",cycleTime)
  if (cycleTime > 30) status = "RED";
  else if (cycleTime > 25) status = "YELLOW";

  const colorMap = {
    GREEN: "bg-green-500",
    YELLOW: "bg-yellow-500",
    RED: "bg-red-500",
  };

  console.log("Status--->",status)
  return (
    <div className={`rounded-lg p-3 text-white text-center ${colorMap[status]}`}>
      Cycle Status: {status}
    </div>
  );
}