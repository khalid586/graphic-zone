'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText } from 'lucide-react';
import { BillingForm } from './BillingForm';
import { BillingSummary } from './BillingSummary';
import { BillingSuccess } from './BillingSuccess';
import type { BillingFormData, BillingItem, Bill } from '@/types/billing';

const BillingPage = () => {
    const [formData, setFormData] = useState<BillingFormData>({
        customerId: '',
        customerName: '',
        customerAddress: '',
        customerPhone: '',
        items: [{ id: crypto.randomUUID(), description: '', quantity: 1, rate: 0, amount: 0 }] as readonly BillingItem[],
        advance: 0,
    });
    const [generatedBill, setGeneratedBill] = useState<Bill | null>(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [formKey, setFormKey] = useState(0);

    const handleFormChange = (data: Partial<BillingFormData>) => {
        setFormData((prev) => ({ ...prev, ...data }));
    };

    const handleSubmit = (data: BillingFormData) => {
        // Calculate total
        const total = data.items.reduce((sum, item) => sum + item.amount, 0);
        const due = total - data.advance;

        // Create bill object
        const bill: Bill = {
            ...data,
            id: `BILL-${Date.now()}`,
            status: 'generated',
            total,
            due,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        setGeneratedBill(bill);
        setShowSuccess(true);
    };

    const handleCreateNew = () => {
        setFormData({
            customerId: '',
            customerName: '',
            customerAddress: '',
            customerPhone: '',
            items: [{ id: crypto.randomUUID(), description: '', quantity: 1, rate: 0, amount: 0 }] as readonly BillingItem[],
            advance: 0,
        });
        setGeneratedBill(null);
        setShowSuccess(false);
        setFormKey((prev) => prev + 1); // Force form to remount
    };

    const handleCloseSuccess = () => {
        setShowSuccess(false);
        // Clear the form data
        setFormData({
            customerId: '',
            customerName: '',
            customerAddress: '',
            customerPhone: '',
            items: [{ id: crypto.randomUUID(), description: '', quantity: 1, rate: 0, amount: 0 }] as readonly BillingItem[],
            advance: 0,
        });
        setFormKey((prev) => prev + 1); // Force form to remount
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="px-6 sm:px-8 py-8 sm:py-12">
                <div className="max-w-7xl mx-auto">
                    {/* Page Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <FileText className="w-5 h-5 text-primary" />
                            </div>
                            <h1 className="text-3xl font-bold text-foreground">Create Invoice</h1>
                        </div>
                        <p className="text-muted-foreground text-sm sm:text-base">
                            Generate invoice for customer order
                        </p>
                    </motion.div>

                    {/* Success Modal Overlay */}
                    <AnimatePresence>
                        {showSuccess && generatedBill && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                                onClick={handleCloseSuccess}
                            >
                                <div onClick={(e) => e.stopPropagation()}>
                                    <BillingSuccess
                                        bill={generatedBill}
                                        onCreateNew={handleCreateNew}
                                        onClose={handleCloseSuccess}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Column - Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="lg:col-span-2"
                        >
                            <div className="bg-white rounded-xl border border-muted shadow-sm p-6 sm:p-8">
                                <BillingForm
                                    key={formKey}
                                    onSubmit={handleSubmit}
                                    onChange={handleFormChange}
                                />
                            </div>
                        </motion.div>

                        {/* Right Column - Summary (Desktop Only) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="hidden lg:block"
                        >
                            <BillingSummary formData={formData} />
                        </motion.div>
                    </div>

                    {/* Mobile Summary (Below Form) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 lg:hidden"
                    >
                        <BillingSummary formData={formData} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export { BillingPage };


