import { useState } from "react";
import { Header } from "@/components/Header";
import { StatsCard } from "@/components/StatsCard";
import { QuickActionsCard } from "@/components/QuickActionsCard";
import { ActivityChart } from "@/components/ActivityChart";
import { RecentActivities } from "@/components/RecentActivities";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sprout, Calendar, AlertTriangle, TrendingUp, Shield, Database } from "lucide-react";

const Index = () => {
  const [isVietnamese, setIsVietnamese] = useState(false);

  const handleLanguageToggle = () => {
    setIsVietnamese(!isVietnamese);
  };

  const authMessage = isVietnamese 
    ? "Để sử dụng các tính năng như xác thực, lưu trữ dữ liệu và OCR, bạn cần kết nối với Supabase backend."
    : "To use features like authentication, data storage, and OCR, you need to connect to Supabase backend.";

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Header onLanguageToggle={handleLanguageToggle} isVietnamese={isVietnamese} />
      
      {/* Backend Integration Notice */}
      <div className="container mx-auto px-6 py-4">
        <Card className="p-4 bg-warning/10 border-warning/20">
          <div className="flex items-start space-x-3">
            <Database className="w-5 h-5 text-warning mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-foreground">{authMessage}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {isVietnamese 
                  ? "Nhấp vào nút Supabase màu xanh ở góc trên bên phải để kết nối."
                  : "Click the green Supabase button in the top right to connect."
                }
              </p>
            </div>
          </div>
        </Card>
      </div>

      <main className="container mx-auto px-6 py-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title={isVietnamese ? "Tổng nhật ký" : "Total Entries"}
            value="142"
            subtitle={isVietnamese ? "+12 tuần này" : "+12 this week"}
            icon={Calendar}
            variant="default"
          />
          <StatsCard
            title={isVietnamese ? "Cây trồng" : "Active Crops"}
            value="8"
            subtitle={isVietnamese ? "3 loại chính" : "3 main types"}
            icon={Sprout}
            variant="success"
          />
          <StatsCard
            title={isVietnamese ? "Cảnh báo" : "Alerts"}
            value="3"
            subtitle={isVietnamese ? "Cần xử lý" : "Need attention"}
            icon={AlertTriangle}
            variant="warning"
          />
          <StatsCard
            title={isVietnamese ? "Năng suất" : "Productivity"}
            value="94%"
            subtitle={isVietnamese ? "+2% tháng trước" : "+2% from last month"}
            icon={TrendingUp}
            variant="accent"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Quick Actions & Chart */}
          <div className="lg:col-span-2 space-y-6">
            <QuickActionsCard isVietnamese={isVietnamese} />
            <ActivityChart isVietnamese={isVietnamese} />
          </div>
          
          {/* Right Column - Recent Activities */}
          <div>
            <RecentActivities isVietnamese={isVietnamese} />
          </div>
        </div>

        {/* Features Preview */}
        <Card className="p-6 shadow-medium">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            {isVietnamese ? "Tính năng sắp có" : "Upcoming Features"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg bg-muted/30">
              <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
              <h4 className="font-medium text-foreground">
                {isVietnamese ? "Xác thực" : "Authentication"}
              </h4>
              <p className="text-sm text-muted-foreground">
                {isVietnamese ? "Đăng nhập an toàn" : "Secure login system"}
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/30">
              <Calendar className="w-8 h-8 text-accent mx-auto mb-2" />
              <h4 className="font-medium text-foreground">OCR</h4>
              <p className="text-sm text-muted-foreground">
                {isVietnamese ? "Nhập dữ liệu từ ảnh" : "Image to text input"}
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/30">
              <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
              <h4 className="font-medium text-foreground">
                {isVietnamese ? "Phân tích" : "Analytics"}
              </h4>
              <p className="text-sm text-muted-foreground">
                {isVietnamese ? "Báo cáo chi tiết" : "Detailed reports"}
              </p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Index;
