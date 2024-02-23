import jwt from "jsonwebtoken";
import DataBaseConnection from "../../../utils/connectDB";
import { User } from "../../../models/user.model";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      DataBaseConnection();
      const { token } = req.query;
      console.log(token, "token");

      const decode = jwt.decode(token);
      const id = decode?._id;
      const loggedInUser = await User.findById(id);

      if (!loggedInUser) {
        return res.status(404).send({
          error: true,
          message: "User does not exist",
        });
      }

      return res.status(200).send({
        user: loggedInUser,
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
