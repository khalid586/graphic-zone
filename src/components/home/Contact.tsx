'use client';

import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');
        setTimeout(() => {
            setFormStatus('success');
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 px-8 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-indigo-600/10 blur-[120px] rounded-full translate-y-1/2" />
            <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-20">
                <div>
                    <h2 className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">Contact Us</h2>
                    <p className="text-5xl font-black mb-8 leading-tight">
                        Let's Discuss Your <br /> Next Campaign.
                    </p>
                    <div className="space-y-8 mb-12">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-400 border border-white/10">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Direct Line</p>
                                <p className="text-xl font-bold">+1 (800) GRAPHIC</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-400 border border-white/10">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email Support</p>
                                <p className="text-xl font-bold">hello@graphiczone.com</p>
                            </div>
                        </div>
                    </div>
                    <Button className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-green-700 h-auto">
                        <MessageSquare className="w-5 h-5" /> WhatsApp Support
                    </Button>
                </div>
                <Card className="rounded-[2.5rem] p-0 border-0 shadow-2xl overflow-hidden gap-0">
                    <CardHeader className="p-10 pb-0 md:p-12 md:pb-0">
                        <CardTitle className="text-2xl font-bold">Request a Quote</CardTitle>
                    </CardHeader>
                    <CardContent className="p-10 pt-6 md:p-12 md:pt-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        Company Name
                                    </Label>
                                    <Input
                                        type="text"
                                        required
                                        className="bg-slate-50 border-slate-200 rounded-xl px-4 py-3 h-auto focus-visible:ring-indigo-600/20 focus-visible:border-indigo-600"
                                        placeholder="Acme Corp"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        Work Email
                                    </Label>
                                    <Input
                                        type="email"
                                        required
                                        className="bg-slate-50 border-slate-200 rounded-xl px-4 py-3 h-auto focus-visible:ring-indigo-600/20 focus-visible:border-indigo-600"
                                        placeholder="john@acme.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    Service Type
                                </Label>
                                <Select defaultValue="bulk">
                                    <SelectTrigger className="bg-slate-50 border-slate-200 rounded-xl px-4 py-3 h-auto focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600">
                                        <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="bulk">Bulk Digital Printing</SelectItem>
                                        <SelectItem value="large">Large Format Signage</SelectItem>
                                        <SelectItem value="branding">Corporate Branding</SelectItem>
                                        <SelectItem value="editorial">Editorial/Magazines</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="bg-indigo-50 border-2 border-dashed border-indigo-200 rounded-2xl p-8 text-center cursor-pointer hover:bg-indigo-100 transition-all group">
                                <Upload className="w-8 h-8 text-indigo-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                <p className="text-sm font-bold text-indigo-600">Drop Design Files Here</p>
                                <p className="text-[10px] text-indigo-400 mt-1 uppercase tracking-widest font-bold">PDF, AI, or High-Res JPG</p>
                            </div>
                            <Button
                                type="submit"
                                disabled={formStatus !== 'idle'}
                                className="w-full bg-indigo-600 text-white py-5 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-indigo-700 shadow-xl shadow-indigo-600/20 h-auto"
                            >
                                {formStatus === 'idle' ? 'Submit Quote Request' : formStatus === 'sending' ? 'Processing...' : 'Request Received!'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default Contact;
