"use client"

import { ArrowUp, Github, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const FooterNavbar = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com", color: "hover:text-gray-900 dark:hover:text-white" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-600" },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700 py-4 text-sm">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Brand and Copyright */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Zed
          </span>
          <p className="text-gray-600 dark:text-gray-400 text-sm">© {currentYear} All rights reserved.</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-2">
          {socialLinks.map(({ name, icon: Icon, href, color }) => (
            <a
              key={name}
              href={href}
              className={`p-1.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-all duration-200 ${color} hover:scale-105`}
              aria-label={name}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Back to Top Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={scrollToTop}
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-2 py-1 h-auto text-sm"
        >
          <ArrowUp className="w-3.5 h-3.5 mr-1" />
          Back to top
        </Button>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
    </footer>
  )
}

export default FooterNavbar;