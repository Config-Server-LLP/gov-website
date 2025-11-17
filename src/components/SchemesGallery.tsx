import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

// Import the image directly
import ZPFMSImage from './images/ZPFMS.png'

interface Scheme {
  id: number;
  title: string;
  category: string;
  description: string;
  benefits: string[];
  eligibility: string[];
  image: string;
  externalLink?: string;
}

export function SchemesGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const schemes: Scheme[] = [
    {
      id: 1,
      title: 'ZPFMS',
      category: t.schemes.categories.housing,
      description:
        'Zilla Parishad Financial Management System - A comprehensive financial management platform for district administration.',
      benefits: [
        'Streamlined financial management',
        'Real-time tracking of funds',
        'Transparent accounting system',
        'Easy fund allocation and disbursement',
      ],
      eligibility: [
        'Government officials and administrators',
        'Authorized district personnel',
        'Registered government departments',
        'Valid login credentials required',
      ],
      image: ZPFMSImage, // Use the imported image
      externalLink: 'https://www.zpfms.com/login.aspx'
    },
    {
      id: 2,
      title: 'Kisan Samman Nidhi',
      category: t.schemes.categories.agriculture,
      description:
        'PM-KISAN is a Central Sector scheme providing income support to all landholding farmers families to supplement their financial needs for procuring various inputs.',
      benefits: [
        '₹6,000 per year in three equal installments',
        'Direct benefit transfer to bank accounts',
        'Support for agricultural inputs',
        'No limit on family landholding size',
      ],
      eligibility: [
        'All landholding farmer families',
        'Valid Aadhaar card',
        'Bank account with active status',
        'Land ownership documents',
      ],
      image: 'https://images.unsplash.com/photo-1600150806237-a7dffed6b53c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NjMzNzE3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Mid-Day Meal Scheme',
      category: t.schemes.categories.education,
      description:
        'The scheme provides free lunch on working days for children in government schools to boost enrollment, retention and attendance while simultaneously improving nutritional levels.',
      benefits: [
        'Free nutritious meals to school children',
        'Improved enrollment and attendance',
        'Better nutritional status',
        'Enhanced learning capacity',
      ],
      eligibility: [
        'All children studying in government schools',
        'Classes I to VIII',
        'Children in aided schools also covered',
        'No discrimination based on caste or religion',
      ],
      image: 'https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBpbmRpYXxlbnwxfHx8fDE3NjMzNzE3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Ayushman Bharat',
      category: t.schemes.categories.healthcare,
      description:
        'A flagship scheme providing health insurance coverage to economically vulnerable families, ensuring access to quality healthcare services without financial burden.',
      benefits: [
        'Health cover of ₹5 lakh per family per year',
        'Cashless treatment at empanelled hospitals',
        'Coverage for pre and post-hospitalization',
        'No restriction on family size and age',
      ],
      eligibility: [
        'Families identified through SECC database',
        'Rural families with specific deprivation criteria',
        'Urban families in specified occupational categories',
        'Valid Aadhaar card for verification',
      ],
      image: 'https://images.unsplash.com/photo-1648964388258-e71b58683ed0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwaW5kaWF8ZW58MXx8fHwxNzYzMzcxNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: 'MGNREGA',
      category: t.schemes.categories.employment,
      description:
        'Mahatma Gandhi National Rural Employment Guarantee Act provides guaranteed 100 days of wage employment to rural households whose adult members volunteer to do unskilled manual work.',
      benefits: [
        '100 days of guaranteed wage employment',
        'Creation of durable community assets',
        'Women empowerment with 33% reservation',
        'Strengthening rural livelihood security',
      ],
      eligibility: [
        'Adult members of rural households',
        'Willingness to do unskilled manual work',
        'Job card issued by local Gram Panchayat',
        'Work provided within 15 days of application',
      ],
      image: 'https://images.unsplash.com/photo-1689428615940-64d549e2231c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2MzM3MTcwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: 'Beti Bachao Beti Padhao',
      category: t.schemes.categories.womenEmpowerment,
      description:
        'A social campaign addressing gender discrimination, promoting education and ensuring survival and protection of the girl child through coordinated and convergent efforts.',
      benefits: [
        'Financial incentives for girl child education',
        'Awareness about gender discrimination',
        'Improved sex ratio',
        'Enhanced enrollment of girls in schools',
      ],
      eligibility: [
        'Girl child born in the family',
        'Account opened under Sukanya Samriddhi Yojana',
        'Parents must be Indian citizens',
        'Benefits until girl completes 21 years',
      ],
      image: 'https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBpbmRpYXxlbnwxfHx8fDE3NjMzNzE3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 7,
      title: 'Swachh Bharat Mission',
      category: t.schemes.categories.sanitation,
      description:
        'A national campaign to eliminate open defecation and improve solid waste management in rural and urban areas.',
      benefits: [
        'Construction of household toilets',
        'Solid waste management facilities',
        'Improved public health and hygiene',
        'Cleaner environment for communities',
      ],
      eligibility: [
        'Households without toilet facilities',
        'Rural and urban local bodies',
        'Community participation required',
        'Government subsidies available',
      ],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5pdGF0aW9uJTIwaW5kaWF8ZW58MXx8fHwxNzYzMzcxNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 8,
      title: 'Ujjwala Yojana',
      category: t.schemes.categories.womenEmpowerment,
      description:
        'Provides free LPG connections to women from below poverty line families to safeguard their health and reduce cooking time.',
      benefits: [
        'Free LPG connection with regulator and hose',
        'First refill and stove provided free',
        'Improved health for women and children',
        'Reduced indoor air pollution',
      ],
      eligibility: [
        'Women from below poverty line families',
        'No LPG connection in household',
        'Valid BPL ration card',
        'Aadhaar card of adult woman member',
      ],
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxscGclMjBnYXMlMjBjb29raW5nfGVufDF8fHx8MTc2MzM3MTcwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 9,
      title: 'Digital India',
      category: t.schemes.categories.technology,
      description:
        'A flagship program to transform India into a digitally empowered society and knowledge economy.',
      benefits: [
        'Digital infrastructure as utility to every citizen',
        'Governance and services on demand',
        'Digital empowerment of citizens',
        'Universal digital literacy',
      ],
      eligibility: [
        'All Indian citizens',
        'Access to digital services',
        'Aadhaar card for authentication',
        'Bank account for digital payments',
      ],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5kaWF8ZW58MXx8fHwxNzYzMzcxNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(schemes.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleSchemes = () => {
    const startIndex = currentSlide * cardsPerSlide;
    return schemes.slice(startIndex, startIndex + cardsPerSlide);
  };

  const handleCardClick = (scheme: Scheme) => {
    if (scheme.externalLink) {
      window.open(scheme.externalLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 bg-green-50 text-green-600 rounded-full mb-4">
          <span className="text-sm">{t.schemes.badge}</span>
        </div>
        <h2 className="text-4xl text-gray-900 mb-4">{t.schemes.title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t.schemes.description}
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Left Arrow - LARGE SIZE */}
          {totalSlides > 1 && (
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 z-10 bg-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-green-50 border-2 border-gray-300 hover:border-green-500"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-8 h-8 text-gray-800 hover:text-green-700" />
            </button>
          )}

          {/* Scheme Cards */}
          {getVisibleSchemes().map((scheme) => (
            <Card
              key={scheme.id}
              onClick={() => handleCardClick(scheme)}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group border-none"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={scheme.image}
                  alt={scheme.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-white/90 text-gray-900">
                  {scheme.category}
                </Badge>
                {/* External Link Indicator */}
                {scheme.externalLink && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white p-1 rounded-full">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {scheme.title}
                  </h3>
                  {scheme.externalLink && (
                    <ExternalLink className="w-4 h-4 text-green-600 flex-shrink-0" />
                  )}
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">{scheme.description}</p>
                <div className="mt-4">
                  <span className="text-sm text-green-600 group-hover:underline">
                    {scheme.externalLink ? 'Visit Website →' : `${t.schemes.viewDetails} →`}
                  </span>
                </div>
              </div>
            </Card>
          ))}

          {/* Right Arrow - LARGE SIZE */}
          {totalSlides > 1 && (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 z-10 bg-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-green-50 border-2 border-gray-300 hover:border-green-500"
              aria-label="Next slide"
            >
              <ChevronRight className="w-8 h-8 text-gray-800 hover:text-green-700" />
            </button>
          )}
        </div>

        {/* Slide Indicators */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-green-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}