import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface TopologyData {
  name: string;
  structure: string;
  autonomy: string;
  decisionMaking: string;
  bestFor: string;
  challenges: string;
}

interface TopologyComparisonProps {
  topologies: TopologyData[];
  title?: string;
  description?: string;
}

export function TopologyComparison({
  topologies,
  title = 'Topology Comparison',
  description,
}: TopologyComparisonProps) {
  return (
    <Card className="my-8">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Topology</TableHead>
                <TableHead>Structure</TableHead>
                <TableHead>Autonomy</TableHead>
                <TableHead>Decision Making</TableHead>
                <TableHead>Best For</TableHead>
                <TableHead>Challenges</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topologies.map((topology) => (
                <TableRow key={topology.name}>
                  <TableCell className="font-medium">{topology.name}</TableCell>
                  <TableCell>{topology.structure}</TableCell>
                  <TableCell>{topology.autonomy}</TableCell>
                  <TableCell>{topology.decisionMaking}</TableCell>
                  <TableCell>{topology.bestFor}</TableCell>
                  <TableCell>{topology.challenges}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
