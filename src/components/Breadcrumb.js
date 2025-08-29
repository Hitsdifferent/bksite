"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  function formatBreadcrumb(segment) {
    return segment
      .replace(/-/g, " ") // Vervangt "-" door een spatie
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Hoofdletter aan het begin van elk woord
  }

  return (
    <nav className="text-black text-base text-medium mb-8">
      <ul className="flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:text-gray-600">Home</Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");

          return (
            <li key={href} className="flex items-center space-x-2">
              <span>/</span>
              <Link href={href} className="hover:text-gray-600 capitalize">
                {formatBreadcrumb(segment)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
