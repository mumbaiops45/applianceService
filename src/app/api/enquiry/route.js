import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // 1. Parse the request body
    const body = await req.json();

    // 2. Validate required fields
    const requiredFields = ['name', 'phone', 'email', 'service', 'address', 'pincode', 'city'];
    const missingFields = requiredFields.filter(field => !body[field] || body[field].trim() === '');
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          message: `Missing required fields: ${missingFields.join(', ')}` 
        },
        { status: 400 }
      );
    }

    // 3. Validate environment variables
    const requiredEnv = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'ADMIN_EMAIL'];
    const missingEnv = requiredEnv.filter(key => !process.env[key]);
    
    if (missingEnv.length > 0) {
      console.error('Missing environment variables:', missingEnv);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Server configuration error. Please contact support.' 
        },
        { status: 500 }
      );
    }

    // 4. Create transporter with proper configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === '465', // true for port 465, false for others
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // For testing purposes
      },
      connectionTimeout: 10000, // 10 seconds timeout
    });

    // 5. Verify SMTP connection
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP Verification Error:', verifyError);
      // Continue anyway, the sendMail will fail if connection is bad
    }

    // 6. Send email
    await transporter.sendMail({
      from: `"Appliance Care" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `🔔 New ${body.service} Service Enquiry from ${body.name}`,

      html: `
<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>New Enquiry</title>
</head>

<body style="margin:0;padding:0;background:#f4f6fb;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:40px 15px;">

<tr>

<td align="center">

<table width="700" cellpadding="0" cellspacing="0"
style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 35px rgba(0,0,0,.08);">

<!-- Header -->

<tr>

<td
style="background:linear-gradient(135deg,#d6001c,#ff3b3f);padding:40px;text-align:center;">

<h1 style="margin:0;color:#ffffff;font-size:34px;">
   Appliance Service
</h1>

<p style="margin-top:12px;color:#ffe7e7;font-size:17px;">
New Customer Service Request
</p>

</td>

</tr>

<!-- Body -->

<tr>

<td style="padding:35px;">

<h2 style="margin-top:0;color:#222;">
Hello Team,
</h2>

<p style="font-size:15px;color:#666;line-height:28px;">
A customer has submitted a new enquiry from the website.
Please contact the customer as soon as possible.
</p>

<table width="100%" cellpadding="12" cellspacing="0"
style="border-collapse:collapse;margin-top:25px;">

<tr style="background:#fafafa;">
<td style="font-weight:bold;width:220px;">👤 Customer Name</td>
<td>${body.name}</td>
</tr>

<tr>
<td style="font-weight:bold;">🛠 Service</td>
<td>${body.service}</td>
</tr>

<tr style="background:#fafafa;">
<td style="font-weight:bold;">🔖 Brand</td>
<td>${body.brand || 'Not specified'}</td>
</tr>

<tr>
<td style="font-weight:bold;">📞 Phone</td>
<td><a href="tel:${body.phone}" style="color:#d6001c;text-decoration:none;">${body.phone}</a></td>
</tr>

<tr style="background:#fafafa;">
<td style="font-weight:bold;">📧 Email</td>
<td><a href="mailto:${body.email}" style="color:#d6001c;text-decoration:none;">${body.email}</a></td>
</tr>

<tr>
<td style="font-weight:bold;">🏠 Address</td>
<td>${body.address}</td>
</tr>

<tr style="background:#fafafa;">
<td style="font-weight:bold;">📍 Pincode</td>
<td>${body.pincode}</td>
</tr>

<tr>
<td style="font-weight:bold;">🏙 City</td>
<td>${body.city}</td>
</tr>

<tr style="background:#fafafa;">
<td style="font-weight:bold;">📝 Issue Description</td>
<td>${body.message || 'Not provided'}</td>
</tr>

<tr>
<td style="font-weight:bold;">📅 Date & Time</td>
<td>${new Date().toLocaleString("en-IN", {
        dateStyle: "full",
        timeStyle: "short",
      })}</td>
</tr>

</table>

<!-- Action Box -->

<div
style="margin-top:35px;background:#fff4f4;border-left:6px solid #d6001c;padding:20px;border-radius:8px;">

<h3 style="margin-top:0;color:#d6001c;">
⚡ Immediate Action Required
</h3>

<p style="margin-bottom:0;color:#666;line-height:26px;">
Please contact this customer immediately and schedule the requested appliance service.
</p>

</div>

<!-- Quick Call Button -->

<div style="text-align:center;margin-top:40px;">

<a href="tel:${body.phone}"
style="background:#d6001c;color:#ffffff;text-decoration:none;padding:14px 35px;border-radius:40px;font-weight:bold;font-size:16px;display:inline-block;">
📞 Call Customer
</a>

</div>

</td>

</tr>

<!-- Footer -->

<tr>

<td
style="background:#111827;padding:35px;text-align:center;">

<h3 style="margin:0;color:#ffffff;">
Appliance Care
</h3>

<p style="margin-top:10px;color:#cfcfcf;">
Professional Home Appliance Repair Services
</p>

<p style="margin-top:20px;font-size:13px;color:#8b8b8b;">
This email was automatically generated from your website enquiry form.
</p>

<p style="margin-top:5px;font-size:13px;color:#8b8b8b;">
Please do not reply to this email.
</p>

</td>

</tr>

</table>

</td>

</tr>

</table>

</body>

</html>
`,
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully. Email sent.",
    });

  } catch (error) {
    console.error("Email Error Details:", {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      stack: error.stack,
    });

    // User-friendly error messages
    let userMessage = "Failed to submit enquiry. Please try again later.";
    
    if (error.code === 'EAUTH') {
      userMessage = "Email authentication failed. Please check your email credentials.";
    } else if (error.code === 'ECONNECTION' || error.code === 'ESOCKET') {
      userMessage = "Unable to connect to email server. Please try again later.";
    } else if (error.code === 'EENVELOPE') {
      userMessage = "Invalid email address format.";
    }

    return NextResponse.json(
      {
        success: false,
        message: userMessage,
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}