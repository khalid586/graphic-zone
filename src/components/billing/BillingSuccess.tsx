'use client';

import { motion } from 'motion/react';
import { CheckCircle2, FileText, Printer, X, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatTime, formatCurrency } from '@/lib/format';
import type { Bill } from '@/types/billing';

type BillingSuccessProps = {
    readonly bill: Bill;
    onCreateNew: () => void;
    onClose: () => void;
}

const BillingSuccess = ({ bill, onCreateNew, onClose }: BillingSuccessProps) => {
    const title = 'Bill Generated Successfully';
    const description = 'The bill has been generated and is ready to be sent to the customer.';

    // Create WhatsApp message
    const createWhatsAppMessage = () => {
        const itemsList = bill.items.map((item, idx) =>
            `${idx + 1}. ${item.description}\n   ${item.quantity} × ${formatCurrency(item.rate)} = ${formatCurrency(item.amount)}`
        ).join('\n\n');

        return `*আপনার বিল তৈরি হয়েছে!*\n` +
            `*ধন্যবাদ, আমাদের সাথে থাকার জন্য।*\n` +
            `*Graphic Zone, Cumilla*\n\n` +
            `*বিল নং:* ${bill.id} \n` +
            `*গ্রাহক:* ${bill.customerName} \n\n\n` +
            `*সেবার বিনিময়:*\n\n` +
            `*পণ্য / সেবা:*\n${itemsList} \n\n` +
            `*মোট:* ${formatCurrency(bill.total)} \n` +
            `*এডভান্স:* ${formatCurrency(bill.advance)} \n` +
            `*বাকি:* ${formatCurrency(bill.due)} \n\n` +
            `ধন্যবাদ!`;
    };

    const handlePrint = () => {
        // Load logo as data URL
        const loadLogo = async () => {
            try {
                const response = await fetch('/Logo.png');
                const blob = await response.blob();
                return new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve(reader.result);
                    reader.readAsDataURL(blob);
                });
            } catch (error) {
                console.warn('Logo not found, using placeholder');
                return null;
            }
        };

        loadLogo().then((logoDataUrl) => {
            const printWindow = window.open('', '_blank', 'width=800,height=600');
            if (!printWindow) return;

            const logoHtml = logoDataUrl
                ? `<img src="${logoDataUrl}" alt="Graphic Zone Logo" class="logo" />`
                : `<h1>🖨️ Graphic Zone</h1>`;

            const invoiceHTML = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Bill - ${bill.id}</title>
                <style>
                    @page {
                        size: A4;
                        margin: 0.5in;
                    }
                    body {
                        font-family: 'Arial', sans-serif;
                        font-size: 12px;
                        line-height: 1.4;
                        color: #333;
                        margin: 0;
                        padding: 0;
                        background: #f8f9fa;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        background: white;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                        border-radius: 8px;
                        overflow: hidden;
                    }
                    .header {
                        background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
                        color: white;
                        padding: 30px 20px;
                        text-align: center;
                        position: relative;
                    }
                    .header::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="30" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="70" r="1.5" fill="rgba(255,255,255,0.1)"/></svg>') repeat;
                        opacity: 0.3;
                    }
                    .header-content {
                        position: relative;
                        z-index: 1;
                        text-align: center;
                    }
                    .header .logo {
                        max-width: 200px;
                        max-height: 80px;
                        object-fit: contain;
                        margin-bottom: 10px;
                    }
                    .header h1 {
                        font-size: 28px;
                        font-weight: bold;
                        margin: 0 0 8px 0;
                        text-shadow: 0 1px 2px rgba(0,0,0,0.1);
                        letter-spacing: 1px;
                    }
                    .header p {
                        margin: 0;
                        font-size: 14px;
                        opacity: 0.9;
                        font-weight: 300;
                    }
                    .header .subtitle {
                        font-size: 12px;
                        margin-top: 4px;
                        font-weight: 400;
                    }

                    .invoice-title {
                        background: #f1f5f9;
                        padding: 20px;
                        text-align: center;
                        border-bottom: 2px solid #e2e8f0;
                    }
                    .invoice-title h2 {
                        font-size: 20px;
                        font-weight: bold;
                        margin: 0;
                        color: #1e293b;
                        letter-spacing: 0.5px;
                    }

                    .bill-info {
                        padding: 25px 20px;
                        background: white;
                    }
                    .info-grid {
                        display: table;
                        width: 100%;
                        border-collapse: collapse;
                    }
                    .info-row {
                        display: table-row;
                    }
                    .info-row:nth-child(even) {
                        background: #f8fafc;
                    }
                    .info-label {
                        display: table-cell;
                        padding: 12px 15px;
                        font-weight: 600;
                        color: #475569;
                        border-bottom: 1px solid #e2e8f0;
                        width: 40%;
                    }
                    .info-value {
                        display: table-cell;
                        padding: 12px 15px;
                        color: #1e293b;
                        border-bottom: 1px solid #e2e8f0;
                        font-weight: 500;
                        text-align: right;
                    }

                    .items-section {
                        padding: 25px 20px;
                        background: #fafbfc;
                    }
                    .items-header {
                        font-size: 16px;
                        font-weight: bold;
                        margin: 0 0 15px 0;
                        color: #1e293b;
                        padding-bottom: 10px;
                        border-bottom: 2px solid #ef4444;
                    }
                    .item {
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;
                        padding: 15px 0;
                        border-bottom: 1px solid #e2e8f0;
                        margin-bottom: 10px;
                    }
                    .item:last-child {
                        border-bottom: none;
                        margin-bottom: 0;
                    }
                    .item-content {
                        flex: 1;
                    }
                    .item-title {
                        font-weight: 600;
                        color: #1e293b;
                        margin-bottom: 4px;
                        font-size: 13px;
                    }
                    .item-details {
                        font-size: 11px;
                        color: #64748b;
                        font-style: italic;
                    }
                    .item-amount {
                        font-weight: bold;
                        color: #dc2626;
                        font-size: 14px;
                        text-align: right;
                        min-width: 80px;
                    }

                    .totals-section {
                        background: #f1f5f9;
                        padding: 20px;
                        border-top: 2px solid #cbd5e1;
                    }
                    .total-row {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 8px 0;
                        font-size: 13px;
                    }
                    .total-row.final {
                        border-top: 2px solid #ef4444;
                        padding-top: 15px;
                        margin-top: 10px;
                        font-size: 15px;
                        font-weight: bold;
                        color: #dc2626;
                    }
                    .total-label {
                        font-weight: 600;
                        color: #475569;
                    }
                    .total-amount {
                        font-weight: bold;
                        text-align: right;
                        min-width: 80px;
                    }

                    .footer {
                        background: #1e293b;
                        color: white;
                        padding: 20px;
                        text-align: center;
                        font-size: 12px;
                        font-weight: 300;
                    }
                    .footer-content {
                        max-width: 400px;
                        margin: 0 auto;
                    }
                    .thank-you {
                        font-size: 14px;
                        font-weight: 500;
                        margin-bottom: 5px;
                    }
                    .contact-info {
                        opacity: 0.8;
                        font-size: 11px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <div class="header-content">
                            ${logoHtml}
                            <p>Cumilla, Bangladesh</p>
                            <p class="subtitle">Professional Printing & Design Solutions</p>
                        </div>
                    </div>

                    <div class="invoice-title">
                        <h2>📄 Bill / Invoice</h2>
                    </div>

                    <div class="bill-info">
                        <div class="info-grid">
                            <div class="info-row">
                                <div class="info-label">Bill ID</div>
                                <div class="info-value">${bill.id}</div>
                            </div>
                            <div class="info-row">
                                <div class="info-label">Customer</div>
                                <div class="info-value">${bill.customerName}</div>
                            </div>
                            <div class="info-row">
                                <div class="info-label">Generated At</div>
                                <div class="info-value">${formatTime(bill.createdAt)}</div>
                            </div>
                            <div class="info-row">
                                <div class="info-label">Status</div>
                                <div class="info-value">${bill.status}</div>
                            </div>
                        </div>
                    </div>

                    <div class="items-section">
                        <h3 class="items-header">📦 Items & Services</h3>
                        ${bill.items.map((item, index) => `
                            <div class="item">
                                <div class="item-content">
                                    <div class="item-title">${index + 1}. ${item.description}</div>
                                    <div class="item-details">${item.quantity} × ${formatCurrency(item.rate)}</div>
                                </div>
                                <div class="item-amount">${formatCurrency(item.amount)}</div>
                            </div>
                        `).join('')}

                        <div class="totals-section">
                            <div class="total-row">
                                <span class="total-label">Total Amount</span>
                                <span class="total-amount">${formatCurrency(bill.total)}</span>
                            </div>
                            <div class="total-row">
                                <span class="total-label">Advance Payment</span>
                                <span class="total-amount" style="color: #059669;">-${formatCurrency(bill.advance)}</span>
                            </div>
                            <div class="total-row final">
                                <span class="total-label">Amount Due</span>
                                <span class="total-amount">${formatCurrency(bill.due)}</span>
                            </div>
                        </div>
                    </div>

                    <div class="footer">
                        <div class="footer-content">
                            <div class="thank-you">Thank you for choosing Graphic Zone!</div>
                            <div class="contact-info">We appreciate your business and look forward to serving you again.</div>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `;

            printWindow.document.write(invoiceHTML);
            printWindow.document.close();
            printWindow.focus();
            printWindow.print();
            printWindow.close();
        });
    };

    const whatsappUrl = () => {
        let phone = bill.customerPhone.replace(/[^0-9+]/g, '');
        // If phone starts with 0 (Bangladesh format), add country code
        if (phone.startsWith('0')) {
            phone = '880' + phone.substring(1);
        }
        // If phone doesn't start with + or country code, assume it's Bangladesh and add 880
        else if (!phone.startsWith('+') && !phone.startsWith('880')) {
            phone = '880' + phone;
        }
        // Remove + if present
        phone = phone.replace('+', '');
        const message = encodeURIComponent(createWhatsAppMessage());
        return `https://wa.me/${phone}?text=${message}`;
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl border border-muted shadow-lg w-full mx-auto overflow-hidden max-h-[90vh] flex flex-col"
            style={{ maxWidth: '440px' }}
        >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-success/10 to-success/20 px-6 py-8 text-center border-b border-success/20 shrink-0">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: 'spring' }}
                    className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                    <CheckCircle2 className="w-8 h-8 text-success" />
                </motion.div>
                <h2 className="text-xl font-bold text-foreground mb-2">{title}</h2>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>

            {/* Bill Details */}
            <div className="px-6 py-5 space-y-4 bg-background/50 overflow-y-auto flex-1">
                {/* Basic Info */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Bill ID</span>
                        <span className="font-mono font-medium text-foreground">
                            {bill.id}
                        </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Customer</span>
                        <span className="font-medium text-foreground">{bill.customerName}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Generated At</span>
                        <span className="font-medium text-foreground">
                            {formatTime(bill.createdAt)}
                        </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Status</span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
                            {bill.status}
                        </span>
                    </div>
                </div>

                {/* Items Breakdown */}
                <div>
                    <h3 className="text-sm font-semibold text-foreground mb-3">Items</h3>
                    <div className="space-y-3">
                        {bill.items.map((item, index) => (
                            <div key={item.id} className="text-sm">
                                <div className="flex items-start justify-between mb-1">
                                    <span className="text-foreground font-medium">
                                        {index + 1}. {item.description}
                                    </span>
                                    <span className="font-semibold text-foreground ml-2 shrink-0">
                                        {formatCurrency(item.amount)}
                                    </span>
                                </div>
                                <div className="text-xs text-muted-foreground pl-4">
                                    {item.quantity} × {formatCurrency(item.rate)}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Totals */}
                    <div className="mt-4 pt-4 border-t border-muted space-y-2">
                        <div className="flex items-center justify-between text-sm">
                            <span className="font-semibold text-foreground">Total</span>
                            <span className="font-bold text-foreground">
                                {formatCurrency(bill.total)}
                            </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Advance</span>
                            <span className="font-medium text-success">
                                {formatCurrency(bill.advance)}
                            </span>
                        </div>
                        <div className="flex items-center justify-between text-sm pt-2 border-t border-muted">
                            <span className="font-semibold text-foreground">Due</span>
                            <span className="font-bold text-primary">
                                {formatCurrency(bill.due)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="px-6 py-4 bg-white border-t border-muted flex flex-col gap-3 shrink-0">
                <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                        onClick={onCreateNew}
                        className="flex-1 bg-primary hover:bg-primary/90"
                    >
                        <FileText className="w-4 h-4" />
                        Create New Bill
                    </Button>
                    <Button
                        variant="outline"
                        onClick={handlePrint}
                        className="flex-1"
                    >
                        <Printer className="w-4 h-4" />
                        Print Bill
                    </Button>
                </div>
                <Button
                    asChild
                    className="w-full bg-success hover:bg-success/90 text-white"
                >
                    <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        Send to WhatsApp
                    </a>
                </Button>
                <Button
                    variant="outline"
                    onClick={onClose}
                    className="w-full"
                >
                    Close
                </Button>
            </div>
        </motion.div>
    );
};

export { BillingSuccess };


