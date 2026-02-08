import { useEffect, useRef, useState } from 'react';
import {
  Palette,
  Database,
  Terminal,
  Rocket,
  ArrowUpRight,
  Cloud
} from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const interests = [
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description:
        'Understanding cloud fundamentals and service models through hands-on labs and introductory deployments.',
      technologies: ['AWS Basics', 'Virtual Machines', 'Google Cloud', 'Cloud Storage'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description:
        'Creating user-friendly interfaces with clean aesthetics. Learning design principles and prototyping tools.',
      technologies: ['Figma', 'Tailwind CSS', 'Adobe XD'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Database,
      title: 'Data Mining',
      description:
        'Learning data mining concepts including data preprocessing, pattern discovery, and knowledge extraction from large datasets.',
      technologies: ['Data Preprocessing', 'Pattern Discovery', 'Knowledge Extraction'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Terminal,
      title: 'Problem Solving',
      description:
        'Passionate about algorithms and data structures. Regularly practice on coding platforms.',
      technologies: ['Python', 'C++', 'Java'],
      color: 'from-purple-500 to-violet-500',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-dark dark:bg-black overflow-hidden transition-colors duration-300"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className={`section-label text-primary transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            What I Do
          </span>
          <h2
            className={`heading-lg text-white mt-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '100ms' }}
          >
            Areas I'm
            <span className="text-gradient"> Exploring</span>
          </h2>
          <p
            className={`body-lg text-white/60 max-w-2xl mx-auto mt-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            As a student, I'm constantly learning and experimenting with different
            technologies. Here are the areas I'm focusing on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {interests.map((item, index) => (
            <div
              key={item.title}
              className={`group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 transition-all duration-700 hover:bg-white/10 hover:border-primary/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-white/60 font-body mb-6">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 rounded-lg text-sm font-body text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '700ms' }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 bg-primary/10 rounded-3xl border border-primary/20">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <Rocket className="w-6 h-6 text-dark" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-display font-bold text-white mb-1">
                Looking for Internship Opportunities
              </h4>
              <p className="text-white/60 font-body text-sm">
                I'm eager to apply my skills and learn from industry professionals.
                Open to internships and collaborative projects!
              </p>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-primary text-dark rounded-xl font-body font-semibold hover:bg-primary-dark transition-colors duration-300 whitespace-nowrap"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
