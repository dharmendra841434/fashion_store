import { generateOTP } from "@/utils/helper";
import twilio from "twilio";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { phone, countryCode } = reqBody;
    const client = twilio(
      `${process.env.NEXT_PUBLIC_ACCOUNT_SID}`,
      `${process.env.NEXT_PUBLIC_AUTH_TOKEN}`
    );

    //console.log(client, "this is client");
    const otp = generateOTP();
    const smsStatus = await client.messages.create({
      body: `Your Dev Trendy Verification code is :${otp}`,
      from: "+17754039048",
      to: `${countryCode}${phone}`,
    });

    // const response = NextResponse.next();

    return NextResponse.json(
      {
        data: {
          phone: phone,
          otp: otp,
          code: countryCode,
        },
        status: true,
        statusCode: 200,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: false,
        response: error.message || "Internal Server Error",
      },
      { status: error.status || 500 }
    );
  }
}
