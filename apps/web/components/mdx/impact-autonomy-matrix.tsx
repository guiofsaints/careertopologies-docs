'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  ZAxis,
} from 'recharts';

interface DataPoint {
  name: string;
  impact: number;
  autonomy: number;
  size?: number;
}

interface ImpactAutonomyMatrixProps {
  data: DataPoint[];
  title?: string;
  description?: string;
}

export function ImpactAutonomyMatrix({
  data,
  title = 'Impact vs Autonomy Matrix',
  description,
}: ImpactAutonomyMatrixProps) {
  return (
    <Card className="my-8">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 40, left: 60 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="autonomy" domain={[0, 10]} name="Autonomy">
              <Label value="Autonomy →" position="bottom" offset={0} />
            </XAxis>
            <YAxis type="number" dataKey="impact" domain={[0, 10]} name="Impact">
              <Label value="Impact →" angle={-90} position="left" offset={20} />
            </YAxis>
            <ZAxis type="number" dataKey="size" range={[100, 400]} />
            <Tooltip
              cursor={{ strokeDasharray: '3 3' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-background border rounded-lg p-3 shadow-lg">
                      <p className="font-semibold">{data.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Autonomy: {data.autonomy}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Impact: {data.impact}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Scatter data={data} fill="hsl(var(--primary))" />
          </ScatterChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
