import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ContactProps {
  currentLang: 'en' | 'ar';
}

export function Contact({ currentLang }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const content = {
    en: {
      title: "Let's Work Together",
      subtitle: "Ready to bring your backend ideas to life? Let's discuss your project and create something amazing together.",
      form: {
        name: "Your Name",
        email: "Email Address",
        subject: "Project Subject",
        message: "Tell me about your project...",
        send: "Send Message",
        sending: "Sending..."
      },
      contact: {
        email: "Email Me",
        github: "GitHub",
        linkedin: "LinkedIn",
        twitter: "Twitter"
      },
      success: "Message sent successfully! I'll get back to you soon.",
      error: "Something went wrong. Please try again."
    },
    ar: {
      title: "لنعمل معًا",
      subtitle: "مستعد لتحقيق أفكار الواجهة الخلفية؟ دعنا نناقش مشروعك وننشئ شيئًا مذهلاً معًا.",
      form: {
        name: "اسمك",
        email: "عنوان البريد الإلكتروني",
        subject: "موضوع المشروع",
        message: "أخبرني عن مشروعك...",
        send: "إرسال الرسالة",
        sending: "جاري الإرسال..."
      },
      contact: {
        email: "راسلني",
        github: "GitHub",
        linkedin: "LinkedIn",
        twitter: "Twitter"
      },
      success: "تم إرسال الرسالة بنجاح! سأعود إليك قريبًا.",
      error: "حدث خطأ ما. يرجى المحاولة مرة أخرى."
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Success!",
        description: content[currentLang].success,
        duration: 5000,
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: content[currentLang].error,
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactLinks = [
    {
      icon: Mail,
      label: content[currentLang].contact.email,
      href: "mailto:codebrain@example.com",
      color: "text-blue-400"
    },
    {
      icon: Github,
      label: content[currentLang].contact.github,
      href: "https://github.com/adel682",
      color: "text-gray-400"
    },
    {
      icon: Linkedin,
      label: content[currentLang].contact.linkedin,
      href: "https://linkedin.com/in/codebrain",
      color: "text-blue-500"
    },
    {
      icon: Twitter,
      label: content[currentLang].contact.twitter,
      href: "https://twitter.com/codebrain",
      color: "text-sky-400"
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 px-4"
      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="hero-title text-3xl md:text-4xl font-bold mb-6">
            {content[currentLang].title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {content[currentLang].subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="glass-card p-8"
            initial={{ opacity: 0, x: currentLang === 'ar' ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold text-foreground">
                {currentLang === 'en' ? 'Send a Message' : 'إرسال رسالة'}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="name"
                    placeholder={content[currentLang].form.name}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background-secondary border-accent/20 focus:border-accent"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder={content[currentLang].form.email}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background-secondary border-accent/20 focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <Input
                  name="subject"
                  placeholder={content[currentLang].form.subject}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-background-secondary border-accent/20 focus:border-accent"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder={content[currentLang].form.message}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-background-secondary border-accent/20 focus:border-accent resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-brand w-full flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    {content[currentLang].form.sending}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {content[currentLang].form.send}
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: currentLang === 'ar' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6 text-accent" />
                {currentLang === 'en' ? 'Get in Touch' : 'تواصل معي'}
              </h3>
              
              <div className="space-y-4">
                {contactLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg border border-accent/10 hover:border-accent/30 transition-all duration-300 group hover-lift"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Icon className={`w-6 h-6 ${link.color} group-hover:scale-110 transition-transform`} />
                      <span className="text-foreground group-hover:text-accent transition-colors">
                        {link.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-foreground font-semibold">
                  {currentLang === 'en' ? 'Available for Projects' : 'متاح للمشاريع'}
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                {currentLang === 'en' 
                  ? "Currently accepting new projects and collaborations. Response time: 24-48 hours."
                  : "أقبل حاليًا مشاريع وتعاونات جديدة. وقت الاستجابة: 24-48 ساعة."
                }
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}