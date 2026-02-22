'use client';

import { useState } from 'react';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FormErrors {
    emailOrPhone?: string;
    password?: string;
}

const LoginForm = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isLoading, setIsLoading] = useState(false);

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!emailOrPhone.trim()) {
            newErrors.emailOrPhone = 'Email or phone number is required';
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrPhone) &&
            !/^\+?[\d\s-]{7,15}$/.test(emailOrPhone)
        ) {
            newErrors.emailOrPhone = 'Enter a valid email or phone number';
        }

        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email or Phone */}
            <div className="space-y-2">
                <Label htmlFor="login-email" className="text-slate-700 text-sm font-medium">
                    Email or Phone
                </Label>
                <Input
                    id="login-email"
                    type="text"
                    placeholder="you@example.com or +234..."
                    value={emailOrPhone}
                    onChange={(e) => {
                        setEmailOrPhone(e.target.value);
                        if (errors.emailOrPhone) setErrors((prev) => ({ ...prev, emailOrPhone: undefined }));
                    }}
                    className={`h-11 rounded-lg bg-slate-50 border-slate-200 placeholder:text-slate-400 focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20 ${errors.emailOrPhone ? 'border-red-400 focus-visible:border-red-400 focus-visible:ring-red-400/20' : ''
                        }`}
                />
                {errors.emailOrPhone && (
                    <p className="text-xs text-red-500 mt-1">{errors.emailOrPhone}</p>
                )}
            </div>

            {/* Password */}
            <div className="space-y-2">
                <Label htmlFor="login-password" className="text-slate-700 text-sm font-medium">
                    Password
                </Label>
                <div className="relative">
                    <Input
                        id="login-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
                        }}
                        className={`h-11 rounded-lg bg-slate-50 border-slate-200 placeholder:text-slate-400 pr-10 focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20 ${errors.password ? 'border-red-400 focus-visible:border-red-400 focus-visible:ring-red-400/20' : ''
                            }`}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                </div>
                {errors.password && (
                    <p className="text-xs text-red-500 mt-1">{errors.password}</p>
                )}
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500/20 cursor-pointer accent-indigo-600"
                    />
                    <span className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors">
                        Remember me
                    </span>
                </label>
                <button
                    type="button"
                    className="text-sm text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                >
                    Forgot password?
                </button>
            </div>

            {/* Login Button */}
            <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold text-sm tracking-wide shadow-lg shadow-slate-900/20 transition-all duration-200"
            >
                {isLoading ? (
                    <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Signing in...
                    </span>
                ) : (
                    <span className="flex items-center gap-2">
                        <LogIn className="w-4 h-4" /> Sign In
                    </span>
                )}
            </Button>
        </form>
    );
};

export default LoginForm;
