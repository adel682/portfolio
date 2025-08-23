import { useState, useEffect } from 'react';
import { Menu, X, Code2, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  currentLang: 'en' | 'ar';
  onLanguageChange: () => void;
}

export function Navigation({ currentLang, onLanguageChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: { en: 'About', ar: 'حول' } },
    { id: 'skills', label: { en: 'Skills', ar: 'المهارات' } },
    { id: 'projects', label: { en: 'Projects', ar: 'المشاريع' } },
    { id: 'shop', label: { en: 'Shop', ar: 'المتجر' } },
    { id: 'experience', label: { en: 'Experience', ar: 'الخبرة' } },
    { id: 'contact', label: { en: 'Contact', ar: 'تواصل' } }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'nav-blur py-4' : 'bg-transparent py-6'
      }`}
      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Code2 className="w-8 h-8 text-accent mr-3" />
            <span className="hero-title text-2xl font-bold">CodeBrain</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-secondary hover:text-accent transition-colors duration-300 relative group"
              >
                {item.label[currentLang]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button
              onClick={onLanguageChange}
              variant="outline"
              size="sm"
              className="btn-outline border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Globe className="w-4 h-4 mr-2" />
              {currentLang === 'en' ? 'العربية' : 'English'}
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-accent"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-secondary hover:text-accent transition-colors duration-300 py-2"
              >
                {item.label[currentLang]}
              </button>
            ))}
            <Button
              onClick={onLanguageChange}
              variant="outline"
              size="sm"
              className="btn-outline w-full justify-start"
            >
              <Globe className="w-4 h-4 mr-2" />
              {currentLang === 'en' ? 'العربية' : 'English'}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}