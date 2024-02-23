import { User } from "../../models/user.model";
import DataBaseConnection from "../../utils/connectDB";

export default async function handler(req, res) {
  if (req.method === "POST") {
    DataBaseConnection();

    try {
      const { phone, countryCode } = req.body;
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
        const cookieValue = `accessToken=${accessToken}; Path=/; HttpOnly; Max-Age=${
          24 * 60 * 60
        }; SameSite=Strict`;
        res.setHeader("Set-Cookie", cookieValue);
        return res.status(200).json({
          status: true,
          statusCode: 200,
          data: user2,
          accessToken: accessToken,
        });
      }
      const accessToken2 = user.generateAccessToken();
      const cookieValue = `accessToken=${accessToken2}; Path=/; HttpOnly; Max-Age=${
        24 * 60 * 60
      }; SameSite=Strict`;
      res.setHeader("Set-Cookie", cookieValue);
      return res.status(200).json({
        status: true,
        statusCode: 200,
        data: user,
        accessToken: accessToken2,
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
