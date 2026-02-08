import { useEffect, useRef, useState } from 'react';
import {
  Database,
  Layout,
  Terminal,
  Cpu
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
  color: string;
}

const Skills = () => {
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

  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      skills: ['C', 'C++', 'Java', 'Python'],
    },
    {
      title: 'Web Development',
      icon: Layout,
      color: 'from-green-500 to-emerald-500',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'React', 'Node.js'],
    },
    {
      title: 'Databases & Backend & Tools',
      icon: Database,
      color: 'from-orange-500 to-red-500',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Apache Tomcat', 'Git', 'Selenium', 'GitHub'],
    },
    {
      title: 'ML/AI',
      icon: Terminal,
      color: 'from-purple-500 to-pink-500',
      skills: ['TensorFlow', 'PyTorch', 'Keras', 'NumPy', 'Pandas', 'Scikit-learn', 'Scipy'],
    },
  ];

  return (
    <section
      id="skills"
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
            My Toolkit
          </span>
          <h2
            className={`heading-lg text-white mt-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '100ms' }}
          >
            Skills &
            <span className="text-gradient"> Technologies</span>
          </h2>
          <p
            className={`body-lg text-white/60 max-w-2xl mx-auto mt-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            Technologies I've been learning and working with during my academic journey
            and personal projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 transition-all duration-700 hover:bg-white/10 hover:border-primary/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
              style={{ transitionDelay: `${300 + categoryIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/10 hover:bg-primary/20 rounded-xl text-sm font-body text-white/80 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '700ms' }}
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-white/5 rounded-2xl border border-white/10">
            <Cpu className="w-5 h-5 text-primary" />
            <span className="text-white/70 font-body">
              Currently exploring:
            </span>
            <div className="flex gap-2">
              {['Cloud Computing', 'UI/UX'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/20 rounded-lg text-sm font-body text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
