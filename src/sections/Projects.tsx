import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Code2, BookOpen, Star, Folder } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  type: 'academic' | 'personal' | 'hackathon';
  featured: boolean;
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<'all' | 'academic' | 'personal' | 'hackathon'>('all');

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

  const projects: Project[] = [
    {
      id: 1,
      title: 'Image Caption Generator',
      description:
        'An AI-based system that automatically generates meaningful captions for images using deep learning. Implements CNN-based feature extraction combined with LSTM sequence models for natural language generation.',
      image: '/images/project-1.jpg',
      tags: ['Python', 'TensorFlow', 'Keras', 'CNN', 'LSTM', 'NumPy'],
      githubUrl: 'https://github.com/Jay007mach',
      type: 'academic',
      featured: true,
    },
    {
      id: 2,
      title: 'Gamified Expense Manager',
      description:
        'A gamified personal expense management application built using the Spring Framework. Designed with MVC architecture and database integration to encourage better financial habits through rewards.',
      image: '/images/project-2.jpg',
      tags: ['Java', 'Spring Framework', 'PostgreSQL', 'MVC', 'Advanced Java'],
      githubUrl: 'https://github.com/Jay007mach',
      type: 'personal',
      featured: true,
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.type === filter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'academic':
        return BookOpen;
      case 'hackathon':
        return Star;
      default:
        return Code2;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'academic':
        return 'bg-blue-500/20 text-blue-400';
      case 'hackathon':
        return 'bg-primary/20 text-primary';
      default:
        return 'bg-green-500/20 text-green-400';
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-light dark:bg-dark overflow-hidden transition-colors duration-300"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            className={`section-label transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            My Work
          </span>
          <h2
            className={`heading-lg text-dark dark:text-white mt-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '100ms' }}
          >
            Projects I've
            <span className="text-gradient"> Built</span>
          </h2>
          <p
            className={`body-lg text-muted-foreground max-w-2xl mx-auto mt-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            A collection of my academic projects, personal experiments, and hackathon submissions.
            Each project taught me something new.
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '300ms' }}
        >
          {[
            { key: 'all', label: 'All Projects', icon: Folder },
            { key: 'academic', label: 'Academic', icon: BookOpen },
            { key: 'personal', label: 'Personal', icon: Code2 },
            { key: 'hackathon', label: 'Hackathons', icon: Star },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as any)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 ${filter === tab.key
                ? 'bg-primary text-dark'
                : 'bg-white dark:bg-card text-dark/70 dark:text-white/70 hover:bg-primary/20'
                }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const TypeIcon = getTypeIcon(project.type);

            return (
              <div
                key={project.id}
                className={`group relative bg-white dark:bg-card rounded-3xl overflow-hidden shadow-card transition-all duration-700 hover:shadow-card-hover hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                  }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />

                  <div className={`absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-body font-medium ${getTypeColor(project.type)}`}>
                    <TypeIcon className="w-3.5 h-3.5" />
                    <span className="capitalize">{project.type}</span>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-primary/90 rounded-lg">
                      <Star className="w-3 h-3 text-dark fill-dark" />
                      <span className="text-xs font-body font-medium text-dark">Featured</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-dark dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-light dark:bg-dark rounded-lg text-xs font-body text-dark/70 dark:text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 bg-light dark:bg-dark rounded-lg text-xs font-body text-dark/70 dark:text-white/70">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-dark text-white rounded-xl text-sm font-body font-medium hover:bg-dark-light transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-dark rounded-xl text-sm font-body font-medium hover:bg-primary-dark transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '800ms' }}
        >
          <a
            href="https://github.com/Jay007mach"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-dark dark:bg-white text-white dark:text-dark rounded-xl font-body font-medium hover:bg-dark-light dark:hover:bg-white/90 transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
