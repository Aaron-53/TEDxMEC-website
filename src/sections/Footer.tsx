import { Mail, MapPin, Send } from "lucide-react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/tedxmec?igsh=MTR0emdyb3V1d2Zu",
    label: "Instagram",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/tedxmec/",
    label: "LinkedIn",
  },
  {
    icon: FaYoutube,
    href: "https://youtube.com/playlist?list=PLZmEteRpgiz03EX-4bhwtt6g-tV-2piUn&si=dQivi9Gxse-4wbKz",
    label: "YouTube",
  },
  { icon: FaXTwitter, href: "https://x.com/TEDxMEC", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="relative z-[110] bg-[#F4F6F9]" id="contact">
      {/* Main Footer Content */}
      <div className="py-24 px-[6vw]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div className="footer-left">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-gray-500 mb-4 block">
              CONTACT
            </span>
            <h2 className="font-sora font-bold uppercase text-[clamp(34px,3.6vw,56px)] leading-[1.05] tracking-[-0.02em] text-gray-900 mb-8">
              LET'S
              <br />
              <span className="text-tedx-red">TALK</span>
            </h2>

            <div className="space-y-6">
              <a
                href="mailto:hello@tedxmec.in"
                className="flex items-center gap-4 text-gray-700 hover:text-tedx-red transition-colors"
              >
                <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">hello@tedxmec.in</span>
              </a>

              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-medium">MEC, Kochi, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-700 hover:bg-tedx-red hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="footer-right">
            <form className="space-y-6">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-gray-500 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-tedx-red transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-gray-500 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-tedx-red transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-gray-500 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-tedx-red transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-tedx-red text-white font-sora font-semibold text-sm uppercase tracking-wider rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom border-t border-gray-200 py-8 px-[6vw]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* TEDx Disclaimer */}
          <p className="text-xs text-gray-500 text-center md:text-left max-w-md">
            TEDxMEC is independently organized under license from TED.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <span className="text-xs text-gray-400">© 2026 TEDxMEC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
