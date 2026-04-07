import { formatTime, formatCurrency } from '@/lib/format';
import type { Bill } from '@/types/billing';

interface PrintTemplateProps {
    bill: Bill;
    logoDataUrl: string | null;
}

export const generatePrintHTML = ({ bill, logoDataUrl }: PrintTemplateProps): string => {
    const logoHtml = logoDataUrl
        ? `<img src="${logoDataUrl}" alt="Graphic Zone Logo" class="logo" />`
        : `<h1>🖨️ Graphic Zone</h1>`;

    // Generate QR code URL using external service
    const websiteUrl = 'https://graphiczonebd.com';
    const encodedUrl = encodeURIComponent(websiteUrl);
    const qrCodeUrl = `https://quickchart.io/qr?text=${encodedUrl}&size=100&format=png`;

    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                    width: 100%;
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
                    padding: 15px 20px 15px 20px;
                    position: relative;
                    text-align: center;
                    min-height: 110px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
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
                    flex: none;
                }
                .header-qr {
                    position: absolute;
                    right: 15px;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .header-qr img {
                    width: 95px;
                    height: 95px;
                    background: white;
                    padding: 4px;
                    border-radius: 4px;
                    border: 2px solid #fff;
                }
                .header .logo {
                    max-width: 200px;
                    max-height: 80px;
                    object-fit: contain;
                    margin-bottom: 10px;
                }
                .header h1 {
                    font-size: 20px;
                    font-weight: bold;
                    margin: 0 0 4px 0;
                    text-shadow: 0 1px 2px rgba(0,0,0,0.1);
                    letter-spacing: 1px;
                }
                .header p {
                    margin: 0;
                    font-size: 14px;
                    opacity: 0.9;
                    font-weight: 300;
                    color: #000000;
                }
                .header .subtitle {
                    font-size: 12px;
                    margin-top: 4px;
                    font-weight: 400;
                }

                .invoice-title {
                    background: #f1f5f9;
                    padding: 10px 20px;
                    text-align: center;
                    border-bottom: 2px solid #e2e8f0;
                }
                .invoice-title h2 {
                    font-size: 16px;
                    font-weight: bold;
                    margin: 0;
                    color: #1e293b;
                    letter-spacing: 0.5px;
                }

                .bill-info {
                    padding: 12px 20px;
                    background: white;
                }
                .info-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px;
                }
                .info-row {
                    display: flex;
                    flex-direction: row;
                    align-items: baseline;
                    gap: 8px;
                }
                .info-label {
                    font-weight: 600;
                    color: #475569;
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    min-width: 80px;
                }
                .info-value {
                    color: #1e293b;
                    font-weight: 500;
                    font-size: 13px;
                }

                .items-section {
                    padding: 30px 20px;
                    background: #fafbfc;
                    flex-grow: 1;
                    min-height: 300px;
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
                    align-items: center;
                    padding: 12px 0;
                    border-bottom: 1px solid #e2e8f0;
                    margin-bottom: 8px;
                    gap: 15px;
                }
                .item:last-child {
                    border-bottom: none;
                    margin-bottom: 0;
                }
                .item-title {
                    font-weight: 600;
                    color: #1e293b;
                    font-size: 13px;
                    flex: 1;
                }
                .item-details {
                    font-size: 11px;
                    color: #64748b;
                    font-weight: 500;
                    white-space: nowrap;
                    text-align: center;
                    min-width: 80px;
                }
                .item-amount {
                    font-weight: bold;
                    color: #dc2626;
                    font-size: 14px;
                    text-align: right;
                    white-space: nowrap;
                    min-width: 70px;
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
                    padding: 15px 20px;
                    text-align: center;
                    font-size: 11px;
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
                        <p>Kandirpar, Cumilla, Bangladesh</p>
                        <p class="subtitle">01312594292 | 01912594292</p>
                    </div>
                    <div class="header-qr">
                        <img src="${qrCodeUrl}" alt="Visit Graphic Zone" />
                    </div>
                </div>

                <div class="invoice-title">
                    <h2>📄 Bill / Invoice</h2>
                </div>

                <div class="bill-info">
                    <div class="info-grid">
                        <div class="info-row">
                            <div class="info-label">Customer ID</div>
                            <div class="info-value">${bill.customerId || 'N/A'}</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label">Date of Billing</div>
                            <div class="info-value">${new Date(bill.createdAt).toLocaleDateString('en-GB')}</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label">Customer Name</div>
                            <div class="info-value">${bill.customerName}</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label">Phone</div>
                            <div class="info-value">${bill.customerPhone || 'N/A'}</div>
                        </div>
                    </div>
                </div>

                <div class="items-section">
                    <h3 class="items-header">📦 Items & Services</h3>
                    ${bill.items.map((item, index) => `
                        <div class="item">
                            <div class="item-title">${index + 1}. ${item.description.replace(/\n/g, '<br>')}</div>
                            <div class="item-details">${item.quantity} × ${formatCurrency(item.rate)}</div>
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
};