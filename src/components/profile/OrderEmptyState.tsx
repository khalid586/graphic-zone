import { FileText } from 'lucide-react';

const OrderEmptyState = () => (
    <div className="flex flex-col items-center justify-center py-16 px-6">
        <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
            <FileText className="w-8 h-8 text-slate-400" />
        </div>
        <p className="text-sm font-medium text-slate-600">কোনো অর্ডার পাওয়া যায়নি</p>
        <p className="text-xs text-slate-400 mt-1">আপনার সার্চ বা ফিল্টার পরিবর্তন করে দেখুন।</p>
    </div>
);

export default OrderEmptyState;
