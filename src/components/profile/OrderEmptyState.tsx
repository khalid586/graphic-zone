import { FileText } from 'lucide-react';

const OrderEmptyState = () => (
    <div className="flex flex-col items-center justify-center py-16 px-6">
        <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
            <FileText className="w-8 h-8 text-muted-foreground" />
        </div>
        <p className="text-sm font-medium text-muted-foreground">No orders found</p>
        <p className="text-xs text-muted-foreground mt-1">Try adjusting your search or filters.</p>
    </div>
);

export { OrderEmptyState };

