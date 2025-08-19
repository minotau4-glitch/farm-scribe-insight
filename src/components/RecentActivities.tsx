import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Droplets, Zap, Sprout } from "lucide-react";

interface RecentActivitiesProps {
  isVietnamese: boolean;
}

export const RecentActivities = ({ isVietnamese }: RecentActivitiesProps) => {
  const activities = [
    {
      id: 1,
      type: 'watering',
      icon: Droplets,
      title: isVietnamese ? "Tưới nước cà chua" : "Watered tomatoes",
      time: isVietnamese ? "2 giờ trước" : "2 hours ago",
      field: isVietnamese ? "Ruộng A" : "Field A",
      status: 'completed'
    },
    {
      id: 2,
      type: 'fertilizing',
      icon: Zap,
      title: isVietnamese ? "Bón phân khu vực B" : "Fertilized area B",
      time: isVietnamese ? "4 giờ trước" : "4 hours ago",
      field: isVietnamese ? "Ruộng B" : "Field B",
      status: 'completed'
    },
    {
      id: 3,
      type: 'planting',
      icon: Sprout,
      title: isVietnamese ? "Gieo hạt cải xanh" : "Planted lettuce seeds",
      time: isVietnamese ? "1 ngày trước" : "1 day ago",
      field: isVietnamese ? "Ruộng C" : "Field C",
      status: 'completed'
    },
    {
      id: 4,
      type: 'inspection',
      icon: CalendarDays,
      title: isVietnamese ? "Kiểm tra sâu bệnh" : "Pest inspection",
      time: isVietnamese ? "2 ngày trước" : "2 days ago",
      field: isVietnamese ? "Ruộng A" : "Field A",
      status: 'warning'
    }
  ];

  const getStatusBadge = (status: string) => {
    if (status === 'completed') {
      return (
        <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
          {isVietnamese ? "Hoàn thành" : "Completed"}
        </Badge>
      );
    }
    return (
      <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20">
        {isVietnamese ? "Cảnh báo" : "Warning"}
      </Badge>
    );
  };

  return (
    <Card className="p-6 shadow-medium">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        {isVietnamese ? "Hoạt động gần đây" : "Recent Activities"}
      </h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="p-2 bg-primary/10 rounded-lg">
              <activity.icon className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-foreground truncate">
                  {activity.title}
                </p>
                {getStatusBadge(activity.status)}
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <p className="text-xs text-muted-foreground">{activity.field}</p>
                <span className="text-xs text-muted-foreground">•</span>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};