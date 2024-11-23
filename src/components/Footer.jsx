import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 md:px-6 border-t">
      <div className="container flex flex-col sm:flex-row justify-between items-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 Acme Inc. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/terms">
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/privacy">
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
