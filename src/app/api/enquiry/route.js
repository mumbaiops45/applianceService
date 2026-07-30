// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const body = await req.json();

//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT),
//       secure: false,
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: `"Customer Care Website" <${process.env.SMTP_USER}>`,
//       to: process.env.ADMIN_EMAIL,
//       subject: "New Customer Enquiry",
//       html: `
//         <h2>New Customer Enquiry</h2>

//         <table border="1" cellpadding="10" cellspacing="0">
//           <tr>
//             <td><b>Name</b></td>
//             <td>${body.name}</td>
//           </tr>

//           <tr>
//             <td><b>Service</b></td>
//             <td>${body.service}</td>
//           </tr>

//           <tr>
//             <td><b>Phone</b></td>
//             <td>${body.phone}</td>
//           </tr>

//           <tr>
//             <td><b>Email</b></td>
//             <td>${body.email}</td>
//           </tr>

//           <tr>
//             <td><b>Address</b></td>
//             <td>${body.address}</td>
//           </tr>

//           <tr>
//             <td><b>Pincode</b></td>
//             <td>${body.pincode}</td>
//           </tr>

//           <tr>
//             <td><b>City</b></td>
//             <td>${body.city}</td>
//           </tr>
//         </table>
//       `,
//     });

//     return NextResponse.json({
//       success: true,
//       message: "Email sent successfully",
//     });

//   } catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify SMTP connection
    await transporter.verify();

    await transporter.sendMail({
      from: `"Appliance Care" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `🔔 New ${body.service} Service Enquiry`,

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

<tr>
<td style="font-weight:bold;">🔖 Brand</td>
<td>${body.brand}</td>
</tr>

<tr style="background:#fafafa;">
<td style="font-weight:bold;">📞 Phone</td>
<td>${body.phone}</td>
</tr>

<tr>
<td style="font-weight:bold;">📧 Email</td>
<td>${body.email}</td>
</tr>

<tr style="background:#fafafa;">
<td style="font-weight:bold;">🏠 Address</td>
<td>${body.address}</td>
</tr>

<tr>
<td style="font-weight:bold;">📍 Pincode</td>
<td>${body.pincode}</td>
</tr>

<tr style="background:#fafafa;">
<td style="font-weight:bold;">🏙 City</td>
<td>${body.city}</td>
</tr>
 <tr style="background:#fafafa;">
          <td style="font-weight:bold;">📝 Issue Description</td>
          <td>${body.message}</td>
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

    console.error("Email Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}