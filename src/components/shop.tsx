import { motion } from 'framer-motion';
import { Package, Book, ShoppingCart, Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ShopProps {
  currentLang: 'en' | 'ar';
}

export function Shop({ currentLang }: ShopProps) {
  const content = {
    en: {
      title: "My Digital Products",
      subtitle: "Professional tools and resources to accelerate your development",
      products: [
        {
          id: 1,
          title: "FastAPI Pro Starter Kit",
          price: "$29.99",
          description: "Complete boilerplate with Auth, PostgreSQL, Redis, Docker, CI/CD, and Monitoring. Everything you need to start a production-ready FastAPI project.",
          image: <Package className="w-16 h-16" />,
          features: [
            "Complete Authentication System",
            "Database Migration Setup",
            "Redis Integration",
            "Docker Configuration",
            "CI/CD Pipeline",
            "Monitoring & Logging"
          ],
          tags: ["FastAPI", "Docker", "CI/CD", "PostgreSQL"],
          rating: 4.9,
          reviews: 127,
          link: "https://gumroad.com/l/fastapi-starter",
          preview: "#"
        },
        {
          id: 2,
          title: "FastAPI Advanced Guide",
          price: "$19.99",
          description: "In-depth eBook on building scalable APIs, microservices, and production-ready backends. 200+ pages of advanced patterns and best practices.",
          image: <Book className="w-16 h-16" />,
          features: [
            "Advanced Design Patterns",
            "Microservices Architecture",
            "Performance Optimization",
            "Security Best Practices",
            "Testing Strategies",
            "Real-world Examples"
          ],
          tags: ["eBook", "Guide", "Best Practices", "Microservices"],
          rating: 4.8,
          reviews: 89,
          link: "https://gumroad.com/l/fastapi-guide",
          preview: "#"
        },
        {
          id: 3,
          title: "API Design Masterclass",
          price: "$39.99",
          description: "Comprehensive video course covering API design principles, documentation, versioning, and advanced FastAPI techniques.",
          image: <Star className="w-16 h-16" />,
          features: [
            "8+ Hours of Video Content",
            "Hands-on Projects",
            "API Design Principles",
            "Advanced FastAPI Features",
            "Testing & Documentation",
            "Lifetime Access"
          ],
          tags: ["Video Course", "API Design", "FastAPI", "Projects"],
          rating: 5.0,
          reviews: 43,
          link: "#",
          preview: "#"
        }
      ],
      buttons: {
        buyNow: "Buy Now",
        preview: "Preview",
        learnMore: "Learn More"
      }
    },
    ar: {
      title: "منتجاتي الرقمية",
      subtitle: "أدوات وموارد احترافية لتسريع تطويرك",
      products: [
        {
          id: 1,
          title: "مجموعة بداية FastAPI الاحترافية",
          price: "$29.99",
          description: "قالب كامل مع المصادقة وPostgreSQL وRedis وDocker وCI/CD والمراقبة. كل ما تحتاجه لبدء مشروع FastAPI جاهز للإنتاج.",
          image: <Package className="w-16 h-16" />,
          features: [
            "نظام مصادقة كامل",
            "إعداد ترحيل قاعدة البيانات",
            "تكامل Redis",
            "تكوين Docker",
            "خط CI/CD",
            "المراقبة والتسجيل"
          ],
          tags: ["FastAPI", "Docker", "CI/CD", "PostgreSQL"],
          rating: 4.9,
          reviews: 127,
          link: "https://gumroad.com/l/fastapi-starter",
          preview: "#"
        },
        {
          id: 2,
          title: "دليل FastAPI المتقدم",
          price: "$19.99",
          description: "كتاب إلكتروني متعمق حول بناء واجهات برمجة التطبيقات القابلة للتوسع والخدمات المصغرة والواجهات الخلفية الجاهزة للإنتاج. أكثر من 200 صفحة من الأنماط المتقدمة وأفضل الممارسات.",
          image: <Book className="w-16 h-16" />,
          features: [
            "أنماط التصميم المتقدمة",
            "معمارية الخدمات المصغرة",
            "تحسين الأداء",
            "أفضل ممارسات الأمان",
            "استراتيجيات الاختبار",
            "أمثلة من العالم الحقيقي"
          ],
          tags: ["كتاب إلكتروني", "دليل", "أفضل الممارسات", "خدمات مصغرة"],
          rating: 4.8,
          reviews: 89,
          link: "https://gumroad.com/l/fastapi-guide",
          preview: "#"
        },
        {
          id: 3,
          title: "فصل تصميم واجهات برمجة التطبيقات الرئيسي",
          price: "$39.99",
          description: "دورة فيديو شاملة تغطي مبادئ تصميم واجهات برمجة التطبيقات والتوثيق والإصدار وتقنيات FastAPI المتقدمة.",
          image: <Star className="w-16 h-16" />,
          features: [
            "أكثر من 8 ساعات من محتوى الفيديو",
            "مشاريع عملية",
            "مبادئ تصميم واجهة برمجة التطبيقات",
            "ميزات FastAPI المتقدمة",
            "الاختبار والتوثيق",
            "وصول مدى الحياة"
          ],
          tags: ["دورة فيديو", "تصميم API", "FastAPI", "مشاريع"],
          rating: 5.0,
          reviews: 43,
          link: "#",
          preview: "#"
        }
      ],
      buttons: {
        buyNow: "اشتري الآن",
        preview: "معاينة",
        learnMore: "اعرف أكثر"
      }
    }
  };

  return (
    <section 
      id="shop" 
      className="py-20 px-4 bg-background-secondary/50"
      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="hero-title text-3xl md:text-4xl font-bold mb-4">
            {content[currentLang].title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {content[currentLang].subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[currentLang].products.map((product, index) => (
            <motion.div
              key={product.id}
              className="glass-card overflow-hidden group hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Product Header */}
              <div className="bg-gradient-brand p-8 text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                  {product.image}
                  <div className="mt-4">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-white/30'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm">({product.reviews})</span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-accent flex-1">{product.title}</h3>
                  <div className="text-2xl font-bold text-success ml-4">{product.price}</div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-accent mr-2 mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="tech-tag text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button 
                    className="btn-brand w-full"
                    onClick={() => window.open(product.link, '_blank')}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {content[currentLang].buttons.buyNow}
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="btn-outline flex-1"
                      onClick={() => window.open(product.preview, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {content[currentLang].buttons.preview}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-6">
            {currentLang === 'en' 
              ? "Need a custom solution? Let's discuss your project requirements."
              : "تحتاج حلاً مخصصًا؟ دعنا نناقش متطلبات مشروعك."
            }
          </p>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline"
          >
            {currentLang === 'en' ? 'Get Custom Quote' : 'احصل على عرض مخصص'}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}