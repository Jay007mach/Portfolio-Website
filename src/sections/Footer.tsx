import { Github, Linkedin, Instagram, Heart, ArrowUp, Code2 } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Education', href: '#education' },
      { name: 'Contact', href: '#contact' },
    ],
    resources: [
      { name: 'GitHub', href: 'https://github.com/Jay007mach' },
      { name: 'LinkedIn', href: 'https://linkedin.com/in/jaymach17' },
      { name: 'Resume', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Jay007mach' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/jaymach17' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/jaymach_17' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-dark dark:bg-black overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#home');
                }}
                className="inline-flex items-center gap-2 text-2xl font-display font-bold text-white hover:text-primary transition-colors duration-300"
              >
                <Code2 className="w-6 h-6 text-primary" />
                Jay Machhi
              </a>
              <p className="mt-4 text-white/60 font-body leading-relaxed max-w-sm">
                An IT undergraduate focused on GATE preparation and building strong
                CS fundamentals. Discipline from sports, passion for problem-solving.
              </p>

              <div className="flex gap-3 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:bg-primary hover:text-dark transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-display font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-white/60 font-body hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-display font-semibold mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-white/60 font-body hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-1 text-white/60 font-body text-sm">
                <span>© {currentYear} Jay Machhi</span>
              </div>

              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 text-white/60 font-body text-sm hover:text-primary transition-colors duration-300"
              >
                Back to top
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                  <ArrowUp className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
