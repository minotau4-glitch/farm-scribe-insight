import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ActivityChartProps {
  isVietnamese: boolean;
}

export const ActivityChart = ({ isVietnamese }: ActivityChartProps) => {
  const data = [
    {
      month: isVietnamese ? 'T1' : 'Jan',
      entries: 24,
      crops: 3,
    },
    {
      month: isVietnamese ? 'T2' : 'Feb',
      entries: 31,
      crops: 4,
    },
    {
      month: isVietnamese ? 'T3' : 'Mar',
      entries: 28,
      crops: 5,
    },
    {
      month: isVietnamese ? 'T4' : 'Apr',
      entries: 42,
      crops: 6,
    },
    {
      month: isVietnamese ? 'T5' : 'May',
      entries: 38,
      crops: 5,
    },
    {
      month: isVietnamese ? 'T6' : 'Jun',
      entries: 45,
      crops: 7,
    },
  ];

  return (
    <Card className="p-6 shadow-medium">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        {isVietnamese ? "Hoạt động theo tháng" : "Monthly Activity"}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="month" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px'
            }}
          />
          <Bar 
            dataKey="entries" 
            fill="hsl(var(--primary))" 
            name={isVietnamese ? "Nhật ký" : "Entries"}
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            dataKey="crops" 
            fill="hsl(var(--accent))" 
            name={isVietnamese ? "Cây trồng" : "Crops"}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};