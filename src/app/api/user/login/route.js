import { NextResponse } from "next/server";
import DataBaseConnection from "@/utils/connectDB";
import { User } from "@/utils/models/user.model.js";

DataBaseConnection();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { phone, countryCode } = reqBody;
    const user = await User.findOne({ phone: phone });
    //console.log(user, "userdata");
    if (!user) {
      const instance = await User.create({
        firstName: "dev-Trendy",
        lastName: "customer",
        phone: phone,
        gender: "",
        countryCode: countryCode,
        cartItems: [],
        // email: `user@email${Math.floor(Math.random() * 90) + 10}`,
      });
      const user2 = await User.findOne({ phone: phone });
      const accessToken = user2.generateAccessToken();
      const response = NextResponse.status(200).json({
        status: true,
        statusCode: 200,
        data: user2,
        accessToken: accessToken,
      });

      response.cookies.set("accessToken", accessToken, {
        httpOnly: true,
        maxAge: 60 * 24 * 30,
        SameSite: "Strict",
      });

      return response;
    }
    const accessToken2 = user.generateAccessToken();
    const response = NextResponse.json(
      {
        status: true,
        statusCode: 200,
        data: user,
        accessToken: accessToken2,
      },
      { status: 200 }
    );

    response.cookies.set("accessToken", accessToken2, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60,
      SameSite: "Strict",
    });
    return response;
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
