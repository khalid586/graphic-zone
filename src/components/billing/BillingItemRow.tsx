'use client';

import { X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { formatCurrency } from '@/lib/format';

type BillingItemRowProps = {
    readonly id: string;
    readonly description: string;
    readonly quantity: number;
    readonly rate: number;
    readonly amount: number;
    readonly error?: string;
    readonly canRemove: boolean;
    readonly showLabels?: boolean;
    onChange: (id: string, field: 'description' | 'quantity' | 'rate', value: string | number) => void;
    onRemove: (id: string) => void;
}

const BillingItemRow = ({
    id,
    description,
    quantity,
    rate,
    amount,
    error,
    canRemove,
    showLabels = false,
    onChange,
    onRemove,
}: BillingItemRowProps) => {
    return (
        <div className="space-y-2">
            {/* Labels Row - only show for first item on desktop */}
            {showLabels && (
                <div className="hidden sm:flex gap-2 items-center">
                    <div className="flex-1">
                        <label className="text-xs font-medium text-muted-foreground pl-1">
                            Description
                        </label>
                    </div>
                    <div className="w-20 sm:w-24">
                        <label className="text-xs font-medium text-muted-foreground pl-1">
                            Quantity
                        </label>
                    </div>
                    <div className="w-24 sm:w-28">
                        <label className="text-xs font-medium text-muted-foreground pl-1">
                            Rate (৳)
                        </label>
                    </div>
                    <div className="w-24 sm:w-32">
                        <label className="text-xs font-medium text-muted-foreground pl-1">
                            Amount (৳)
                        </label>
                    </div>
                    <div className="w-9" />
                </div>
            )}

            {/* Mobile Layout */}
            <div className="block sm:hidden space-y-3 p-3 border border-muted rounded-lg bg-background/50">
                <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground pl-1">
                        Description
                    </label>
                    <Input
                        type="text"
                        placeholder="e.g., Business Cards - Matte Finish"
                        value={description}
                        onChange={(e) => onChange(id, 'description', e.target.value)}
                        className={cn(
                            error && 'border-destructive focus-visible:ring-destructive/20'
                        )}
                        aria-invalid={!!error}
                    />
                    {error && <p className="text-xs text-destructive pl-1">{error}</p>}
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                        <label className="text-xs font-medium text-muted-foreground pl-1">
                            Quantity
                        </label>
                        <Input
                            type="number"
                            placeholder="1"
                            value={quantity || ''}
                            onChange={(e) => onChange(id, 'quantity', parseInt(e.target.value) || 0)}
                            min="0"
                            step="1"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-xs font-medium text-muted-foreground pl-1">
                            Rate (৳)
                        </label>
                        <Input
                            type="number"
                            placeholder="0.00"
                            value={rate || ''}
                            onChange={(e) => onChange(id, 'rate', parseFloat(e.target.value) || 0)}
                            min="0"
                            step="0.01"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex-1 space-y-1.5">
                        <label className="text-xs font-medium text-muted-foreground pl-1">
                            Amount (৳)
                        </label>
                        <Input
                            type="text"
                            value={formatCurrency(amount)}
                            readOnly
                            className="bg-muted/50 cursor-not-allowed"
                            tabIndex={-1}
                        />
                    </div>
                    {canRemove && (
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => onRemove(id)}
                            className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 shrink-0 ml-2 mt-6"
                            title="Remove item"
                        >
                            <X className="w-4 h-4" />
                        </Button>
                    )}
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden sm:flex gap-2 items-start">
                <div className="flex-1 space-y-1.5">
                    <Input
                        type="text"
                        placeholder="e.g., Business Cards - Matte Finish"
                        value={description}
                        onChange={(e) => onChange(id, 'description', e.target.value)}
                        className={cn(
                            error && 'border-destructive focus-visible:ring-destructive/20'
                        )}
                        aria-invalid={!!error}
                    />
                    {error && <p className="text-xs text-destructive pl-1">{error}</p>}
                </div>
                <div className="w-20 sm:w-24 space-y-1.5">
                    <Input
                        type="number"
                        placeholder="1"
                        value={quantity || ''}
                        onChange={(e) => onChange(id, 'quantity', parseInt(e.target.value) || 0)}
                        min="0"
                        step="1"
                    />
                </div>
                <div className="w-24 sm:w-28 space-y-1.5">
                    <Input
                        type="number"
                        placeholder="0.00"
                        value={rate || ''}
                        onChange={(e) => onChange(id, 'rate', parseFloat(e.target.value) || 0)}
                        min="0"
                        step="0.01"
                    />
                </div>
                <div className="w-24 sm:w-32 space-y-1.5">
                    <Input
                        type="text"
                        value={formatCurrency(amount)}
                        readOnly
                        className="bg-muted/50 cursor-not-allowed"
                        tabIndex={-1}
                    />
                </div>
                {canRemove ? (
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => onRemove(id)}
                        className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 shrink-0 mt-0"
                        title="Remove item"
                    >
                        <X className="w-4 h-4" />
                    </Button>
                ) : (
                    <div className="w-9" />
                )}
            </div>
        </div>
    );
};

export { BillingItemRow };


