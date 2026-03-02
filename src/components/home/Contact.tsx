'use client';

import { useState, type FormEvent } from 'react';
import { Phone, Mail, MessageSquare, Upload, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BRAND } from '@/config';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const Contact = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('sending');
        setTimeout(() => {
            setFormStatus('success');
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-indigo-600/10 blur-[120px] rounded-full translate-y-1/2" />
            <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
                <div>
                    <h2 className="text-indigo-400 font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] mb-4 sm:mb-6">যোগাযোগ করুন</h2>
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 leading-tight">
                        আসুন আপনার পরবর্তী <br /> ক্যাম্পেইন নিয়ে আলোচনা করি।
                    </p>
                    <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
                        <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-400 border border-white/10 flex-shrink-0">
                                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">সরাসরি লাইন</p>
                                <a href={`tel:${BRAND.contactPhone.replace(/[^+0-9]/g, '')}`} className="text-lg sm:text-xl font-bold hover:text-indigo-400 transition-colors block break-all">
                                    {BRAND.contactPhone}
                                </a>
                                <a href={`tel:${BRAND.contactPhoneSecondary.replace(/[^+0-9]/g, '')}`} className="text-base sm:text-lg font-semibold text-slate-400 hover:text-indigo-400 transition-colors block break-all">
                                    {BRAND.contactPhoneSecondary}
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-400 border border-white/10 flex-shrink-0">
                                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">ইমেইল সাপোর্ট</p>
                                <a href={`mailto:${BRAND.contactEmail}`} className="text-lg sm:text-xl font-bold hover:text-indigo-400 transition-colors block break-all">
                                    {BRAND.contactEmail}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Button asChild className="bg-green-600 text-white px-4 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest hover:bg-green-700 h-auto w-full sm:w-auto">
                            <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="whitespace-nowrap">হোয়াটসঅ্যাপ</span>
                            </a>
                        </Button>
                        <Button asChild className="bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest hover:bg-blue-700 h-auto w-full sm:w-auto">
                            <a href={BRAND.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="whitespace-nowrap">ফেসবুক পেজ</span>
                            </a>
                        </Button>
                    </div>
                </div>
                <Card className="rounded-2xl sm:rounded-[2.5rem] p-0 border-0 shadow-2xl overflow-hidden gap-0">
                    <CardHeader className="p-6 pb-0 sm:p-8 sm:pb-0 md:p-10 md:pb-0 lg:p-12 lg:pb-0">
                        <CardTitle className="text-xl sm:text-2xl font-bold">কোটেশন অনুরোধ করুন</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-4 sm:p-8 sm:pt-5 md:p-10 md:pt-6 lg:p-12 lg:pt-6">
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                <div className="space-y-2">
                                    <Label className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider sm:tracking-widest">
                                        প্রতিষ্ঠানের নাম
                                    </Label>
                                    <Input
                                        type="text"
                                        required
                                        className="bg-slate-50 border-slate-200 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 h-auto focus-visible:ring-indigo-600/20 focus-visible:border-indigo-600 text-sm sm:text-base"
                                        placeholder="আপনার প্রতিষ্ঠান"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider sm:tracking-widest">
                                        কাজের ইমেইল
                                    </Label>
                                    <Input
                                        type="email"
                                        required
                                        className="bg-slate-50 border-slate-200 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 h-auto focus-visible:ring-indigo-600/20 focus-visible:border-indigo-600 text-sm sm:text-base"
                                        placeholder="name@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider sm:tracking-widest">
                                    সেবার ধরন
                                </Label>
                                <Select defaultValue="bulk">
                                    <SelectTrigger className="bg-slate-50 border-slate-200 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 h-auto focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 text-sm sm:text-base">
                                        <SelectValue placeholder="একটি সেবা নির্বাচন করুন" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="bulk">বাল্ক ডিজিটাল প্রিন্টিং</SelectItem>
                                        <SelectItem value="large">লার্জ ফরম্যাট সাইনেজ</SelectItem>
                                        <SelectItem value="branding">কর্পোরেট ব্র্যান্ডিং</SelectItem>
                                        <SelectItem value="editorial">এডিটোরিয়াল/ম্যাগাজিন</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="bg-indigo-50 border-2 border-dashed border-indigo-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center cursor-pointer hover:bg-indigo-100 transition-all group">
                                <Upload className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                                <p className="text-xs sm:text-sm font-bold text-indigo-600">ডিজাইন ফাইল এখানে ড্রপ করুন</p>
                                <p className="text-[9px] sm:text-[10px] text-indigo-400 mt-1 uppercase tracking-wider sm:tracking-widest font-bold">পিডিএফ, এআই, বা হাই-রেজ জেপিজি</p>
                            </div>
                            <Button
                                type="submit"
                                disabled={formStatus !== 'idle'}
                                className="w-full bg-indigo-600 text-white py-4 sm:py-5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest hover:bg-indigo-700 shadow-xl shadow-indigo-600/20 h-auto"
                            >
                                {formStatus === 'idle' ? 'কোটেশন অনুরোধ জমা দিন' : formStatus === 'sending' ? 'প্রক্রিয়াকরণ হচ্ছে...' : 'অনুরোধ পাওয়া গেছে!'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export { Contact };
