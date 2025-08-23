import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Code, Database, Cloud, Cog, Shield } from 'lucide-react';

interface SkillsProps {
  currentLang: 'en' | 'ar';
}

export function Skills({ currentLang }: SkillsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const content = {
    en: {
      title: "Technical Skills",
      skills: [
        {
          icon: Zap,
          title: "FastAPI Development",
          description: "Expert in building high-performance REST APIs with FastAPI, including automatic documentation, validation, and async support.",
          level: 95
        },
        {
          icon: Code,
          title: "Python Ecosystem",
          description: "Deep knowledge of Python frameworks, libraries, and best practices for backend development, testing, and deployment.",
          level: 92
        },
        {
          icon: Database,
          title: "Database Design",
          description: "Proficient in SQL/NoSQL databases, ORM integration, and designing efficient database schemas for scalable applications.",
          level: 88
        },
        {
          icon: Cloud,
          title: "Cloud & DevOps",
          description: "Experience with cloud platforms, containerization with Docker, CI/CD pipelines, and infrastructure as code.",
          level: 85
        },
        {
          icon: Cog,
          title: "Microservices",
          description: "Designing and implementing microservices architecture with proper service communication, monitoring, and scalability.",
          level: 90
        },
        {
          icon: Shield,
          title: "Security & Testing",
          description: "Implementing security best practices, authentication systems, and comprehensive testing strategies for reliable applications.",
          level: 87
        }
      ]
    },
    ar: {
      title: "المهارات التقنية",
      skills: [
        {
          icon: Zap,
          title: "تطوير FastAPI",
          description: "خبير في بناء واجهات برمجة تطبيقات REST عالية الأداء باستخدام FastAPI، بما في ذلك التوثيق التلقائي والتحقق ودعم غير المتزامن.",
          level: 95
        },
        {
          icon: Code,
          title: "نظام Python البيئي",
          description: "معرفة عميقة بأطر عمل Python والمكتبات وأفضل الممارسات لتطوير الواجهة الخلفية والاختبار والنشر.",
          level: 92
        },
        {
          icon: Database,
          title: "تصميم قواعد البيانات",
          description: "ماهر في قواعد بيانات SQL/NoSQL وتكامل ORM وتصميم مخططات قواعد بيانات فعالة للتطبيقات القابلة للتوسع.",
          level: 88
        },
        {
          icon: Cloud,
          title: "السحابة والتطوير التشغيلي",
          description: "خبرة في المنصات السحابية والحاويات باستخدام Docker وخطوط CI/CD والبنية التحتية كرمز.",
          level: 85
        },
        {
          icon: Cog,
          title: "الخدمات المصغرة",
          description: "تصميم وتنفيذ معمارية الخدمات المصغرة مع التواصل المناسب بين الخدمات والمراقبة وقابلية التوسع.",
          level: 90
        },
        {
          icon: Shield,
          title: "الأمان والاختبار",
          description: "تنفيذ أفضل ممارسات الأمان وأنظمة المصادقة واستراتيجيات الاختبار الشاملة للتطبيقات الموثوقة.",
          level: 87
        }
      ]
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 px-4"
      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="hero-title text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {content[currentLang].title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[currentLang].skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                className="glass-card p-8 hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
                
                {/* Skill Progress Bar */}
                <div className="skill-progress">
                  <motion.div 
                    className="skill-progress-inner"
                    initial={{ width: 0 }}
                    whileInView={{ width: isVisible ? `${skill.level}%` : 0 }}
                    transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
                <div className="text-right mt-2">
                  <span className="text-sm text-accent font-semibold">{skill.level}%</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}