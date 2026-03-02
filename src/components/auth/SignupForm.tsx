'use client';

import { useState, type FormEvent } from 'react';
import { Eye, EyeOff, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import {
    type FormErrors,
    INPUT_BASE_CLASS as inputBaseClass,
    INPUT_ERROR_CLASS as inputErrorClass,
    isValidEmail,
    isValidPhone,
} from '@/lib/form';

type SignupErrors = FormErrors<'fullName' | 'email' | 'phone' | 'password' | 'confirmPassword'>;

const SignupForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState<SignupErrors>({});
    const [isLoading, setIsLoading] = useState(false);

    const validate = (): boolean => {
        const newErrors: SignupErrors = {};

        if (!fullName.trim()) {
            newErrors.fullName = 'পূর্ণ নাম প্রয়োজন';
        } else if (fullName.trim().length < 2) {
            newErrors.fullName = 'নাম কমপক্ষে ২ অক্ষরের হতে হবে';
        }

        if (!email.trim()) {
            newErrors.email = 'ইমেইল প্রয়োজন';
        } else if (!isValidEmail(email)) {
            newErrors.email = 'সঠিক ইমেইল ঠিকানা দিন';
        }

        if (!phone.trim()) {
            newErrors.phone = 'ফোন নম্বর প্রয়োজন';
        } else if (!isValidPhone(phone)) {
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

    const clearFieldError = (field: keyof SignupErrors) => {
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
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
                        aria-label={showPassword ? 'পাসওয়ার্ড লুকান' : 'পাসওয়ার্ড দেখান'}
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
                        aria-label={showConfirmPassword ? 'পাসওয়ার্ড লুকান' : 'পাসওয়ার্ড দেখান'}
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
                        <LoadingSpinner size={16} />
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

export { SignupForm };


