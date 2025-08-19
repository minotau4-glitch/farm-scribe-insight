import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock, User, Building, Sprout } from "lucide-react";

interface RegisterFormProps {
  isVietnamese: boolean;
  onRegister: (data: any) => void;
  onToggleLogin: () => void;
}

export const RegisterForm = ({ isVietnamese, onRegister, onToggleLogin }: RegisterFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    farmName: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert(isVietnamese ? "Mật khẩu không khớp!" : "Passwords don't match!");
      return;
    }

    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      onRegister(formData);
      setIsLoading(false);
    }, 1500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-md p-8 shadow-strong">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <Sprout className="w-8 h-8 text-primary-foreground" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">
          {isVietnamese ? "Đăng ký" : "Sign Up"}
        </h1>
        <p className="text-sm text-muted-foreground mt-2">
          {isVietnamese 
            ? "Tạo tài khoản quản lý nông nghiệp" 
            : "Create your farm management account"
          }
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-sm font-medium text-foreground">
            {isVietnamese ? "Họ và tên" : "Full Name"}
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              className="pl-10"
              placeholder={isVietnamese ? "Nhập họ và tên" : "Enter your full name"}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="pl-10"
              placeholder={isVietnamese ? "Nhập email" : "Enter your email"}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="farmName" className="text-sm font-medium text-foreground">
            {isVietnamese ? "Tên trang trại" : "Farm Name"}
          </Label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="farmName"
              type="text"
              value={formData.farmName}
              onChange={(e) => handleInputChange("farmName", e.target.value)}
              className="pl-10"
              placeholder={isVietnamese ? "Nhập tên trang trại" : "Enter farm name"}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium text-foreground">
            {isVietnamese ? "Mật khẩu" : "Password"}
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className="pl-10 pr-10"
              placeholder={isVietnamese ? "Tạo mật khẩu" : "Create password"}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
            {isVietnamese ? "Xác nhận mật khẩu" : "Confirm Password"}
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
              className="pl-10 pr-10"
              placeholder={isVietnamese ? "Nhập lại mật khẩu" : "Confirm password"}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" id="terms" className="rounded border-border" required />
          <Label htmlFor="terms" className="text-xs text-muted-foreground">
            {isVietnamese 
              ? "Tôi đồng ý với Điều khoản dịch vụ và Chính sách bảo mật"
              : "I agree to the Terms of Service and Privacy Policy"
            }
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-primary hover:bg-primary-hover"
          disabled={isLoading}
        >
          {isLoading 
            ? (isVietnamese ? "Đang tạo tài khoản..." : "Creating account...") 
            : (isVietnamese ? "Đăng ký" : "Sign Up")
          }
        </Button>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {isVietnamese ? "Đã có tài khoản?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={onToggleLogin}
              className="text-primary hover:text-primary-hover underline font-medium"
            >
              {isVietnamese ? "Đăng nhập" : "Sign in"}
            </button>
          </p>
        </div>
      </form>
    </Card>
  );
};