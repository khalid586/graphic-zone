'use client';

import { useState, type FormEvent } from 'react';
import { Phone, Mail, MessageSquare, Upload, Facebook, CheckCircle2, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BRAND } from '@/config';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [formData, setFormData] = useState({
        companyName: '',
        address: '',
        mobile: '',
        workDescription: '',
        quantity: '',
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('sending');
        setErrorMessage('');

        try {
            const response = await fetch('/api/send-quotation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setFormStatus('success');
                // Clear form after showing success
                setFormData({
                    companyName: '',
                    address: '',
                    mobile: '',
                    workDescription: '',
                    quantity: '',
                });
                setTimeout(() => setFormStatus('idle'), 5000);
            } else {
                setFormStatus('error');
                setErrorMessage(data.details || data.error || 'কোটেশন পাঠাতে সমস্যা হয়েছে');
                console.error('API Error:', data);
            }
        } catch (error) {
            console.error('Error submitting quotation:', error);
            setFormStatus('error');
            setErrorMessage('নেটওয়ার্ক সমস্যা। অনুগ্রহ করে আবার চেষ্টা করুন।');
        }
    };

    return (
        <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary text-white relative overflow-hidden border-t-2 border-primary/40">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-primary/10 blur-[120px] rounded-full translate-y-1/2" />
            <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
                <div>
                    <h2 className="text-primary font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] mb-4 sm:mb-6">যোগাযোগ করুন</h2>
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 leading-tight">
                        আসুন আপনার পরবর্তী <br /> ক্যাম্পেইন নিয়ে আলোচনা করি।
                    </p>
                    <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
                        <div className="flex items-center gap-4 sm:gap-6">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary border-2 border-primary/30 flex-shrink-0">
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
                        <div className="flex items-center gap-4 sm:gap-6">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary border-2 border-primary/30 flex-shrink-0">
                                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[9px] sm:text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">ইমেইল সাপোর্ট</p>
                                <a href={`mailto:${BRAND.contactEmail}`} className="text-lg sm:text-xl font-bold  transition-colors block break-all">
                                    {BRAND.contactEmail}
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 sm:gap-6">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary border-2 border-primary/30 flex-shrink-0">
                                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[9px] sm:text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">আমাদের ঠিকানা</p>
                                {/* <p className="text-lg sm:text-xl font-bold">{BRAND.address.street}</p> */}
                                <p className="text-lg sm:text-xl font-bold">{BRAND.address.area}, {BRAND.address.city} {BRAND.address.postalCode}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Button asChild className="bg-success text-white px-4 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest hover:shadow-lg border-2 border-success/30 hover:scale-105 transition-all duration-300 h-auto w-full sm:w-auto">
                            <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="whitespace-nowrap">হোয়াটসঅ্যাপ</span>
                            </a>
                        </Button>
                        <Button asChild className="bg-info text-white px-4 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest hover:shadow-lg border-2 border-info/30 hover:scale-105 transition-all duration-300 h-auto w-full sm:w-auto">
                            <a href={BRAND.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="whitespace-nowrap">ফেসবুক পেজ</span>
                            </a>
                        </Button>
                    </div>
                </div>
                <Card className="rounded-2xl sm:rounded-[2.5rem] p-0 border-2 border-primary/40 shadow-2xl shadow-primary/20 overflow-hidden gap-0 bg-white">
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
                        {formStatus === 'error' && (
                            <div className="mb-6 p-4 sm:p-5 bg-destructive/10 border border-destructive/30 rounded-xl flex items-start gap-3 animate-in slide-in-from-top-2">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5">
                                    <svg className="w-full h-full text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-destructive text-sm sm:text-base">সমস্যা হয়েছে!</p>
                                    <p className="text-xs sm:text-sm text-destructive/80 mt-1">{errorMessage}</p>
                                    <button
                                        onClick={() => setFormStatus('idle')}
                                        className="text-xs font-bold text-destructive mt-2 underline hover:no-underline"
                                    >
                                        আবার চেষ্টা করুন
                                    </button>
                                </div>
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
                                    ঠিকানা
                                </Label>
                                <Input
                                    type="text"
                                    required
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    className="bg-background border-muted rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 h-auto focus-visible:ring-primary/20 focus-visible:border-primary text-sm sm:text-base"
                                    placeholder="আপনার ঠিকানা"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                <div className="space-y-2">
                                    <Label className="text-[9px] sm:text-[10px] font-bold text-muted-foreground uppercase tracking-wider sm:tracking-widest">
                                        মোবাইল
                                    </Label>
                                    <Input
                                        type="tel"
                                        required
                                        value={formData.mobile}
                                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                        className="bg-background border-muted rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 h-auto focus-visible:ring-primary/20 focus-visible:border-primary text-sm sm:text-base"
                                        placeholder="01XXXXXXXXX"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[9px] sm:text-[10px] font-bold text-muted-foreground uppercase tracking-wider sm:tracking-widest">
                                        পরিমাণ
                                    </Label>
                                    <Input
                                        type="number"
                                        required
                                        min="1"
                                        step="1"
                                        value={formData.quantity}
                                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                        className="bg-background border-muted rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 h-auto focus-visible:ring-primary/20 focus-visible:border-primary text-sm sm:text-base"
                                        placeholder="100"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-[9px] sm:text-[10px] font-bold text-muted-foreground uppercase tracking-wider sm:tracking-widest">
                                    কাজের বিবরণ
                                </Label>
                                <Textarea
                                    required
                                    value={formData.workDescription}
                                    onChange={(e) => setFormData({ ...formData, workDescription: e.target.value })}
                                    className="bg-background border-muted rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 h-auto min-h-[100px] focus-visible:ring-primary/20 focus-visible:border-primary text-sm sm:text-base resize-none"
                                    placeholder="কাজের বিস্তারিত বিবরণ লিখুন..."
                                />
                            </div>
                            {/* <div className="bg-primary/5 border-2 border-dashed border-primary/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center cursor-pointer hover:bg-primary/10 transition-all group">
                                <Upload className="w-7 h-7 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                                <p className="text-xs sm:text-sm font-bold text-primary">ডিজাইন ফাইল এখানে ড্রপ করুন</p>
                                <p className="text-[9px] sm:text-[10px] text-primary/70 mt-1 uppercase tracking-wider sm:tracking-widest font-bold">পিডিএফ, এআই, বা হাই-রেজ জেপিজি</p>
                            </div> */}
                            <Button
                                type="submit"
                                disabled={formStatus === 'sending'}
                                className="w-full bg-primary text-white py-4 sm:py-5 mt-8 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest hover:bg-primary/90 shadow-xl shadow-primary/20 h-auto disabled:opacity-50"
                            >
                                {formStatus === 'sending' ? 'প্রক্রিয়াকরণ হচ্ছে...' : formStatus === 'success' ? 'সফলভাবে জমা হয়েছে!' : 'কোটেশন অনুরোধ জমা দিন'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export { Contact };
