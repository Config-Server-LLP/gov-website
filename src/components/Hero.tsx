import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative h-[600px] mt-20">
      {/* Hero Image */}
      <div className="absolute inset-0 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759738098462-90ffac98c554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2aWxsYWdlJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2MzMwNzE3OHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Village community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-blue-900/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <div className="inline-block px-4 py-2 bg-orange-500 rounded-md mb-4">
            <span className="text-sm tracking-wide">{t.hero.badge}</span>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 text-white">
            {t.hero.title}
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-50 leading-relaxed">
            {t.hero.description}
          </p>
          <div className="h-1 w-24 bg-green-500 rounded"></div>
        </div>
      </div>
    </div>
  );
}