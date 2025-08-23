import { motion } from 'framer-motion';
import { Code2, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FooterProps {
  currentLang: 'en' | 'ar';
}

export function Footer({ currentLang }: FooterProps) {
  const content = {
    en: {
      copyright: "Made with passion by CodeBrain. All rights reserved.",
      scrollTop: "Back to Top"
    },
    ar: {
      copyright: "صنع بشغف من قبل CodeBrain. جميع الحقوق محفوظة.",
      scrollTop: "العودة للأعلى"
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-accent/10 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Logo and Copyright */}
          <div className="flex items-center gap-3">
            <Code2 className="w-6 h-6 text-accent" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>© 2024</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>{content[currentLang].copyright}</span>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="btn-outline flex items-center gap-2"
          >
            <ArrowUp className="w-4 h-4" />
            {content[currentLang].scrollTop}
          </Button>
        </motion.div>
      </div>
    </footer>
  );
}