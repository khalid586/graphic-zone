'use client';

import { useState, useRef, useEffect } from 'react';
import { Plus, Save, FileCheck, ChevronDown, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import BillingItemRow from './BillingItemRow';
import { MOCK_CUSTOMERS } from '@/data/customers';
import type { BillingFormData, BillingItem } from '@/types/billing';
import { cn } from '@/lib/utils';

interface BillingFormProps {
    onSubmit: (data: BillingFormData, action: 'draft' | 'generate') => void;
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
        { id: crypto.randomUUID(), description: '', price: 0 },
    ]);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

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

    // Notify parent of form changes
    const notifyChange = (name: string, address: string, itemList: BillingItem[]) => {
        if (onChange) {
            onChange({
                customerName: name,
                customerAddress: address,
                items: itemList as readonly BillingItem[],
            });
        }
    };

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
            notifyChange(customer.name, customer.address, items);
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
            notifyChange('', '', items);
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

    const handleItemChange = (id: string, field: 'description' | 'price', value: string | number) => {
        setItems((prev) => {
            const updated = prev.map((item) =>
                item.id === id ? { ...item, [field]: value } : item
            );
            notifyChange(customerName, customerAddress, updated);
            return updated;
        });
        clearItemError(id);
    };

    const handleAddItem = () => {
        setItems((prev) => {
            const updated = [...prev, { id: crypto.randomUUID(), description: '', price: 0 }];
            notifyChange(customerName, customerAddress, updated);
            return updated;
        });
    };

    const handleRemoveItem = (id: string) => {
        if (items.length > 1) {
            setItems((prev) => {
                const updated = prev.filter((item) => item.id !== id);
                notifyChange(customerName, customerAddress, updated);
                return updated;
            });
            clearItemError(id);
        }
    };

    const validate = (action: 'draft' | 'generate'): boolean => {
        const newErrors: FormErrors = {};

        // Only validate for 'generate', not for 'draft'
        if (action === 'generate') {
            if (!customerName.trim()) {
                newErrors.customerName = 'Customer name is required';
            }

            if (!customerAddress.trim()) {
                newErrors.customerAddress = 'Customer address is required';
            }

            const itemErrors: Record<string, string> = {};
            let hasItems = false;

            items.forEach((item) => {
                if (item.description.trim() && item.price > 0) {
                    hasItems = true;
                } else if (!item.description.trim()) {
                    itemErrors[item.id] = 'Item name is required';
                } else if (item.price <= 0) {
                    itemErrors[item.id] = 'Item price must be greater than 0';
                }
            });

            if (!hasItems) {
                newErrors.items = itemErrors;
            } else if (Object.keys(itemErrors).length > 0) {
                newErrors.items = itemErrors;
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmitForm = async (action: 'draft' | 'generate') => {
        if (!validate(action)) return;

        setIsSubmitting(true);

        // Filter out empty items
        const validItems = items.filter((item) => item.description.trim() && item.price > 0);

        const formData: BillingFormData = {
            customerName: customerName.trim(),
            customerAddress: customerAddress.trim(),
            items: validItems,
        };

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        onSubmit(formData, action);
        setIsSubmitting(false);
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmitForm('generate');
            }}
            className="space-y-6"
        >
            {/* Customer Name */}
            <div className="space-y-2">
                <Label htmlFor="customer-name" className="text-slate-700 font-medium">
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
                                errors.customerName && 'border-red-500'
                            )}
                            aria-invalid={!!errors.customerName}
                        />
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                    {showDropdown && filteredCustomers.length > 0 && (
                        <div className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-md shadow-lg max-h-60 overflow-auto">
                            {filteredCustomers.map((customer) => (
                                <button
                                    key={customer.id}
                                    type="button"
                                    onClick={() => handleCustomerSelect(customer.id)}
                                    className={cn(
                                        'w-full px-3 py-2 text-left text-sm hover:bg-slate-100 flex items-center justify-between',
                                        selectedCustomerId === customer.id && 'bg-slate-50'
                                    )}
                                >
                                    <span>{customer.name}</span>
                                    {selectedCustomerId === customer.id && (
                                        <Check className="w-4 h-4 text-indigo-600" />
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                    {showDropdown && searchQuery && filteredCustomers.length === 0 && (
                        <div className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-md shadow-lg p-3">
                            <p className="text-sm text-slate-500 text-center">No customers found</p>
                        </div>
                    )}
                </div>
                {errors.customerName && (
                    <p className="text-xs text-red-500 pl-1">{errors.customerName}</p>
                )}
            </div>

            {/* Customer Address */}
            <div className="space-y-2">
                <Label htmlFor="customer-address" className="text-slate-700 font-medium">
                    Customer Address *
                </Label>
                <Textarea
                    id="customer-address"
                    placeholder="Address will auto-populate when you select a customer"
                    value={customerAddress}
                    readOnly
                    className={cn(
                        'min-h-[100px] bg-slate-50 cursor-not-allowed',
                        errors.customerAddress && 'border-red-500'
                    )}
                    aria-invalid={!!errors.customerAddress}
                />
                {errors.customerAddress && (
                    <p className="text-xs text-red-500 pl-1">{errors.customerAddress}</p>
                )}
            </div>

            {/* Items Section */}
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                        <Label className="text-slate-700 font-medium">Items & Pricing *</Label>
                        <p className="text-xs text-slate-500">Enter item details and set prices</p>
                    </div>
                    <span className="text-xs text-slate-500">{items.length} item(s)</span>
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
                                price={item.price}
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
                    className="w-full border-dashed hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700"
                >
                    <Plus className="w-4 h-4" />
                    Add Item
                </Button>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleSubmitForm('draft')}
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-none sm:w-auto"
                >
                    <Save className="w-4 h-4" />
                    Save Draft
                </Button>
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700"
                >
                    <FileCheck className="w-4 h-4" />
                    {isSubmitting ? 'Generating...' : 'Generate Bill'}
                </Button>
            </div>
        </form>
    );
};

export default BillingForm;
