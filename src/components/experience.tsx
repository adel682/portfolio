import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2 } from 'lucide-react';

interface ExperienceProps {
  currentLang: 'en' | 'ar';
}

export function Experience({ currentLang }: ExperienceProps) {
  const content = {
    en: {
      title: "Professional Experience",
      experiences: [
        {
          id: 1,
          period: "2023 - Present",
          title: "Senior Backend Developer",
          company: "TechCorp Solutions",
          location: "Remote",
          description: "Leading the development of scalable microservices architecture using FastAPI and Python. Responsible for designing and implementing high-performance APIs that serve millions of requests daily.",
          achievements: [
            "Architected microservices handling 10M+ daily requests",
            "Reduced API response time by 60% through optimization",
            "Led a team of 5 developers on critical projects",
            "Implemented comprehensive monitoring and alerting systems"
          ],
          tech: ["FastAPI", "Python", "Docker", "Kubernetes", "PostgreSQL", "Redis"]
        },
        {
          id: 2,
          period: "2021 - 2023",
          title: "Backend Developer",
          company: "StartupXYZ",
          location: "San Francisco, CA",
          description: "Developed and maintained RESTful APIs for a fintech platform processing thousands of transactions. Focused on security, scalability, and performance optimization.",
          achievements: [
            "Built secure payment processing APIs",
            "Implemented real-time transaction monitoring",
            "Designed automated testing frameworks",
            "Collaborated with cross-functional teams"
          ],
          tech: ["Django", "FastAPI", "PostgreSQL", "Redis", "AWS", "Docker"]
        },
        {
          id: 3,
          period: "2019 - 2021",
          title: "Full Stack Developer",
          company: "Digital Agency Pro",
          location: "New York, NY",
          description: "Developed web applications for various clients using modern technologies. Specialized in creating efficient backend systems and intuitive user interfaces.",
          achievements: [
            "Delivered 15+ client projects on time",
            "Improved application performance by 40%",
            "Mentored junior developers",
            "Established development best practices"
          ],
          tech: ["Python", "Django", "React", "PostgreSQL", "MongoDB"]
        }
      ]
    },
    ar: {
      title: "الخبرة المهنية",
      experiences: [
        {
          id: 1,
          period: "2023 - الحاضر",
          title: "مطور واجهة خلفية أول",
          company: "TechCorp Solutions",
          location: "عن بُعد",
          description: "قيادة تطوير معمارية الخدمات المصغرة القابلة للتوسع باستخدام FastAPI وPython. مسؤول عن تصميم وتنفيذ واجهات برمجة التطبيقات عالية الأداء التي تخدم ملايين الطلبات يوميًا.",
          achievements: [
            "تصميم خدمات مصغرة تتعامل مع أكثر من 10 مليون طلب يوميًا",
            "تقليل وقت استجابة API بنسبة 60% من خلال التحسين",
            "قيادة فريق من 5 مطورين في مشاريع حرجة",
            "تنفيذ أنظمة مراقبة وتنبيه شاملة"
          ],
          tech: ["FastAPI", "Python", "Docker", "Kubernetes", "PostgreSQL", "Redis"]
        },
        {
          id: 2,
          period: "2021 - 2023",
          title: "مطور واجهة خلفية",
          company: "StartupXYZ",
          location: "سان فرانسيسكو، كاليفورنيا",
          description: "تطوير وصيانة واجهات برمجة التطبيقات RESTful لمنصة تكنولوجيا مالية تعالج آلاف المعاملات. التركيز على الأمان وقابلية التوسع وتحسين الأداء.",
          achievements: [
            "بناء واجهات برمجة تطبيقات معالجة دفع آمنة",
            "تنفيذ مراقبة المعاملات في الوقت الفعلي",
            "تصميم أطر اختبار تلقائية",
            "التعاون مع فرق متعددة الوظائف"
          ],
          tech: ["Django", "FastAPI", "PostgreSQL", "Redis", "AWS", "Docker"]
        },
        {
          id: 3,
          period: "2019 - 2021",
          title: "مطور متكامل",
          company: "Digital Agency Pro",
          location: "نيويورك، نيويورك",
          description: "تطوير تطبيقات الويب لعملاء مختلفين باستخدام التقنيات الحديثة. متخصص في إنشاء أنظمة خلفية فعالة وواجهات مستخدم بديهية.",
          achievements: [
            "تسليم أكثر من 15 مشروع عميل في الوقت المحدد",
            "تحسين أداء التطبيق بنسبة 40%",
            "توجيه المطورين المبتدئين",
            "وضع أفضل ممارسات التطوير"
          ],
          tech: ["Python", "Django", "React", "PostgreSQL", "MongoDB"]
        }
      ]
    }
  };

  return (
    <section 
      id="experience" 
      className="py-20 px-4"
      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="hero-title text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {content[currentLang].title}
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line hidden md:block"></div>

          {content[currentLang].experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'
              } md:w-1/2`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <div className="timeline-dot hidden md:block"></div>

              {/* Experience Card */}
              <div className="glass-card p-6 hover-lift">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-2">
                    <Calendar className="w-4 h-4" />
                    {experience.period}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {experience.title}
                  </h3>
                  <div className="flex items-center gap-4 text-muted-foreground text-sm">
                    <div className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      {experience.company}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {experience.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-foreground font-semibold mb-3">
                    {currentLang === 'en' ? 'Key Achievements:' : 'الإنجازات الرئيسية:'}
                  </h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-foreground font-semibold mb-3">
                    {currentLang === 'en' ? 'Technologies:' : 'التقنيات:'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}