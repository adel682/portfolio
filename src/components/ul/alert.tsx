import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Shop } from '@/components/Shop';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [currentLang, setCurrentLang] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const toggleLanguage = () => {
    setCurrentLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  const seoContent = {
    en: {
      title: "CodeBrain - Backend Developer & FastAPI Expert | Python Microservices",
      description: "Expert Backend Developer specializing in FastAPI, Python, Microservices, and scalable cloud solutions. Professional digital products and mentorship for modern backend development.",
      keywords: "Backend Developer, FastAPI, Python, Microservices, API Development, Cloud Solutions, Digital Products, Software Architecture, RESTful APIs, Database Design"
    },
    ar: {
      title: "CodeBrain - مطور الواجهة الخلفية وخبير FastAPI | خدمات Python المصغرة",
      description: "خبير تطوير الواجهة الخلفية متخصص في FastAPI وPython والخدمات المصغرة والحلول السحابية القابلة للتوسع. منتجات رقمية احترافية وإرشاد لتطوير الواجهة الخلفية الحديثة.",
      keywords: "مطور الواجهة الخلفية، FastAPI، Python، الخدمات المصغرة، تطوير API، الحلول السحابية، المنتجات الرقمية، معمارية البرمجيات"
    }
  };

  return (
    <>
      <Helmet>
        <title>{seoContent[currentLang].title}</title>
        <meta name="description" content={seoContent[currentLang].description} />
        <meta name="keywords" content={seoContent[currentLang].keywords} />
        <meta name="author" content="CodeBrain" />
        <meta name="robots" content="index, follow" />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://codebrain.dev" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={seoContent[currentLang].title} />
        <meta property="og:description" content={seoContent[currentLang].description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codebrain.dev" />
        <meta property="og:image" content="https://codebrain.dev/og-image.jpg" />
        <meta property="og:site_name" content="CodeBrain" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoContent[currentLang].title} />
        <meta name="twitter:description" content={seoContent[currentLang].description} />
        <meta name="twitter:image" content="https://codebrain.dev/twitter-card.jpg" />
        <meta name="twitter:creator" content="@codebrain" />
        
        {/* Language and Direction */}
        <html lang={currentLang} dir={currentLang === 'ar' ? 'rtl' : 'ltr'} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "CodeBrain",
            "jobTitle": "Backend Developer & FastAPI Expert",
            "url": "https://codebrain.dev",
            "sameAs": [
              "https://github.com/adel682",
              "https://linkedin.com/in/codebrain",
              "https://twitter.com/codebrain"
            ],
            "knowsAbout": [
              "FastAPI",
              "Python",
              "Microservices",
              "API Development",
              "Cloud Computing",
              "Backend Development"
            ],
            "offers": {
              "@type": "Service",
              "serviceType": "Backend Development",
              "description": "Professional backend development services specializing in FastAPI, Python, and scalable cloud solutions"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Navigation currentLang={currentLang} onLanguageChange={toggleLanguage} />
        
        <main>
          <Hero currentLang={currentLang} />
          <About currentLang={currentLang} />
          <Skills currentLang={currentLang} />
          <Projects currentLang={currentLang} />
          <Shop currentLang={currentLang} />
          <Experience currentLang={currentLang} />
          <Contact currentLang={currentLang} />
        </main>
        
        <Footer currentLang={currentLang} />
      </div>
    </>
  );
};

export default Index;