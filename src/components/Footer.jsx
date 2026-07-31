import { FaEnvelope, FaPhone, FaLinkedin, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { contactInfo } from "@/data";
import { FaLocationDot } from "react-icons/fa6";

const socialLinks = [
  { icon: FaLinkedin, href: "https://bd.linkedin.com/in/mohammed-ismail-601457217", label: "LinkedIn" },
  { icon: FaFacebookF, href: "https://www.facebook.com/mdaismail.it", label: "Facebook" },
  { icon: FaXTwitter, href: "https://x.com/MdIsmail5851415", label: "X (Twitter)" },
];

const Footer = () => {
  return (
    <footer id="contact" className="w-full pt-20 pb-10 px-4" >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Let&apos;s work <span className="text-purple-300">together</span>
        </h1>
        <p className="text-white/70 mt-4">
          Have a project in mind, or want to talk about accessible tools for underserved communities? Reach out.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 text-white/80">
          <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 justify-center hover:text-purple-300 transition-colors">
            <FaEnvelope /> {contactInfo.email}
          </a>
          <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 justify-center hover:text-purple-300 transition-colors">
            <img src='wha.svg' /> {contactInfo.phone}
          </a>
          <span className="flex items-center gap-2 justify-center">
            <FaLocationDot /> {contactInfo.location}
          </span>
        </div>

        <div className="flex gap-4 justify-center mt-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              title={social.label}
              className="p-3 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-400/40 transition-all duration-300"
            >
              <social.icon className="text-white/70 text-lg" />
            </a>
          ))}
        </div>
      </div>

      <p className="text-center text-white/40 text-sm mt-16">
        Copyright &copy; {new Date().getFullYear()} Mohammed Ismail
      </p>
    </footer>
  );
};

export default Footer;
