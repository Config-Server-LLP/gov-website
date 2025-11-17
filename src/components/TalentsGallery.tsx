import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Trophy, Award, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function TalentsGallery() {
  const { t } = useLanguage();

  const talents = [
    {
      id: 1,
      name: 'Ravi Kumar',
      achievement: 'National Science Olympiad Gold Medal',
      category: t.talents.categories.education,
      year: '2024',
      description: 'Secured 1st position in the National Science Olympiad representing our region.',
      icon: '🎓',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      name: 'Meera Patel',
      achievement: 'State Level Sports Championship',
      category: t.talents.categories.sports,
      year: '2024',
      description: 'Won gold medal in 400m sprint at State Athletic Championship.',
      icon: '🏃‍♀️',
      color: 'from-green-500 to-green-600',
    },
    {
      id: 3,
      name: 'Arjun Singh',
      achievement: 'Best Organic Farmer Award',
      category: t.talents.categories.agriculture,
      year: '2024',
      description: 'Recognized for innovative organic farming practices and high yield production.',
      icon: '🌾',
      color: 'from-amber-500 to-amber-600',
    },
    {
      id: 4,
      name: 'Priyanka Sharma',
      achievement: 'State Youth Parliament Winner',
      category: t.talents.categories.debate,
      year: '2024',
      description: 'Best speaker at State Youth Parliament on social development issues.',
      icon: '🎤',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 5,
      name: 'Karan Desai',
      achievement: 'Traditional Art Excellence Award',
      category: t.talents.categories.arts,
      year: '2023',
      description: 'Recognized for preserving and promoting traditional art forms.',
      icon: '🎨',
      color: 'from-pink-500 to-pink-600',
    },
    {
      id: 6,
      name: 'Sneha Reddy',
      achievement: 'Young Entrepreneur Award',
      category: t.talents.categories.business,
      year: '2023',
      description: 'Started successful self-help group supporting women empowerment.',
      icon: '💼',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      id: 7,
      name: 'Rohit Verma',
      achievement: 'District Chess Champion',
      category: t.talents.categories.sports,
      year: '2023',
      description: 'Won district level chess championship and qualified for state level.',
      icon: '♟️',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      id: 8,
      name: 'Anjali Gupta',
      achievement: 'Community Service Recognition',
      category: t.talents.categories.socialService,
      year: '2023',
      description: 'Outstanding contribution in village cleanliness and awareness campaigns.',
      icon: '🤝',
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 9,
      name: 'Vikash Yadav',
      achievement: 'District Level Poetry Competition',
      category: t.talents.categories.literature,
      year: '2023',
      description: 'Winner of district level Hindi poetry competition.',
      icon: '📚',
      color: 'from-rose-500 to-rose-600',
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 bg-orange-50 text-orange-600 rounded-full mb-4">
          <span className="text-sm">{t.talents.badge}</span>
        </div>
        <h2 className="text-4xl text-gray-900 mb-4">{t.talents.title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t.talents.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {talents.map((talent) => (
          <Card
            key={talent.id}
            className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-none"
          >
            <div className={`relative bg-gradient-to-br ${talent.color} h-40 flex items-center justify-center`}>
              <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                {talent.icon}
              </div>
              <Badge className="absolute top-4 right-4 bg-white/90 text-gray-900">
                {talent.year}
              </Badge>
              <div className="absolute top-4 left-4">
                <Trophy className="w-6 h-6 text-white/80" />
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-gray-900 flex-1">{talent.name}</h3>
                <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
              </div>
              
              <Badge variant="outline" className="mb-3 text-xs">
                {talent.category}
              </Badge>

              <p className="text-blue-600 mb-3">{talent.achievement}</p>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {talent.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-orange-50 via-white to-green-50 rounded-xl border border-gray-200">
          <Award className="w-12 h-12 text-orange-500" />
          <div className="text-left">
            <h3 className="text-gray-900 mb-1">{t.talents.nominate.title}</h3>
            <p className="text-sm text-gray-600">
              {t.talents.nominate.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}