import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-4 mx-auto max-w-7xl">
      <div className="flex flex-col items-center py-10 ">
        <div class="">
          <div class="flex flex-col justify-center items-center">
            <h1 class="text-8xl font-bold text-gray-800">404</h1>
            <p class="text-4xl font-medium text-gray-800">Page Not Found</p>
            <a href="/" class="mt-4 text-xl text-blue-600 hover:underline">
              Go back home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
