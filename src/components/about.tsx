import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, TrendingUp, Headphones } from 'lucide-react';

interface AboutProps {
  currentLang: 'en' | 'ar';
}

export function About({ currentLang }: AboutProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, experience: 0, uptime: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const content = {
    en: {
      title: "About Me",
      description: "I'm a passionate Backend Developer with expertise in building robust, scalable APIs and microservices. With deep knowledge of FastAPI, Python, and modern cloud technologies, I help businesses create efficient backend systems that power their digital products.",
      stats: [
        { icon: Users, label: "Projects Completed", value: 50, suffix: "+" },
        { icon: Clock, label: "Years Experience", value: 5, suffix: "+" },
        { icon: TrendingUp, label: "Uptime Rate", value: 99, suffix: "%" },
        { icon: Headphones, label: "Support", value: 24, suffix: "/7" }
      ]
    },
    ar: {
      title: "حولي",
      description: "أنا مطور واجهة خلفية شغوف بخبرة في بناء واجهات برمجة تطبيقات قوية وقابلة للتوسع والخدمات المصغرة. مع معرفة عميقة بـ FastAPI وPython والتقنيات السحابية الحديثة، أساعد الشركات على إنشاء أنظمة خلفية فعالة تشغل منتجاتها الرقمية.",
      stats: [
        { icon: Users, label: "مشروع مكتمل", value: 50, suffix: "+" },
        { icon: Clock, label: "سنوات خبرة", value: 5, suffix: "+" },
        { icon: TrendingUp, label: "معدل التوفر", value: 99, suffix: "%" },
        { icon: Headphones, label: "دعم", value: 24, suffix: "/7" }
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const counters = content[currentLang].stats.map((stat, index) => ({
        target: stat.value,
        current: 0,
        increment: stat.value / steps
      }));

      const timer = setInterval(() => {
        let allComplete = true;
        
        counters.forEach((counter, index) => {
          if (counter.current < counter.target) {
            counter.current = Math.min(counter.current + counter.increment, counter.target);
            allComplete = false;
          }
        });

        setCounts({
          projects: Math.floor(counters[0].current),
          experience: Math.floor(counters[1].current),
          uptime: Math.floor(counters[2].current)
        });

        if (allComplete) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible, currentLang]);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 px-4"
      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="hero-title text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {content[currentLang].title}
        </motion.h2>

        <motion.p 
          className="text-lg md:text-xl text-muted-foreground mb-16 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {content[currentLang].description}
        </motion.p>

        <motion.div 
          className="glass-card p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content[currentLang].stats.map((stat, index) => {
              const Icon = stat.icon;
              let displayValue = stat.value;
              
              if (index === 0) displayValue = counts.projects;
              else if (index === 1) displayValue = counts.experience;
              else if (index === 2) displayValue = counts.uptime;

              return (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Icon className="w-8 h-8 text-accent mx-auto mb-4" />
                  <div className="stat-number">
                    {displayValue}{stat.suffix}
                  </div>
                  <div className="text-secondary text-sm mt-2">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}