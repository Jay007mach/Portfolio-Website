import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Trophy } from 'lucide-react';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description: string;
  achievements: string[];
  gpa?: string;
}

const Education = () => {
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

  const education: EducationItem[] = [
    {
      id: 1,
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'G H Patel College of Engineering and Technology',
      location: 'Anand, Gujarat',
      duration: '2023 - 2027 (Expected)',
      description:
        'Currently in my third year, focusing on GATE preparation, database systems, and web technologies.',
      achievements: [
        'Branch Topper - 1, 2, 3, 4, 5 Semester'
      ],
      gpa: '9.73/10',
    },
    {
      id: 2,
      degree: 'Higher Secondary Education (Science)',
      institution: 'Atul Vidyalaya',
      location: 'Atul, Gujarat',
      duration: '2008 - 2023',
      description:
        'Completed higher secondary education with Physics, Chemistry, Mathematics as major subjects.',
      achievements: [
        'School Topper in Physical Education',
        'Represented school in State Level Football, Swimming, Basketball, Cricket Tournament',
        'Represented Maharashtra in National Level Javelin Throw'
      ],
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-light dark:bg-dark overflow-hidden transition-colors duration-300"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className={`section-label transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Education
          </span>
          <h2
            className={`heading-lg text-dark dark:text-white mt-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '100ms' }}
          >
            Academic
            <span className="text-gradient"> Journey</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-dark/10 dark:bg-white/10" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={item.id}
                className={`relative pl-12 md:pl-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                  }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="absolute left-0 md:left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-4 h-4 text-dark" />
                </div>

                <div className="bg-white dark:bg-card rounded-2xl shadow-card p-6 md:p-8 hover:shadow-card-hover transition-shadow duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-dark dark:text-white mb-1">
                        {item.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-body font-medium">
                        <BookOpen className="w-4 h-4" />
                        {item.institution}
                      </div>
                    </div>
                    {item.gpa && (
                      <div className="px-3 py-1.5 bg-primary/10 rounded-lg">
                        <span className="text-sm font-body font-semibold text-dark dark:text-white">
                          GPA: {item.gpa}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </div>
                  </div>

                  <p className="text-muted-foreground font-body mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-body font-medium text-dark dark:text-white">
                      <Trophy className="w-4 h-4 text-primary" />
                      Achievements
                    </div>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
