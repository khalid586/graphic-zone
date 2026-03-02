'use client';

import { useState, useRef, useEffect } from 'react';
import { Plus, FileCheck, ChevronDown, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { BillingItemRow } from './BillingItemRow';
import { MOCK_CUSTOMERS } from '@/data/customers';
import type { BillingFormData, BillingItem } from '@/types/billing';
import { cn } from '@/lib/utils';
import { formatCurrency } from '@/lib/format';

type BillingFormProps = {
    onSubmit: (data: BillingFormData) => void;
    onChange?: (data: BillingFormData) => void;
}

interface FormErrors {
    customerName?: string;
    customerAddress?: string;
    items?: Record<string, string>;
}

const BillingForm = ({ onSubmit, onChange }: BillingFormProps) => {
    const [customerName, setCustomerName] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [selectedCustomerId, setSelectedCustomerId] = useState<string>('');
    const [searchQuery, setSearchQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [items, setItems] = useState<BillingItem[]>([
        { id: crypto.randomUUID(), description: '', quantity: 1, rate: 0, amount: 0 },
    ]);
    const [advance, setAdvance] = useState(0);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const onChangeRef = useRef(onChange);

    // Keep the onChange ref up to date
    useEffect(() => {
        onChangeRef.current = onChange;
    }, [onChange]);

    // Filter customers based on search query
    const filteredCustomers = MOCK_CUSTOMERS.filter((customer) =>
        customer.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Notify parent of form changes whenever relevant state changes
    useEffect(() => {
        if (onChangeRef.current) {
            onChangeRef.current({
                customerName,
                customerAddress,
                items: items as readonly BillingItem[],
                advance,
            });
        }
    }, [customerName, customerAddress, items, advance]);

    const clearFieldError = (field: keyof FormErrors) => {
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const handleCustomerSelect = (customerId: string) => {
        const customer = MOCK_CUSTOMERS.find((c) => c.id === customerId);
        if (customer) {
            setSelectedCustomerId(customerId);
            setCustomerName(customer.name);
            setCustomerAddress(customer.address);
            setSearchQuery(customer.name);
            setShowDropdown(false);
            clearFieldError('customerName');
            clearFieldError('customerAddress');
        }
    };

    const handleSearchChange = (value: string) => {
        setSearchQuery(value);
        setShowDropdown(true);
        // Clear selection if search changes
        if (value !== customerName) {
            setSelectedCustomerId('');
            setCustomerName('');
            setCustomerAddress('');
        }
    };

    const clearItemError = (itemId: string) => {
        if (errors.items?.[itemId]) {
            setErrors((prev) => {
                const newItems = { ...prev.items };
                delete newItems[itemId];
                return {
                    ...prev,
                    items: Object.keys(newItems).length > 0 ? newItems : undefined,
                };
            });
        }
    };

    const handleItemChange = (id: string, field: 'description' | 'quantity' | 'rate', value: string | number) => {
        setItems((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    const updated = { ...item, [field]: value };
                    // Recalculate amount when quantity or rate changes
                    if (field === 'quantity' || field === 'rate') {
                        const qty = field === 'quantity' ? Number(value) : item.quantity;
                        const rt = field === 'rate' ? Number(value) : item.rate;
                        updated.amount = qty * rt;
                    }
                    return updated;
                }
                return item;
            })
        );
        clearItemError(id);
    };

    const handleAddItem = () => {
        setItems((prev) => [...prev, { id: crypto.randomUUID(), description: '', quantity: 1, rate: 0, amount: 0 }]);
    };

    const handleRemoveItem = (id: string) => {
        if (items.length > 1) {
            setItems((prev) => prev.filter((item) => item.id !== id));
            clearItemError(id);
        }
    };

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!customerName.trim()) {
            newErrors.customerName = 'Customer name is required';
        }

        if (!customerAddress.trim()) {
            newErrors.customerAddress = 'Customer address is required';
        }

        const itemErrors: Record<string, string> = {};
        let hasItems = false;

        items.forEach((item) => {
            if (item.description.trim() && item.quantity > 0 && item.rate > 0) {
                hasItems = true;
            } else if (!item.description.trim()) {
                itemErrors[item.id] = 'Item description is required';
            } else if (item.quantity <= 0) {
                itemErrors[item.id] = 'Quantity must be greater than 0';
            } else if (item.rate <= 0) {
                itemErrors[item.id] = 'Rate must be greater than 0';
            }
        });

        if (!hasItems) {
            newErrors.items = itemErrors;
        } else if (Object.keys(itemErrors).length > 0) {
            newErrors.items = itemErrors;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmitForm = async () => {
        if (!validate()) return;

        setIsSubmitting(true);

        // Filter out empty items
        const validItems = items.filter((item) => item.description.trim() && item.quantity > 0 && item.rate > 0);

        const formData: BillingFormData = {
            customerName: customerName.trim(),
            customerAddress: customerAddress.trim(),
            items: validItems,
            advance,
        };

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        onSubmit(formData);
        setIsSubmitting(false);
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmitForm();
            }}
            className="space-y-6"
        >
            {/* Customer Name */}
            <div className="space-y-2">
                <Label htmlFor="customer-name" className="text-foreground font-medium">
                    Customer Name *
                </Label>
                <div className="relative" ref={dropdownRef}>
                    <div className="relative">
                        <Input
                            id="customer-name"
                            type="text"
                            placeholder="Search or select a customer"
                            value={searchQuery}
                            onChange={(e) => handleSearchChange(e.target.value)}
                            onFocus={() => setShowDropdown(true)}
                            className={cn(
                                'pr-10',
                                errors.customerName && 'border-destructive'
                            )}
                            aria-invalid={!!errors.customerName}
                        />
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    </div>
                    {showDropdown && filteredCustomers.length > 0 && (
                        <div className="absolute z-50 w-full mt-1 bg-white border border-muted rounded-md shadow-lg max-h-60 overflow-auto">
                            {filteredCustomers.map((customer) => (
                                <button
                                    key={customer.id}
                                    type="button"
                                    onClick={() => handleCustomerSelect(customer.id)}
                                    className={cn(
                                        'w-full px-3 py-2 text-left text-sm hover:bg-background flex items-center justify-between',
                                        selectedCustomerId === customer.id && 'bg-background/50'
                                    )}
                                >
                                    <span>{customer.name}</span>
                                    {selectedCustomerId === customer.id && (
                                        <Check className="w-4 h-4 text-primary" />
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                    {showDropdown && searchQuery && filteredCustomers.length === 0 && (
                        <div className="absolute z-50 w-full mt-1 bg-white border border-muted rounded-md shadow-lg p-3">
                            <p className="text-sm text-muted-foreground text-center">No customers found</p>
                        </div>
                    )}
                </div>
                {errors.customerName && (
                    <p className="text-xs text-destructive pl-1">{errors.customerName}</p>
                )}
            </div>

            {/* Customer Address */}
            <div className="space-y-2">
                <Label htmlFor="customer-address" className="text-foreground font-medium">
                    Customer Address *
                </Label>
                <Textarea
                    id="customer-address"
                    placeholder="Address will auto-populate when you select a customer"
                    value={customerAddress}
                    readOnly
                    className={cn(
                        'min-h-[100px] bg-background/50 cursor-not-allowed',
                        errors.customerAddress && 'border-destructive'
                    )}
                    aria-invalid={!!errors.customerAddress}
                />
                {errors.customerAddress && (
                    <p className="text-xs text-destructive pl-1">{errors.customerAddress}</p>
                )}
            </div>

            {/* Items Section */}
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                        <Label className="text-foreground font-medium">Items & Pricing *</Label>
                        <p className="text-xs text-muted-foreground">Enter item details, quantity and rates</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{items.length} item(s)</span>
                </div>

                <div className="space-y-3">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <BillingItemRow
                                id={item.id}
                                description={item.description}
                                quantity={item.quantity}
                                rate={item.rate}
                                amount={item.amount}
                                error={errors.items?.[item.id]}
                                canRemove={items.length > 1}
                                showLabels={index === 0}
                                onChange={handleItemChange}
                                onRemove={handleRemoveItem}
                            />
                        </motion.div>
                    ))}
                </div>

                <Button
                    type="button"
                    variant="outline"
                    onClick={handleAddItem}
                    className="w-full border-dashed hover:border-primary hover:bg-primary/10 hover:text-primary"
                >
                    <Plus className="w-4 h-4" />
                    Add Item
                </Button>
            </div>

            {/* Totals Section */}
            <div className="space-y-4 pt-4 border-t border-muted">
                <div className="bg-primary/5 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">Total:</span>
                        <span className="text-lg font-bold text-foreground">
                            {formatCurrency(items.reduce((sum, item) => sum + item.amount, 0))}
                        </span>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <Label htmlFor="advance" className="text-sm font-medium text-foreground">Advance:</Label>
                        <Input
                            id="advance"
                            type="number"
                            placeholder="0.00"
                            value={advance || ''}
                            onChange={(e) => setAdvance(parseFloat(e.target.value) || 0)}
                            className="w-40 text-right"
                            min="0"
                            step="0.01"
                        />
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-primary/20">
                        <span className="text-sm font-semibold text-foreground">Due:</span>
                        <span className="text-xl font-bold text-primary">
                            {formatCurrency(items.reduce((sum, item) => sum + item.amount, 0) - advance)}
                        </span>
                    </div>
                </div>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-muted">
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90"
                >
                    <FileCheck className="w-4 h-4" />
                    {isSubmitting ? 'Generating...' : 'Generate Invoice'}
                </Button>
            </div>
        </form>
    );
};

export { BillingForm };



