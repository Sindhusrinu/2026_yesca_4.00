import React from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const menuItems = [
    { label: "View Products", href: "#" },
    { label: "Technology Services", href: "#" },
    { label: "Talk to Our Team", href: "#" },
  ];

  const address =
    "425, Workafella Cyber Crown, Cyber Crown, Sec-II Village, HUDA Techno Enclave, Madhapur, Hyderabad, Telangana 500081";
  const email = "contact@yesca.in";
  const phone = "9000359717";

  return (
    <footer className="w-full bg-white text-gray-800 border-t border-gray-200">
      <div className="w-full px-6 md:px-12 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Info */}
          <div className="space-y-4">
            <img
              src="/sitelogo/YESCA_FULL_LOGO.svg"
              width={180}
              height={50}
              alt="Logo"
              className="h-auto"
              style={{ maxWidth: "200px" }}
            />
            <p className="text-gray-600 text-sm">
              Innovative technology solutions for modern businesses
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.696.278.777 2.21.565 6.478.006 7.748 0 8.172 0 12c0 3.828.011 4.252.57 5.522.207 4.263 2.126 6.19 6.483 6.398 1.281.058 1.706.07 5.517.07 3.811 0 4.236-.012 5.517-.07 4.357-.208 6.276-2.135 6.483-6.398.56-1.27.57-1.694.57-5.522 0-3.828-.01-4.252-.57-5.522C23.224 2.21 21.305.278 16.948.07 15.681.012 15.256 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {menuItems.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-indigo-600 transition-colors flex items-center group text-sm"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="text-indigo-600 flex-shrink-0 mt-0.5"
                />
                <span className="text-gray-600 leading-relaxed">{address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-indigo-600 flex-shrink-0" />
                <a
                  href={`mailto:${email}`}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  {email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-indigo-600 flex-shrink-0" />
                <a
                  href={`tel:+91${phone}`}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  +91 {phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-100 py-6 text-center">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">
            © {currentYear} YESCA Technologies Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-white">
      <Footer />
    </div>
  );
}
