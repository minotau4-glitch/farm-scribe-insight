import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock, Sprout } from "lucide-react";

interface LoginFormProps {
  isVietnamese: boolean;
  onLogin: (email: string, password: string) => void;
  onToggleRegister: () => void;
}

export const LoginForm = ({ isVietnamese, onLogin, onToggleRegister }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      onLogin(email, password);
      setIsLoading(false);
    }, 1500);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card className="w-full max-w-md p-8 shadow-strong">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <Sprout className="w-8 h-8 text-primary-foreground" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">
          {isVietnamese ? "Đăng nhập" : "Sign In"}
        </h1>
        <p className="text-sm text-muted-foreground mt-2">
          {isVietnamese 
            ? "Truy cập vào hệ thống quản lý nông nghiệp" 
            : "Access your agricultural management system"
          }
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-foreground">
            {isVietnamese ? "Email hoặc tên đăng nhập" : "Email or Username"}
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
              placeholder={isVietnamese ? "nhập email của bạn" : "Enter your email"}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 pr-10"
              placeholder={isVietnamese ? "nhập mật khẩu" : "Enter password"}
              required
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="rounded border-border" />
            <span className="text-muted-foreground">
              {isVietnamese ? "Ghi nhớ đăng nhập" : "Remember me"}
            </span>
          </label>
          <button
            type="button"
            className="text-primary hover:text-primary-hover underline"
          >
            {isVietnamese ? "Quên mật khẩu?" : "Forgot password?"}
          </button>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-primary hover:bg-primary-hover"
          disabled={isLoading}
        >
          {isLoading 
            ? (isVietnamese ? "Đang đăng nhập..." : "Signing in...") 
            : (isVietnamese ? "Đăng nhập" : "Sign In")
          }
        </Button>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {isVietnamese ? "Chưa có tài khoản?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={onToggleRegister}
              className="text-primary hover:text-primary-hover underline font-medium"
            >
              {isVietnamese ? "Đăng ký ngay" : "Sign up"}
            </button>
          </p>
        </div>
      </form>
    </Card>
  );
};