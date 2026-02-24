'use client';

import { useState } from 'react';
import { Eye, EyeOff, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FormErrors {
    fullName?: string;
    email?: string;
    phone?: string;
    password?: string;
    confirmPassword?: string;
}

const SignupForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isLoading, setIsLoading] = useState(false);

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!fullName.trim()) {
            newErrors.fullName = 'পূর্ণ নাম প্রয়োজন';
        } else if (fullName.trim().length < 2) {
            newErrors.fullName = 'নাম কমপক্ষে ২ অক্ষরের হতে হবে';
        }

        if (!email.trim()) {
            newErrors.email = 'ইমেইল প্রয়োজন';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'সঠিক ইমেইল ঠিকানা দিন';
        }

        if (!phone.trim()) {
            newErrors.phone = 'ফোন নম্বর প্রয়োজন';
        } else if (!/^\+?[\d\s-]{7,15}$/.test(phone)) {
            newErrors.phone = 'সঠিক ফোন নম্বর দিন';
        }

        if (!password) {
            newErrors.password = 'পাসওয়ার্ড প্রয়োজন';
        } else if (password.length < 8) {
            newErrors.password = 'পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে';
        }

        if (!confirmPassword) {
            newErrors.confirmPassword = 'দয়া করে আপনার পাসওয়ার্ড নিশ্চিত করুন';
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = 'পাসওয়ার্ড মিলছে না';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const clearFieldError = (field: keyof FormErrors) => {
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsLoading(false);
    };

    const inputBaseClass = 'h-11 rounded-lg bg-slate-50 border-slate-200 placeholder:text-slate-400 focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20';
    const inputErrorClass = 'border-red-400 focus-visible:border-red-400 focus-visible:ring-red-400/20';

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-2">
                <Label htmlFor="signup-name" className="text-slate-700 text-sm font-medium">
                    পূর্ণ নাম
                </Label>
                <Input
                    id="signup-name"
                    type="text"
                    placeholder="আপনার নাম"
                    value={fullName}
                    onChange={(e) => {
                        setFullName(e.target.value);
                        clearFieldError('fullName');
                    }}
                    className={`${inputBaseClass} ${errors.fullName ? inputErrorClass : ''}`}
                />
                {errors.fullName && (
                    <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
                )}
            </div>

            {/* Email */}
            <div className="space-y-2">
                <Label htmlFor="signup-email" className="text-slate-700 text-sm font-medium">
                    ইমেইল
                </Label>
                <Input
                    id="signup-email"
                    type="email"
                    placeholder="example@mail.com"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        clearFieldError('email');
                    }}
                    className={`${inputBaseClass} ${errors.email ? inputErrorClass : ''}`}
                />
                {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
                <Label htmlFor="signup-phone" className="text-slate-700 text-sm font-medium">
                    ফোন নম্বর
                </Label>
                <Input
                    id="signup-phone"
                    type="tel"
                    placeholder="+৮৮০ ১XXXXXXXX"
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.target.value);
                        clearFieldError('phone');
                    }}
                    className={`${inputBaseClass} ${errors.phone ? inputErrorClass : ''}`}
                />
                {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                )}
            </div>

            {/* Password */}
            <div className="space-y-2">
                <Label htmlFor="signup-password" className="text-slate-700 text-sm font-medium">
                    পাসওয়ার্ড
                </Label>
                <div className="relative">
                    <Input
                        id="signup-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="সর্বনিম্ন ৮ অক্ষর"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            clearFieldError('password');
                        }}
                        className={`${inputBaseClass} pr-10 ${errors.password ? inputErrorClass : ''}`}
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

            {/* Confirm Password */}
            <div className="space-y-2">
                <Label htmlFor="signup-confirm" className="text-slate-700 text-sm font-medium">
                    পাসওয়ার্ড নিশ্চিত করুন
                </Label>
                <div className="relative">
                    <Input
                        id="signup-confirm"
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="আবার পাসওয়ার্ড দিন"
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            clearFieldError('confirmPassword');
                        }}
                        className={`${inputBaseClass} pr-10 ${errors.confirmPassword ? inputErrorClass : ''}`}
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                </div>
                {errors.confirmPassword && (
                    <p className="text-xs text-red-500 mt-1">{errors.confirmPassword}</p>
                )}
            </div>

            {/* Create Account Button */}
            <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold text-sm tracking-wide shadow-lg shadow-slate-900/20 transition-all duration-200 mt-2"
            >
                {isLoading ? (
                    <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        অ্যাকাউন্ট তৈরি হচ্ছে...
                    </span>
                ) : (
                    <span className="flex items-center gap-2">
                        <UserPlus className="w-4 h-4" /> অ্যাকাউন্ট তৈরি করুন
                    </span>
                )}
            </Button>
        </form>
    );
};

export default SignupForm;
