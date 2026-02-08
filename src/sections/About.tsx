import { useEffect, useRef, useState } from 'react';
import { BookOpen, Code, Lightbulb, Target, GraduationCap, Calendar, Camera } from 'lucide-react';

const About = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const quickFacts = [
    { icon: GraduationCap, label: 'Degree', value: 'B.Tech IT' },
    { icon: Calendar, label: 'Expected Graduation', value: '2027' },
    { icon: Code, label: 'Focus', value: 'GATE' },
    { icon: Lightbulb, label: 'Projects Built', value: '2+' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-light dark:bg-dark overflow-hidden transition-colors duration-300"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent dark:from-primary/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative mb-8">
              <div className="aspect-[4/5] max-w-sm mx-auto lg:mx-0 bg-white dark:bg-card rounded-3xl shadow-card overflow-hidden">
                <div className="relative w-full h-full">
                  <img
                    src="/images/jay-profile.png"
                    alt="Jay Machhi"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-3xl -z-10" />

              <div className="absolute -bottom-4 -right-4 bg-primary rounded-2xl shadow-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-display font-bold text-dark">3rd</div>
                  <div className="text-xs font-body text-dark/70">Year</div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-card rounded-3xl shadow-card p-6">
              <h3 className="text-xl font-display font-bold text-dark dark:text-white mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Quick Facts
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {quickFacts.map((fact, index) => (
                  <div
                    key={fact.label}
                    className="text-center p-4 bg-light dark:bg-dark rounded-2xl hover:bg-primary/10 transition-colors duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <fact.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-xl font-display font-bold text-dark dark:text-white">
                      {fact.value}
                    </div>
                    <div className="text-xs font-body text-muted-foreground">
                      {fact.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
            >
              <span className="section-label">About Me</span>
            </div>

            <h2
              className={`heading-lg text-dark dark:text-white mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '100ms' }}
            >
              Learning, Building,
              <span className="text-gradient"> Growing</span>
            </h2>

            <div
              className={`space-y-4 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="body-md dark:text-white/70">
                Hey there! I'm Jay, an Information Technology undergraduate with a
                strong focus on cracking the GATE exam, driven by deep conceptual
                understanding and rigorous problem-solving practice. I actively work
                on strengthening my foundations in core computer science subjects.
              </p>
              <p className="body-md dark:text-white/70">
                With a background in sports, I bring discipline, consistency, teamwork,
                and resilience into my academic and technical journey. I enjoy breaking
                down complex concepts into simpler ideas, tackling challenging problems,
                and continuously improving through hands-on learning and collaboration.
              </p>
              <p className="body-md dark:text-white/70">
                I am open to exploring any technical, analytical, or logical problem
                that contributes to long-term academic and professional growth. My
                interests span AI/ML, system design, and core CS fundamentals.
              </p>
            </div>

            <div
              className={`flex flex-wrap gap-3 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '300ms' }}
            >
              {['GATE Aspirant', 'AI/ML Enthusiast', 'Problem Solver'].map((goal) => (
                <span
                  key={goal}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg text-sm font-body font-medium text-dark dark:text-white"
                >
                  <Target className="w-4 h-4 text-primary" />
                  {goal}
                </span>
              ))}
            </div>

            <div
              className={`p-6 bg-dark dark:bg-white/5 rounded-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-body text-white/70 dark:text-white/60">
                  Currently Learning
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Data Mining', 'IoT Components'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 rounded-lg text-sm font-body text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
