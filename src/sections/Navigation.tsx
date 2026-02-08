import { useState, useEffect } from 'react';
import { Menu, X, Code2, Download } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/95 dark:bg-dark/95 backdrop-blur-xl shadow-lg py-4'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex items-center gap-2 text-xl font-display font-bold text-dark dark:text-white hover:text-primary transition-colors duration-300"
            >
              <Code2 className="w-6 h-6 text-primary" />
              <span className="hidden sm:inline">Jay Machhi</span>
            </a>

            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="relative text-sm font-body font-medium text-dark/80 dark:text-white/80 hover:text-dark dark:hover:text-white transition-colors duration-300 link-underline py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:block">
              <a
                href="/Jay_Machhi_Resume.pdf"
                download="Jay_Machhi_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-dark font-body font-semibold rounded-lg transition-all duration-300 hover:bg-primary-dark hover:shadow-glow hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>

            <button
              className="lg:hidden p-2 text-dark dark:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMobileMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
      >
        <div
          className="absolute inset-0 bg-dark/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-4 right-4 bg-white dark:bg-card rounded-2xl shadow-2xl p-6 transition-all duration-500 ${isMobileMenuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-8 opacity-0'
            }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-lg font-body font-medium text-dark/80 dark:text-white/80 hover:text-primary transition-colors duration-300 py-3 px-4 rounded-xl hover:bg-primary/10"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Jay_Machhi_Resume.pdf"
              download="Jay_Machhi_Resume.pdf"
              className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-dark font-body font-semibold rounded-xl transition-all duration-300 hover:bg-primary-dark"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
