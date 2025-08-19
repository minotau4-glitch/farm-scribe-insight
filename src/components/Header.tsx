import { Button } from "@/components/ui/button";
import { Bell, Settings, User, Globe, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  onLanguageToggle: () => void;
  isVietnamese: boolean;
}

export const Header = ({ onLanguageToggle, isVietnamese }: HeaderProps) => {
  return (
    <header className="bg-card border-b border-border shadow-soft">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">🌾</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">FarmScribe</h1>
              <p className="text-sm text-muted-foreground">
                {isVietnamese ? "Quản lí nhật ký nông nghiệp" : "Agricultural Diary Management"}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={onLanguageToggle}
              className="flex items-center space-x-2"
            >
              <Globe className="w-4 h-4" />
              <span>{isVietnamese ? "EN" : "VN"}</span>
            </Button>
            
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            
            <Link to="/login">
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <LogIn className="w-4 h-4" />
                <span>{isVietnamese ? "Đăng nhập" : "Login"}</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};