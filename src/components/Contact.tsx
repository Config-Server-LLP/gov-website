import { Mail, Phone, MapPin } from 'lucide-react';

import { Card } from './ui/card';

import { useLanguage } from '../contexts/LanguageContext';
 
export function Contact() {

  const { t } = useLanguage();
 
  const contactInfo = [

    {

      icon: Mail,

      title: t.contact.emailTitle,

      content: 'contact@panchayatsamiti.gov.in',

      subContent: 'info@panchayatsamiti.gov.in',

      color: 'from-blue-500 to-blue-600',

    },

    {

      icon: Phone,

      title: t.contact.phoneTitle,

      content: '+91 (0XXX) 123-4567',

      subContent: `${t.map.contact.helpline} +91 98765 43210`,

      color: 'from-green-500 to-green-600',

    },

    {

      icon: MapPin,

      title: t.contact.addressTitle,

      content: `${t.map.address.line1}, ${t.map.address.line2}`,

      subContent: `${t.map.address.line3}, ${t.map.address.line4}`,

      color: 'from-orange-500 to-orange-600',

    },

  ];
 
  return (
<div className="container mx-auto px-4">
<div className="text-center mb-12">
<div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full mb-4">
<span className="text-sm">{t.contact.badge}</span>
</div>
<h2 className="text-4xl text-gray-900 mb-4">{t.contact.title}</h2>
<p className="text-gray-600 max-w-2xl mx-auto">

          {t.contact.description}
</p>
</div>
 
      <div className="grid lg:grid-cols-3 gap-6">

        {contactInfo.map((info, index) => {

          const Icon = info.icon;

          return (
<Card key={index} className="p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300">
<div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center mb-4`}>
<Icon className="w-7 h-7 text-white" />
</div>
<h3 className="text-gray-900 mb-2">{info.title}</h3>
<p className="text-gray-700 mb-1">{info.content}</p>
<p className="text-sm text-gray-600">{info.subContent}</p>
</Card>

          );

        })}
</div>
</div>

  );

}
 