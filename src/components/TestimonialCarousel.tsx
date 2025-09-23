'use client';

import { useState, useEffect, useRef } from 'react';
import AnimatedCounter from './AnimatedCounter';
import InlineAnimatedCounter from './InlineAnimatedCounter';

// Testimonial data structure
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  companyLogo: string;
  content: string;
  rating: number;
  industry: string;
  results: string;
  location: string;
}

// Professional testimonial data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    company: "TechFlow Solutions",
    companyLogo: "TF",
    content: "SavantX transformed our entire digital infrastructure. Their enterprise CRM solution not only met our complex requirements but exceeded them. The implementation was seamless, and the results were immediate.",
    rating: 5,
    industry: "Technology Services",
    results: "340% increase in lead conversion",
    location: "San Francisco, CA"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Founder & Chief Executive Officer",
    company: "InnovateLabs",
    companyLogo: "IL",
    content: "Working with SavantX was a game-changer for our startup. They delivered an enterprise-grade platform that scaled beautifully with our rapid growth from 10 to 500+ employees.",
    rating: 5,
    industry: "Software Development",
    results: "500% growth in 18 months",
    location: "Austin, TX"
  },
  {
    id: 3,
    name: "Emily Thompson",
    role: "Head of Digital Transformation",
    company: "RetailMax Group",
    companyLogo: "RM",
    content: "The level of expertise and professionalism from the SavantX team is exceptional. They understood our retail challenges and delivered a solution that transformed our customer experience.",
    rating: 5,
    industry: "Retail & E-commerce",
    results: "280% improvement in customer engagement",
    location: "New York, NY"
  },
  {
    id: 4,
    name: "David Park",
    role: "Vice President of Operations",
    company: "GlobalTech Industries",
    companyLogo: "GT",
    content: "SavantX doesn't just deliver software; they deliver business transformation. Their solution streamlined our complex operations across 15 countries and multiple time zones.",
    rating: 5,
    industry: "Manufacturing",
    results: "250% increase in operational efficiency",
    location: "Chicago, IL"
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Director of Sales Operations",
    company: "Enterprise Solutions Pro",
    companyLogo: "ES",
    content: "The CRM system SavantX built for us is nothing short of remarkable. It's intuitive, powerful, and has become the backbone of our sales organization.",
    rating: 5,
    industry: "Business Consulting",
    results: "195% increase in sales productivity",
    location: "Seattle, WA"
  },
  {
    id: 6,
    name: "James Mitchell",
    role: "Chief Innovation Officer",
    company: "FutureVision Corp",
    companyLogo: "FV",
    content: "SavantX brought our vision to life with precision and innovation. Their technical expertise and strategic thinking helped us launch our platform ahead of schedule.",
    rating: 5,
    industry: "Financial Technology",
    results: "Launched 3 months ahead of schedule",
    location: "Boston, MA"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCards, setVisibleCards] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Responsive card visibility
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = testimonials.length - visibleCards;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, visibleCards]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = testimonials.length - visibleCards;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = testimonials.length - visibleCards;
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section className="pt-0 pb-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full animate-float-gentle blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200/20 rounded-full animate-float-gentle delay-500 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-200/15 rounded-full animate-float-gentle delay-1000 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20 mt-20">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-5 py-2.5 rounded-full text-sm font-medium mb-8 border border-slate-200">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Client Success Stories
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
            Trusted by enterprise
            <span className="block text-blue-600">leaders worldwide</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Discover how leading organizations are achieving remarkable results with our enterprise solutions
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group border border-slate-200 hover:border-blue-300"
          >
            <svg className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group border border-slate-200 hover:border-blue-300"
          >
            <svg className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div 
            ref={carouselRef}
            className="overflow-hidden mx-16"
          >
            <div 
              className="flex transition-transform duration-800 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`flex-shrink-0 px-4 ${
                    visibleCards === 1 ? 'w-full' : 
                    visibleCards === 2 ? 'w-1/2' : 'w-1/3'
                  }`}
                >
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden h-[520px]">
                    {/* Quote Icon */}
                    <div className="absolute top-8 right-8 text-slate-200 group-hover:text-blue-200 transition-colors duration-300">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="p-6 h-full flex flex-col">
                      {/* Company Logo & Industry */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-base">
                              {testimonial.companyLogo}
                            </span>
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-slate-900">{testimonial.company}</h4>
                            <p className="text-xs text-slate-500">{testimonial.industry}</p>
                          </div>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-slate-700 text-sm leading-relaxed mb-4 flex-grow font-normal italic overflow-hidden" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 5,
                        WebkitBoxOrient: 'vertical' as const
                      }}>
                        &ldquo;{testimonial.content}&rdquo;
                      </blockquote>

                      {/* Results Badge */}
                      <div className="mb-4">
                        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-800 px-3 py-1.5 rounded-lg text-xs font-semibold">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          <InlineAnimatedCounter text={testimonial.results} duration={2000} />
                        </div>
                      </div>

                      {/* Author Info */}
                      <div className="border-t border-slate-100 pt-4 mt-auto">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="text-base font-semibold text-slate-900 mb-1">
                              {testimonial.name}
                            </div>
                            <div className="text-slate-600 text-xs mb-1">
                              {testimonial.role}
                            </div>
                            <div className="text-slate-500 text-xs flex items-center gap-1">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {testimonial.location}
                            </div>
                          </div>
                          <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center ml-3">
                            <span className="text-slate-600 font-bold text-lg">
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-12 gap-3">
            {Array.from({ length: testimonials.length - visibleCards + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-slate-300 hover:bg-slate-400 w-2'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 bg-slate-50 rounded-3xl p-12 border border-slate-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Proven Results Across Industries</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">Our enterprise solutions deliver measurable impact for organizations worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2 group-hover:scale-105 transition-transform duration-300">
                <AnimatedCounter end={250} suffix="+" duration={2500} />
              </div>
              <div className="text-slate-600 font-medium">Enterprise Projects</div>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2 group-hover:scale-105 transition-transform duration-300">
                <AnimatedCounter end={98} suffix="%" duration={2200} />
              </div>
              <div className="text-slate-600 font-medium">Client Satisfaction</div>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2 group-hover:scale-105 transition-transform duration-300">
                <AnimatedCounter end={5} suffix=".0★" duration={1800} />
              </div>
              <div className="text-slate-600 font-medium">Average Rating</div>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2 group-hover:scale-105 transition-transform duration-300">
                <AnimatedCounter end={24} suffix="/7" duration={1500} />
              </div>
              <div className="text-slate-600 font-medium">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
