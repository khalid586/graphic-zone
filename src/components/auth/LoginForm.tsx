'use client';

import { useState, type FormEvent } from 'react';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { type FormErrors, inputClassName } from '@/lib/form';

type LoginErrors = FormErrors<'userId' | 'password'>;

const LoginForm = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState<LoginErrors>({});
    const [isLoading, setIsLoading] = useState(false);

    const clearFieldError = (field: keyof LoginErrors) => {
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const validate = (): boolean => {
        const newErrors: LoginErrors = {};

        if (!userId.trim()) {
            newErrors.userId = 'ইউজার আইডি প্রয়োজন';
        }

        if (!password) {
            newErrors.password = 'পাসওয়ার্ড প্রয়োজন';
        } else if (password.length < 6) {
            newErrors.password = 'পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validate()) return;

        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {/* User ID */}
            <div className="space-y-2">
                <Label htmlFor="login-userId" className="text-foreground text-sm font-medium">
                    ইউজার আইডি
                </Label>
                <Input
                    id="login-userId"
                    type="text"
                    placeholder="আপনার ইউজার আইডি দিন"
                    value={userId}
                    onChange={(e) => {
                        setUserId(e.target.value);
                        clearFieldError('userId');
                    }}
                    className={inputClassName(!!errors.userId)}
                />
                {errors.userId && (
                    <p className="text-xs text-destructive mt-1">{errors.userId}</p>
                )}
            </div>

            {/* Password */}
            <div className="space-y-2">
                <Label htmlFor="login-password" className="text-foreground text-sm font-medium">
                    পাসওয়ার্ড
                </Label>
                <div className="relative">
                    <Input
                        id="login-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="আপনার পাসওয়ার্ড দিন"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            clearFieldError('password');
                        }}
                        className={`${inputClassName(!!errors.password)} pr-10`}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? 'পাসওয়ার্ড লুকান' : 'পাসওয়ার্ড দেখান'}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                </div>
                {errors.password && (
                    <p className="text-xs text-destructive mt-1">{errors.password}</p>
                )}
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 rounded border-muted text-primary focus:ring-primary/20 cursor-pointer accent-primary"
                    />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        মনে রাখুন
                    </span>
                </label>
                {/* <button
                    type="button"
                    className="text-sm text-primary hover:text-primary/90 font-medium transition-colors"
                >
                    পাসওয়ার্ড ভুলে গেছেন?
                </button> */}
            </div>

            {/* Login Button */}
            <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 bg-secondary hover:bg-secondary/90 text-white rounded-lg font-semibold text-sm tracking-wide shadow-lg shadow-secondary/20 transition-all duration-200"
            >
                {isLoading ? (
                    <span className="flex items-center gap-2">
                        <LoadingSpinner size={16} />
                        সাইন ইন হচ্ছে...
                    </span>
                ) : (
                    <span className="flex items-center gap-2">
                        <LogIn className="w-4 h-4" /> সাইন ইন
                    </span>
                )}
            </Button>
        </form>
    );
};

export { LoginForm };


