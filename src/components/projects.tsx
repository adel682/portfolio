import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, QrCode, Rocket, Github, ExternalLink, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectsProps {
  currentLang: 'en' | 'ar';
}

export function Projects({ currentLang }: ProjectsProps) {
  const [filter, setFilter] = useState('all');

  const content = {
    en: {
      title: "Featured Projects",
      filters: [
        { id: 'all', label: 'All' },
        { id: 'FastAPI', label: 'FastAPI' },
        { id: 'Production', label: 'Production' },
        { id: 'Advanced', label: 'Advanced' },
        { id: 'Enterprise', label: 'Enterprise' }
      ],
      projects: [
        {
          id: 1,
          title: "AppForge - Mobile App Builder",
          description: "A comprehensive local mobile app building tool supporting Flutter, React Native, Android Native, and Cordova projects with automated building processes.",
          image: <Smartphone className="w-16 h-16" />,
          status: "Production Ready",
          complexity: "Advanced",
          features: [
            "Multi-platform support (Flutter, React Native, Android, Cordova)",
            "Automatic project type detection",
            "Real-time build monitoring and logging",
            "Resource monitoring and optimization",
            "Automated cleanup and memory management"
          ],
          tech: ["FastAPI", "Python", "AsyncIO", "Docker", "Flutter", "React Native"],
          links: {
            github: "https://github.com/adel682/appforge",
            demo: "#",
            docs: "#"
          },
          categories: ["FastAPI", "Production", "Advanced"]
        },
        {
          id: 2,
          title: "Professional QR Code Generator API",
          description: "A robust, production-ready QR Code Generator API with advanced features including caching, rate limiting, and comprehensive monitoring.",
          image: <QrCode className="w-16 h-16" />,
          status: "Production Ready",
          complexity: "Professional",
          features: [
            "High-performance in-memory generation with caching",
            "Multiple output formats (PNG, JPEG, SVG)",
            "Security with input validation and rate limiting",
            "Comprehensive logging and health checks",
            "RESTful API with automatic documentation"
          ],
          tech: ["FastAPI", "Pydantic", "Redis", "SlowAPI", "QRCode", "Uvicorn"],
          links: {
            github: "https://github.com/adel682/qrgen-api",
            demo: "#",
            docs: "#"
          },
          categories: ["FastAPI", "Production", "Advanced"]
        },
        {
          id: 3,
          title: "Enhanced FastAPI Enterprise Application",
          description: "A full-featured enterprise FastAPI application with advanced security, monitoring, internationalization, and scalable architecture patterns.",
          image: <Rocket className="w-16 h-16" />,
          status: "Enterprise Ready",
          complexity: "Enterprise",
          features: [
            "Advanced authentication and authorization",
            "Database integration with async SQLAlchemy",
            "Redis caching with intelligent cache management",
            "Structured logging and monitoring",
            "Multi-language support (i18n)",
            "Performance optimization with metrics"
          ],
          tech: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Redis", "JWT", "Prometheus", "Docker", "Kubernetes"],
          links: {
            github: "https://github.com/adel682/fastapi-enterprise",
            demo: "https://rapidapi.com/adelzidoune/api/synapticore_lite",
            docs: "#"
          },
          categories: ["FastAPI", "Production", "Enterprise"]
        }
      ]
    },
    ar: {
      title: "المشاريع المميزة",
      filters: [
        { id: 'all', label: 'الكل' },
        { id: 'FastAPI', label: 'FastAPI' },
        { id: 'Production', label: 'إنتاج' },
        { id: 'Advanced', label: 'متقدم' },
        { id: 'Enterprise', label: 'مؤسسي' }
      ],
      projects: [
        {
          id: 1,
          title: "AppForge - بناء التطبيقات المحمولة",
          description: "أداة شاملة لبناء التطبيقات المحمولة المحلية تدعم مشاريع Flutter وReact Native وAndroid Native وCordova مع عمليات بناء تلقائية.",
          image: <Smartphone className="w-16 h-16" />,
          status: "جاهز للإنتاج",
          complexity: "متقدم",
          features: [
            "دعم متعدد المنصات (Flutter، React Native، Android، Cordova)",
            "اكتشاف نوع المشروع التلقائي",
            "مراقبة وتسجيل البناء في الوقت الفعلي",
            "مراقبة وتحسين الموارد",
            "تنظيف تلقائي وإدارة ذاكرة"
          ],
          tech: ["FastAPI", "Python", "AsyncIO", "Docker", "Flutter", "React Native"],
          links: {
            github: "https://github.com/adel682/appforge",
            demo: "#",
            docs: "#"
          },
          categories: ["FastAPI", "Production", "Advanced"]
        },
        {
          id: 2,
          title: "واجهة برمجة مولد رمز QR الاحترافي",
          description: "واجهة برمجة قوية وجاهزة للإنتاج لتوليد رمز QR مع ميزات متقدمة تشمل التخزين المؤقت وتحديد المعدل والمراقبة الشاملة.",
          image: <QrCode className="w-16 h-16" />,
          status: "جاهز للإنتاج",
          complexity: "احترافي",
          features: [
            "توليد عالي الأداء في الذاكرة مع التخزين المؤقت",
            "تنسيقات إخراج متعددة (PNG، JPEG، SVG)",
            "الأمان مع التحقق من المدخلات وتحديد المعدل",
            "التسجيل الشامل وفحوصات الصحة",
            "واجهة RESTful مع التوثيق التلقائي"
          ],
          tech: ["FastAPI", "Pydantic", "Redis", "SlowAPI", "QRCode", "Uvicorn"],
          links: {
            github: "https://github.com/adel682/qrgen-api",
            demo: "#",
            docs: "#"
          },
          categories: ["FastAPI", "Production", "Advanced"]
        },
        {
          id: 3,
          title: "تطبيق FastAPI المحسن للمؤسسات",
          description: "تطبيق FastAPI مؤسسي كامل الميزات مع الأمان المتقدم والمراقبة والتدويل وأنماط المعمارية القابلة للتوسع.",
          image: <Rocket className="w-16 h-16" />,
          status: "جاهز للمؤسسات",
          complexity: "مؤسسي",
          features: [
            "المصادقة والتفويض المتقدم",
            "تكامل قاعدة البيانات مع SQLAlchemy غير المتزامن",
            "تخزين Redis مؤقت مع إدارة ذكية للتخزين المؤقت",
            "التسجيل المنظم والمراقبة",
            "دعم متعدد اللغات",
            "تحسين الأداء مع المقاييس"
          ],
          tech: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Redis", "JWT", "Prometheus", "Docker", "Kubernetes"],
          links: {
            github: "https://github.com/adel682/fastapi-enterprise",
            demo: "https://rapidapi.com/adelzidoune/api/synapticore_lite",
            docs: "#"
          },
          categories: ["FastAPI", "Production", "Enterprise"]
        }
      ]
    }
  };

  const filteredProjects = content[currentLang].projects.filter(project => 
    filter === 'all' || project.categories.includes(filter)
  );

  return (
    <section 
      id="projects" 
      className="py-20 px-4"
      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="hero-title text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {content[currentLang].title}
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {content[currentLang].filters.map((filterItem) => (
            <Button
              key={filterItem.id}
              variant={filter === filterItem.id ? "default" : "outline"}
              onClick={() => setFilter(filterItem.id)}
              className={filter === filterItem.id ? "btn-brand" : "btn-outline"}
            >
              {filterItem.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="glass-card overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Project Image */}
                  <div className="lg:w-1/3 bg-gradient-brand p-8 flex items-center justify-center text-white relative">
                    {project.image}
                    <div className="project-status">{project.status}</div>
                    <div className="project-complexity">{project.complexity}</div>
                  </div>

                  {/* Project Content */}
                  <div className="lg:w-2/3 p-8">
                    <h3 className="text-xl font-bold text-accent mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-6">{project.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-foreground font-semibold mb-3">
                        {currentLang === 'en' ? 'Key Features:' : 'الميزات الأساسية:'}
                      </h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-accent mr-2">▶</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="tech-tag">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent hover:text-primary transition-colors"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                      <a 
                        href={project.links.docs} 
                        className="text-accent hover:text-primary transition-colors"
                      >
                        <Book className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}