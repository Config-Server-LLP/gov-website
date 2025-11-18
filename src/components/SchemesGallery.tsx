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
      image: ZPFMSImage,
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
    // Additional schemes for second slide
    {
      id: 10,
      title: 'Pradhan Mantri Awas Yojana',
      category: t.schemes.categories.housing,
      description:
        'Housing for All by 2022 mission provides affordable housing to the urban poor with a target of building 20 million affordable houses.',
      benefits: [
        'Interest subsidy on home loans',
        'Financial assistance for construction',
        'Preference to women and senior citizens',
        'Infrastructure development support',
      ],
      eligibility: [
        'Economically weaker sections',
        'Low income groups',
        'Women and senior citizens',
        'First-time home buyers',
      ],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzaW5nJTIwaW5kaWF8ZW58MXx8fHwxNzYzMzcxNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 11,
      title: 'National Rural Livelihood Mission',
      category: t.schemes.categories.employment,
      description:
        'A poverty alleviation project focused on promoting self-employment and organization of rural poor through Self Help Groups.',
      benefits: [
        'Financial inclusion through bank linkages',
        'Skill development and training',
        'Market access for products',
        'Social mobilization and empowerment',
      ],
      eligibility: [
        'Rural poor families',
        'Women from below poverty line',
        'Members of Self Help Groups',
        'Willingness to participate in training',
      ],
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGVtcGxveW1lbnR8ZW58MXx8fHwxNzYzMzcxNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 12,
      title: 'National Health Mission',
      category: t.schemes.categories.healthcare,
      description:
        'Comprehensive healthcare initiative to address health needs of rural and urban populations through strengthening health systems.',
      benefits: [
        'Free diagnostic services',
        'Maternal and child healthcare',
        'Preventive healthcare programs',
        'Health infrastructure development',
      ],
      eligibility: [
        'All citizens in rural and urban areas',
        'Pregnant women and children',
        'Economically disadvantaged groups',
        'Residents of underserved areas',
      ],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwaW5kaWF8ZW58MXx8fHwxNzYzMzcxNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 13,
      title: 'Skill India Mission',
      category: t.schemes.categories.employment,
      description:
        'A national campaign to train over 400 million people in different skills by 2022 to boost employment and entrepreneurship.',
      benefits: [
        'Industry-relevant skill training',
        'Certification and placement assistance',
        'Financial support for training',
        'Entrepreneurship development',
      ],
      eligibility: [
        'Indian citizens above 15 years',
        'School dropouts and unemployed youth',
        'Women and disadvantaged groups',
        'Willingness to undergo training',
      ],
      image: 'https://images.unsplash.com/photo-1551836026-d5c8c2a2294c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2lsbCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2MzM3MTcwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 14,
      title: 'Startup India',
      category: t.schemes.categories.technology,
      description:
        'An initiative to build a strong ecosystem for nurturing innovation and startups to drive sustainable economic growth.',
      benefits: [
        'Tax exemptions for 3 years',
        'Simplified compliance regime',
        'Funding support and incentives',
        'Intellectual property rights support',
      ],
      eligibility: [
        'Registered startups in India',
        'Innovative business ideas',
        'Companies less than 5 years old',
        'Annual turnover under ₹100 crore',
      ],
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwaW5kaWF8ZW58MXx8fHwxNzYzMzcxNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 15,
      title: 'Smart Cities Mission',
      category: t.schemes.categories.infrastructure,
      description:
        'An urban renewal program to develop 100 cities across India making them citizen-friendly and sustainable.',
      benefits: [
        'Improved urban infrastructure',
        'Smart solutions for utilities',
        'Enhanced quality of life',
        'Economic growth opportunities',
      ],
      eligibility: [
        'Residents of selected smart cities',
        'Urban local bodies',
        'Private sector partners',
        'Infrastructure developers',
      ],
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHl8ZW58MXx8fHwxNzYzMzcxNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 16,
      title: 'Atal Pension Yojana',
      category: t.schemes.categories.finance,
      description:
        'A pension scheme focused on the unorganized sector to provide old age income security with guaranteed returns.',
      benefits: [
        'Guaranteed minimum pension',
        'Flexible contribution options',
        'Government co-contribution',
        'Tax benefits under Section 80CCD',
      ],
      eligibility: [
        'Indian citizens between 18-40 years',
        'Bank account with Aadhaar linkage',
        'Unorganized sector workers',
        'No income tax payer',
      ],
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW5zaW9uJTIwc2NoZW1lfGVufDF8fHx8MTc2MzM3MTcwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 17,
      title: 'Pradhan Mantri Jan Dhan Yojana',
      category: t.schemes.categories.finance,
      description:
        'National mission for financial inclusion to ensure access to financial services like banking, credit, insurance.',
      benefits: [
        'Zero balance bank account',
        'RuPay debit card with insurance',
        'Overdraft facility',
        'Direct benefit transfer',
      ],
      eligibility: [
        'All Indian citizens',
        'No existing bank account',
        'Valid Aadhaar card',
        'Age 10 years and above',
      ],
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwaW5kaWF8ZW58MXx8fHwxNzYzMzcxNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 18,
      title: 'National Education Policy',
      category: t.schemes.categories.education,
      description:
        'Comprehensive framework to transform the education system in India with focus on holistic development and skills.',
      benefits: [
        'Multidisciplinary education',
        'Flexible curriculum choices',
        'Digital and online learning',
        'Vocational training integration',
      ],
      eligibility: [
        'All students in India',
        'Educational institutions',
        'Teachers and educators',
        'Skill development centers',
      ],
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBzeXN0ZW18ZW58MXx8fHwxNzYzMzcxNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const cardsPerSlide = 9; // 9 cards per slide (3 rows × 3 cards)
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
        {/* Cards Grid - 3 columns for 3 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Left Arrow - Centered */}
          {totalSlides > 1 && (
            <button
              onClick={prevSlide}
               style={{ marginTop: "550px" }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-green-50 border-2 border-gray-300 hover:border-green-500"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-8 h-8 text-gray-800 hover:text-green-700" />
            </button>
          )}

          {/* Scheme Cards - 9 cards displayed in 3×3 grid */}
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

          {/* Right Arrow - Centered */}
          {totalSlides > 1 && (
            <button
              onClick={nextSlide}
                             style={{ marginTop: "550px" }}

              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-green-50 border-2 border-gray-300 hover:border-green-500"
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