import { formatCurrency } from '@/lib/format';
import type { Bill } from '@/types/billing';

export const createWhatsAppMessage = (bill: Bill): string => {
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

export const createWhatsAppUrl = (bill: Bill): string => {
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
    const message = encodeURIComponent(createWhatsAppMessage(bill));
    return `https://wa.me/${phone}?text=${message}`;
};