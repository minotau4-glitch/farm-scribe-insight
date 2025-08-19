import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "@/components/LoginForm";
import { RegisterForm } from "@/components/RegisterForm";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [isVietnamese, setIsVietnamese] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLanguageToggle = () => {
    setIsVietnamese(!isVietnamese);
  };

  const handleLogin = (email: string, password: string) => {
    toast({
      title: isVietnamese ? "Đăng nhập thành công!" : "Login successful!",
      description: isVietnamese 
        ? "Chào mừng trở lại với FarmScribe" 
        : "Welcome back to FarmScribe",
    });
    navigate("/");
  };

  const handleRegister = (data: any) => {
    toast({
      title: isVietnamese ? "Tài khoản đã được tạo!" : "Account created!",
      description: isVietnamese 
        ? "Chào mừng bạn đến với FarmScribe" 
        : "Welcome to FarmScribe",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-success/5 rounded-full blur-2xl"></div>
      </div>

      {/* Language toggle */}
      <div className="absolute top-6 right-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLanguageToggle}
          className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm"
        >
          <Globe className="w-4 h-4" />
          <span>{isVietnamese ? "EN" : "VN"}</span>
        </Button>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-md">
        {isRegisterMode ? (
          <RegisterForm
            isVietnamese={isVietnamese}
            onRegister={handleRegister}
            onToggleLogin={() => setIsRegisterMode(false)}
          />
        ) : (
          <LoginForm
            isVietnamese={isVietnamese}
            onLogin={handleLogin}
            onToggleRegister={() => setIsRegisterMode(true)}
          />
        )}
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-xs text-muted-foreground">
          © 2024 FarmScribe. {isVietnamese ? "Bảo lưu mọi quyền." : "All rights reserved."}
        </p>
      </div>
    </div>
  );
};

export default Login;