import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Camera, BarChart3 } from "lucide-react";

interface QuickActionsCardProps {
  isVietnamese: boolean;
}

export const QuickActionsCard = ({ isVietnamese }: QuickActionsCardProps) => {
  const actions = [
    {
      icon: Plus,
      title: isVietnamese ? "Thêm mới" : "Add Entry",
      subtitle: isVietnamese ? "Tạo nhật ký mới" : "Create new log"
    },
    {
      icon: Camera,
      title: isVietnamese ? "Quét OCR" : "OCR Scan",
      subtitle: isVietnamese ? "Nhập từ hình ảnh" : "Input from image"
    },
    {
      icon: FileText,
      title: isVietnamese ? "Nhập thủ công" : "Manual Input",
      subtitle: isVietnamese ? "Nhập dữ liệu bằng tay" : "Enter data manually"
    },
    {
      icon: BarChart3,
      title: isVietnamese ? "Báo cáo" : "Reports",
      subtitle: isVietnamese ? "Xem thống kê" : "View analytics"
    }
  ];

  return (
    <Card className="p-6 shadow-medium">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        {isVietnamese ? "Thao tác nhanh" : "Quick Actions"}
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="outline"
            className="h-auto p-4 flex-col items-start space-y-2 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <action.icon className="w-5 h-5" />
            <div className="text-left">
              <p className="font-medium text-sm">{action.title}</p>
              <p className="text-xs opacity-80">{action.subtitle}</p>
            </div>
          </Button>
        ))}
      </div>
    </Card>
  );
};