import { NextResponse } from "next/server";

export async function DELETE(request) {
  try {
    const response = NextResponse.json(
      {
        message: "Log-out SuccessFully",
      },
      { status: 200 }
    );
    response.cookies.delete("accessToken");
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
