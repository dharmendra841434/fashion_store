import twilio from "twilio";
import { generateOTP } from "../../utils/helper";
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { phone, countryCode } = req.body;
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

      return res.status(200).json({
        data: {
          phone: phone,
          otp: otp,
          code: countryCode,
        },
        status: true,
        statusCode: 200,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        status: false,
        response: error.message || "Internal Server Error",
      });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
