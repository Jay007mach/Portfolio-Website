import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Code2, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'IT Undergraduate | GATE Aspirant';

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [isLoaded]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePosition({ x: x * 3, y: y * 3 });
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-light dark:bg-dark transition-colors duration-300"
    >
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['</>', '{}', '[]', '()', '&&', '||', '=>', '++'].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-primary/10 dark:text-primary/20 font-mono text-2xl animate-float"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-body font-medium text-dark dark:text-white">
                Hello, I'm
              </span>
            </div>

            <h1 className="heading-xl text-dark dark:text-white mb-4">
              <span
                className={`block transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                style={{ transitionDelay: '200ms' }}
              >
                Jay Machhi
              </span>
            </h1>

            <div className="h-12 mb-6">
              <span className="text-2xl md:text-3xl font-body text-dark/70 dark:text-white/70">
                {typedText}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </div>

            <p
              className={`body-lg max-w-lg mb-8 dark:text-white/70 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '600ms' }}
            >
              An Information Technology undergraduate with a strong focus on cracking the GATE exam,
              driven by deep conceptual understanding and rigorous problem-solving. With a sports background,
              I bring discipline, consistency, and teamwork into my technical journey.
            </p>

            <div
              className={`flex flex-wrap gap-4 mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '800ms' }}
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="btn-primary group"
              >
                View My Projects
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-secondary"
              >
                Get In Touch
              </button>
            </div>

            <div
              className={`flex gap-4 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '1000ms' }}
            >
              {[
                { icon: Github, href: 'https://github.com/Jay007mach', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/jaymach17', label: 'LinkedIn' },
                { icon: Instagram, href: 'https://instagram.com/jaymach_17', label: 'Instagram' },
                { icon: Mail, href: 'mailto:jayvmachhi2005@gmail.com', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white dark:bg-card rounded-lg shadow-sm flex items-center justify-center text-dark dark:text-white hover:bg-primary hover:text-dark transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div
            className={`order-1 lg:order-2 relative transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div
              className="relative"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * -1}deg) rotateX(${mousePosition.y}deg)`,
              }}
            >
              <div className="bg-dark rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-dark-light px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="ml-4 text-sm font-mono text-white/50">student-profile.js</div>
                </div>

                <div className="p-6 font-mono text-sm">
                  <div className="text-white/50">// About me</div>
                  <div className="mt-2">
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-400">student</span> = {'{'}
                  </div>
                  <div className="ml-4">
                    <span className="text-yellow-300">name</span>:{' '}
                    <span className="text-green-400">'Jay Machhi'</span>,
                  </div>
                  <div className="ml-4">
                    <span className="text-yellow-300">year</span>:{' '}
                    <span className="text-orange-400">3</span>,
                  </div>
                  <div className="ml-4">
                    <span className="text-yellow-300">major</span>:{' '}
                    <span className="text-green-400">'Information Technology'</span>,
                  </div>
                  <div className="ml-4">
                    <span className="text-yellow-300">focus</span>:{' '}
                    <span className="text-green-400">'GATE Preparation'</span>,
                  </div>
                  <div className="ml-4">
                    <span className="text-yellow-300">interests</span>: [
                  </div>
                  <div className="ml-8">
                    <span className="text-green-400">'AI/ML'</span>
                  </div>
                  <div className="ml-4">],</div>
                  <div className="ml-4">
                    <span className="text-yellow-300">currentlyLearning</span>:{' '}
                    <span className="text-green-400">'Data Mining & IoT Components'</span>,
                  </div>
                  <div>{'}'};</div>

                  <div className="mt-4 text-white/50">// Let's connect!</div>
                  <div>
                    <span className="text-blue-400">student</span>.
                    <span className="text-yellow-300">HelloWorld</span>();
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        style={{ transitionDelay: '1200ms' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-body text-muted-foreground">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-dark/30 dark:border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce-subtle" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
