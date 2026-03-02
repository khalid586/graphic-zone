import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { companyName, address, mobile, workDescription, quantity } = body;

        // Validate required fields
        if (!companyName || !address || !mobile || !workDescription || !quantity) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Send email using Resend
        const data = await resend.emails.send({
            from: 'Graphic Zone <onboarding@resend.dev>', // You'll need to verify your domain to use a custom email
            to: ['khalidcomilla58@gmail.com'],
            subject: `নতুন কোটেশন অনুরোধ - ${companyName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #E31837; margin-bottom: 20px;">নতুন কোটেশন অনুরোধ</h2>
                    
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                        <h3 style="margin-top: 0; color: #333;">প্রতিষ্ঠানের তথ্য</h3>
                        <p><strong>প্রতিষ্ঠানের নাম:</strong> ${companyName}</p>
                        <p><strong>ঠিকানা:</strong> ${address}</p>
                        <p><strong>মোবাইল নম্বর:</strong> ${mobile}</p>
                        <p><strong>পরিমাণ:</strong> ${quantity}</p>
                    </div>
                    
                    <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                        <h3 style="margin-top: 0; color: #333;">কাজের বিবরণ</h3>
                        <p style="white-space: pre-wrap;">${workDescription}</p>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 15px; background-color: #E31837; color: white; border-radius: 10px; text-align: center;">
                        <p style="margin: 0;">অনুগ্রহ করে শীঘ্রই গ্রাহকের সাথে যোগাযোগ করুন</p>
                    </div>
                </div>
            `,
        });

        return NextResponse.json(
            { message: 'Email sent successfully', data },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
