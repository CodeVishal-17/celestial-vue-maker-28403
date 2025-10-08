import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    { label: "About", href: "/" },
    { label: "Missions", href: "/missions" },
    { label: "Technology", href: "/technology" },
    { label: "Starlink", href: "/starlink" },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs text-muted-foreground text-center md:text-right">
            © 2025 SPACEX-STYLE • MITIGATED DESIGN FOR DEMO
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
