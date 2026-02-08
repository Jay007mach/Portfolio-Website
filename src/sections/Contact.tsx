import { useEffect, useRef, useState } from 'react';
import { Mail, Send, Github, Linkedin, Instagram, MapPin, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_rk3g38d',
        'template_kfbvl6f',
        formRef.current!,
        'SFgr9n13NZzwhhPGn'
      );

      toast.success('Message Sent!', {
        description: 'Thanks for reaching out! I\'ll get back to you soon.',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message', {
        description: 'Please try again or email me directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Jay007mach', color: 'hover:bg-gray-800' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/jaymach17', color: 'hover:bg-blue-600' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/jaymach_17', color: 'hover:bg-pink-500' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-light dark:bg-dark overflow-hidden transition-colors duration-300"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className={`section-label transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Get In Touch
          </span>
          <h2
            className={`heading-lg text-dark dark:text-white mt-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '100ms' }}
          >
            Let's Connect &
            <span className="text-gradient"> Collaborate</span>
          </h2>
          <p
            className={`body-lg text-muted-foreground max-w-2xl mx-auto mt-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            Whether you want to discuss a project, collaborate on something cool,
            or just say hi — I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div
            className={`lg:col-span-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="space-y-4 mb-8">
              <a
                href="mailto:jayvmachhi2005@gmail.com"
                className="group flex items-center gap-4 p-5 bg-white dark:bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Mail className="w-5 h-5 text-primary group-hover:text-dark transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-sm font-body text-muted-foreground">Email</div>
                  <div className="text-dark dark:text-white font-body font-medium group-hover:text-primary transition-colors duration-300">
                    jayvmachhi2005@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-white dark:bg-card rounded-2xl shadow-card">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-body text-muted-foreground">Location</div>
                  <div className="text-dark dark:text-white font-body font-medium">
                    Gujarat, India
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-card rounded-2xl shadow-card p-6">
              <h3 className="text-lg font-display font-semibold text-dark dark:text-white mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                Find Me Online
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-light dark:bg-dark rounded-xl flex items-center justify-center text-dark dark:text-white ${social.color} hover:text-white transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 p-6 bg-dark dark:bg-white/5 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-body text-white/70 dark:text-white/60">
                  Open for Opportunities
                </span>
              </div>
              <p className="text-white/80 dark:text-white/70 font-body text-sm">
                Currently looking for internships, freelance projects, and
                collaboration opportunities. Let's build something amazing together!
              </p>
            </div>
          </div>

          <div
            className={`lg:col-span-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            style={{ transitionDelay: '400ms' }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white dark:bg-card rounded-3xl shadow-card p-8 lg:p-10"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-body font-medium text-dark dark:text-white mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-light dark:bg-dark rounded-xl border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-dark transition-all duration-300 outline-none text-dark dark:text-white font-body"
                    placeholder="XYZ"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-body font-medium text-dark dark:text-white mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-light dark:bg-dark rounded-xl border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-dark transition-all duration-300 outline-none text-dark dark:text-white font-body"
                    placeholder="XYZ@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-body font-medium text-dark dark:text-white mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-light dark:bg-dark rounded-xl border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-dark transition-all duration-300 outline-none text-dark dark:text-white font-body"
                  placeholder="Project Collaboration / Internship Opportunity"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-body font-medium text-dark dark:text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 bg-light dark:bg-dark rounded-xl border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-dark transition-all duration-300 outline-none text-dark dark:text-white font-body resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-dark/30 border-t-dark rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
