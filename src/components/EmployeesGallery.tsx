import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Mail, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function EmployeesGallery() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const employees = [
    {
      id: 1,
      name: 'Rinal Singh',
      designation: t.employees.designations.bdo,
      department: t.employees.departments.administration,
      email: 'bdo@panchayat.gov.in',
      phone: '+91 98765 43210',
      image: '/images/employee1.jpg',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      designation: t.employees.designations.secretary,
      department: t.employees.departments.documentation,
      email: 'secretary@panchayat.gov.in',
      phone: '+91 98765 43211',
      image: '/images/employee2.jpg',
    },
    {
      id: 3,
      name: 'Amit Verma',
      designation: t.employees.designations.agriculture,
      department: t.employees.departments.agriculture,
      email: 'agriculture@panchayat.gov.in',
      phone: '+91 98765 43212',
      image: '/images/employee3.jpg',
    },
    {
      id: 4,
      name: 'Sumit Devi',
      designation: t.employees.designations.welfare,
      department: t.employees.departments.welfare,
      email: 'welfare@panchayat.gov.in',
      phone: '+91 98765 43213',
      image: '/images/employee4.jpeg',
    },
    {
      id: 5,
      name: 'Vikram Patel',
      designation: t.employees.designations.engineering,
      department: t.employees.departments.infrastructure,
      email: 'engineering@panchayat.gov.in',
      phone: '+91 98765 43214',
      image: '/images/employee5.jpeg',
    },
    {
      id: 6,
      name: 'Ankit Desai',
      designation: t.employees.designations.education,
      department: t.employees.departments.education,
      email: 'education@panchayat.gov.in',
      phone: '+91 98765 43215',
      image: '/images/employee6.jpeg',
    },
    {
      id: 7,
      name: 'Manavi Gupta',
      designation: t.employees.designations.finance,
      department: t.employees.departments.finance,
      email: 'finance@panchayat.gov.in',
      phone: '+91 98765 43216',
      image: '/images/employee7.jpeg',
    },
    {
      id: 8,
      name: 'Kavita Reddy',
      designation: t.employees.designations.health,
      department: t.employees.departments.health,
      email: 'health@panchayat.gov.in',
      phone: '+91 98765 43217',
      image: '/images/employee8.jpeg',
    },
    {
      id: 9,
      name: 'Sanjay Mehta',
      designation: t.employees.designations.planning,
      department: t.employees.departments.planning,
      email: 'planning@panchayat.gov.in',
      phone: '+91 98765 43218',
      image: '/images/employee9.jpeg',
    },
  ];

  const cardsPerSlide = 4;
  const totalSlides = Math.ceil(employees.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleEmployees = () => {
    const startIndex = currentSlide * cardsPerSlide;
    return employees.slice(startIndex, startIndex + cardsPerSlide);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full mb-4">
          <span className="text-sm">{t.employees.badge}</span>
        </div>
        <h2 className="text-4xl text-gray-900 mb-4">{t.employees.title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t.employees.description}
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Left Arrow - Positioned in center left */}
          {totalSlides > 1 && (
            <button
              onClick={prevSlide}
              style={{ marginTop: "150px" }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 z-10 bg-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-green-50 border-2 border-gray-300 hover:border-green-500"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-8 h-8 text-gray-800 hover:text-green-700" />
            </button>
          )}

          {/* Employee Cards */}
          {getVisibleEmployees().map((employee) => (
            <Card
              key={employee.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-none"
            >
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 h-48 flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src={employee.image}
                  alt={employee.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  fallbackSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%233b82f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='48' fill='white'%3E👨‍💼%3C/text%3E%3C/svg%3E"
                />
                <Badge className="absolute top-4 right-4 bg-white text-blue-700">
                  {employee.department}
                </Badge>
              </div>
              
              <div className="p-6">
                <h3 className="text-gray-900 mb-1">{employee.name}</h3>
                <p className="text-blue-600 mb-4">{employee.designation}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{employee.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>{employee.phone}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {/* Right Arrow - Positioned in center right */}
          {totalSlides > 1 && (
             <button
              onClick={nextSlide}
              style={{ marginTop: "150px" }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 z-10 bg-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-green-50 border-2 border-gray-300 hover:border-green-500"
              aria-label="Next slide"
            >
              <ChevronRight className="w-8 h-8 text-gray-800 hover:text-green-700" />
            </button>
          )}
        </div>

        {/* Slide Indicators */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-600' 
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