import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface HorizontalCardProps {
  title: string;
  value: string;
  description: string;
}

const HorizontalCard = ({ title, value, description }: HorizontalCardProps) => {
  return (
    <Card className="panelCardProps">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default HorizontalCard;
