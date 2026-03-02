'use client';

import { X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type BillingItemRowProps = {
    readonly id: string;
    readonly description: string;
    readonly price: number;
    readonly error?: string;
    readonly priceError?: string;
    readonly canRemove: boolean;
    readonly showLabels?: boolean;
    onChange: (id: string, field: 'description' | 'price', value: string | number) => void;
    onRemove: (id: string) => void;
}

const BillingItemRow = ({
    id,
    description,
    price,
    error,
    priceError,
    canRemove,
    showLabels = false,
    onChange,
    onRemove,
}: BillingItemRowProps) => {
    return (
        <div className="space-y-2">
            {/* Labels Row - only show for first item */}
            {showLabels && (
                <div className="flex gap-2 items-center">
                    <div className="flex-1">
                        <label className="text-xs font-medium text-muted-foreground pl-1">
                            Item Name
                        </label>
                    </div>
                    <div className="w-32">
                        <label className="text-xs font-medium text-muted-foreground pl-1">
                            Price (৳)
                        </label>
                    </div>
                    <div className="w-9" />
                </div>
            )}

            {/* Inputs Row */}
            <div className="flex gap-2 items-start">
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
                <div className="w-32 space-y-1.5">
                    <Input
                        type="number"
                        placeholder="0.00"
                        value={price || ''}
                        onChange={(e) => onChange(id, 'price', parseFloat(e.target.value) || 0)}
                        className={cn(
                            priceError && 'border-destructive focus-visible:ring-destructive/20'
                        )}
                        aria-invalid={!!priceError}
                        min="0"
                        step="0.01"
                    />
                    {priceError && <p className="text-xs text-destructive pl-1">{priceError}</p>}
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


