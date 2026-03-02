'use client';

import { useState, type FormEvent } from 'react';
import { Phone, Mail, MessageSquare, Upload, Facebook, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BRAND } from '@/config';
import { SERVICE_OPTIONS } from '@/data/constants';
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
    const [formData, setFormData] = useState({
        companyName: '',
        email: '',
        service: 'bulk',
        budget: '',
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('sending');
        setTimeout(() => {
            setFormStatus('success');
            // Clear form after showing success
            setFormData({
                companyName: '',
                email: '',
                service: 'bulk',
                budget: '',
            });
            setTimeout(() => setFormStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary text-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-primary/10 blur-[120px] rounded-full translate-y-1/2" />
            <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
                <div>
                    <h2 className="text-primary font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] mb-4 sm:mb-6">যোগাযোগ করুন</h2>
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 leading-tight">
                        আসুন আপনার পরবর্তী <br /> ক্যাম্পেইন নিয়ে আলোচনা করি।
                    </p>
                    <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
                        <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary border border-white/10 flex-shrink-0">
                                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[9px] sm:text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">সরাসরি লাইন</p>
                                <a href={`tel:${BRAND.contactPhone.replace(/[^+0-9]/g, '')}`} className="text-lg sm:text-xl font-bold  transition-colors block break-all">
                                    {BRAND.contactPhone}
                                </a>
                                <a href={`tel:${BRAND.contactPhoneSecondary.replace(/[^+0-9]/g, '')}`} className="text-base sm:text-lg font-semibold text-muted-foreground transition-colors block break-all">
                                    {BRAND.contactPhoneSecondary}
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary border border-white/10 flex-shrink-0">
                                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[9px] sm:text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">ইমেইল সাপোর্ট</p>
                                <a href={`mailto:${BRAND.contactEmail}`} className="text-lg sm:text-xl font-bold  transition-colors block break-all">
                                    {BRAND.contactEmail}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Button asChild className="bg-success text-white px-4 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest hover:bg-success/90 h-auto w-full sm:w-auto">
                            <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="whitespace-nowrap">হোয়াটসঅ্যাপ</span>
                            </a>
                        </Button>
                        <Button asChild className="bg-info text-white px-4 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest hover:bg-info/90 h-auto w-full sm:w-auto">
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
                        {formStatus === 'success' && (
                            <div className="mb-6 p-4 sm:p-5 bg-success/10 border border-success/30 rounded-xl flex items-start gap-3 animate-in slide-in-from-top-2">
                                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-success shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-success text-sm sm:text-base">আপনার অনুরোধ সফলভাবে জমা হয়েছে!</p>
                                    <p className="text-xs sm:text-sm text-success/80 mt-1">আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।</p>
                                </div>
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                <div className="space-y-2">
                                    <Label className="text-[9px] sm:text-[10px] font-bold text-muted-foreground uppercase tracking-wider sm:tracking-widest">
                                        প্রতিষ্ঠানের নাম
                                    </Label>
                                    <Input
                                        type="text"
                                        required
                                        value={formData.companyName}
                                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                        className="bg-background border-muted rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 h-auto focus-visible:ring-primary/20 focus-visible:border-primary text-sm sm:text-base"
                                        placeholder="আপনার প্রতিষ্ঠান"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[9px] sm:text-[10px] font-bold text-muted-foreground uppercase tracking-wider sm:tracking-widest">
                                        কাজের ইমেইল
                                    </Label>
                                    <Input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="bg-background border-muted rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 h-auto focus-visible:ring-primary/20 focus-visible:border-primary text-sm sm:text-base"
                                        placeholder="name@example.com"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                <div className="space-y-2">
                                    <Label className="text-[9px] sm:text-[10px] font-bold text-muted-foreground uppercase tracking-wider sm:tracking-widest">
                                        সেবার ধরন
                                    </Label>
                                    <Select
                                        value={formData.service}
                                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                                    >
                                        <SelectTrigger className="bg-background border-muted rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 h-auto focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm sm:text-base">
                                            <SelectValue placeholder="একটি সেবা নির্বাচন করুন" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {SERVICE_OPTIONS.map((option) => (
                                                <SelectItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[9px] sm:text-[10px] font-bold text-muted-foreground uppercase tracking-wider sm:tracking-widest">
                                        আপনার বাজেট (৳)
                                    </Label>
                                    <Input
                                        type="number"
                                        required
                                        min="0"
                                        step="1"
                                        value={formData.budget}
                                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                        className="bg-background border-muted rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 h-auto focus-visible:ring-primary/20 focus-visible:border-primary text-sm sm:text-base"
                                        placeholder="৫০০০"
                                    />
                                </div>
                            </div>
                            {/* <div className="bg-primary/5 border-2 border-dashed border-primary/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center cursor-pointer hover:bg-primary/10 transition-all group">
                                <Upload className="w-7 h-7 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                                <p className="text-xs sm:text-sm font-bold text-primary">ডিজাইন ফাইল এখানে ড্রপ করুন</p>
                                <p className="text-[9px] sm:text-[10px] text-primary/70 mt-1 uppercase tracking-wider sm:tracking-widest font-bold">পিডিএফ, এআই, বা হাই-রেজ জেপিজি</p>
                            </div> */}
                            <Button
                                type="submit"
                                disabled={formStatus !== 'idle'}
                                className="w-full bg-primary text-white py-4 sm:py-5 mt-8 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest hover:bg-primary/90 shadow-xl shadow-primary/20 h-auto disabled:opacity-50"
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
