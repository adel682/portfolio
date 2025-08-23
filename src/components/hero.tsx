import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Mail, Code, Server, Database, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  currentLang: 'en' | 'ar';
}

export function Hero({ currentLang }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const content = {
    en: {
      subtitle: "Backend Developer & FastAPI Expert",
      description: "Crafting high-performance, scalable backend solutions with modern Python frameworks. Specializing in FastAPI, microservices architecture, and cloud-native applications.",
      viewProjects: "View Projects",
      getInTouch: "Get In Touch"
    },
    ar: {
      subtitle: "مطور الواجهة الخلفية وخبير FastAPI",
      description: "إنشاء حلول خلفية عالية الأداء وقابلة للتوسع باستخدام أطر عمل Python الحديثة. متخصص في FastAPI ومعمارية الخدمات المصغرة والتطبيقات السحابية.",
      viewProjects: "عرض المشاريع",
      getInTouch: "تواصل معي"
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingElements = [
    { icon: Code, size: 'text-8xl', position: 'top-20 left-10' },
    { icon: Server, size: 'text-6xl', position: 'top-60 right-10' },
    { icon: Database, size: 'text-7xl', position: 'bottom-20 left-20' }
  ];

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Animated Background Elements */}
      {floatingElements.map((element, index) => {
        const Element = element.icon;
        return (
          <motion.div
            key={index}
            className={`floating-element ${element.position} ${element.size}`}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: index * 2,
              ease: "easeInOut"
            }}
          >
            <Element />
          </motion.div>
        );
      })}

      {/* Cursor Glow Effect */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-10"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-4xl mx-auto text-center px-4 z-20 relative">
        <motion.h1 
          className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          CodeBrain
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-secondary mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          {content[currentLang].subtitle}
        </motion.p>

        <motion.p 
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          {content[currentLang].description}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
        >
          <Button
            onClick={() => scrollToSection('projects')}
            className="btn-brand flex items-center gap-2 text-lg px-8 py-4"
          >
            <Rocket className="w-5 h-5" />
            {content[currentLang].viewProjects}
          </Button>
          
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="btn-outline flex items-center gap-2 text-lg px-8 py-4"
          >
            <Mail className="w-5 h-5" />
            {content[currentLang].getInTouch}
          </Button>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-accent" />
        </motion.div>
      </div>
    </section>
  );
}