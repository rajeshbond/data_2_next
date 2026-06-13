import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Esp32Card({ title, value, unit }) {
  return (
    <Card className="shadow-sm hover:shadow-md transition">
      
      <CardHeader className="pb-2">
        <CardTitle className="text-sm text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="text-2xl font-bold flex items-baseline gap-1">
          
          {/* Safe fallback */}
          <span>
            {value ?? "--"}
          </span>

          {unit && (
            <span className="text-sm font-medium text-muted-foreground">
              {unit}
            </span>
          )}

        </div>
      </CardContent>

    </Card>
  );
}