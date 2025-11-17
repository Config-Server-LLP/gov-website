import { Users, Award, MapPin, Mail, FileText, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';

interface QuickLinksProps {
  onNavigate: (sectionId: string) => void;
}

export function QuickLinks({ onNavigate }: QuickLinksProps) {
  const { t } = useLanguage();

  const links = [
    {
      id: 'schemes',
      icon: FileText,
      title: t.quickLinks.schemes.title,
      description: t.quickLinks.schemes.description,
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'employees',
      icon: Users,
      title: t.quickLinks.employees.title,
      description: t.quickLinks.employees.description,
      color: 'from-green-500 to-green-600',
    },
    {
      id: 'talents',
      icon: Sparkles,
      title: t.quickLinks.talents.title,
      description: t.quickLinks.talents.description,
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 'contact',
      icon: Mail,
      title: t.quickLinks.contact.title,
      description: t.quickLinks.contact.description,
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <div className="container mx-auto px-4 -mt-20 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Card
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group bg-white border-none"
            >
              <div
                className={`w-14 h-14 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">{link.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{link.description}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}