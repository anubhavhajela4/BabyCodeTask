import React, { useState, useEffect } from 'react';
import { Menu, X, CheckCircle, Users, BookOpen, Award, Star, Phone, Mail, MapPin, ChevronRight, Globe, Target, TrendingUp } from 'lucide-react';

export default function IELTSInstitute() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Expert Speaking Practice",
      description: "One-on-one sessions with certified IELTS trainers to boost your speaking confidence and fluency."
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Full-Length Mock Tests",
      description: "Simulate real exam conditions with our comprehensive mock tests and detailed performance analytics."
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "AI Band Score Predictor",
      description: "Get instant feedback on your practice tests with our advanced AI-powered scoring system."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Personalized Study Plans",
      description: "Customized learning paths designed to target your weak areas and maximize your band score."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      score: "Band 8.5",
      text: "The speaking practice sessions were invaluable. I went from nervous to confident in just 6 weeks!",
      image: "PS"
    },
    {
      name: "Rahul Mehta",
      score: "Band 8.0",
      text: "Mock tests helped me understand the exam pattern perfectly. Achieved my target score on first attempt!",
      image: "RM"
    },
    {
      name: "Sarah Johnson",
      score: "Band 7.5",
      text: "The AI scoring system gave me instant feedback. It's like having a personal tutor available 24/7.",
      image: "SJ"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  IELTSXcel
                </h1>
                <p className="text-xs text-gray-500 font-medium">IELTS Excellence Center</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium text-sm">Home</a>
              <a href="#courses" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium text-sm">Courses</a>
              <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium text-sm">Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium text-sm">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium text-sm">Contact</a>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105 font-semibold text-sm">
                Book Free Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 space-y-3 border-t border-gray-100 animate-fade-in">
              <a href="#home" className="block text-gray-700 hover:text-emerald-600 transition-colors py-2 font-medium">Home</a>
              <a href="#courses" className="block text-gray-700 hover:text-emerald-600 transition-colors py-2 font-medium">Courses</a>
              <a href="#features" className="block text-gray-700 hover:text-emerald-600 transition-colors py-2 font-medium">Features</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-emerald-600 transition-colors py-2 font-medium">Testimonials</a>
              <a href="#contact" className="block text-gray-700 hover:text-emerald-600 transition-colors py-2 font-medium">Contact</a>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-semibold mt-2">
                Book Free Demo
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
                <TrendingUp className="w-4 h-4 mr-2" />
                Trusted by 10,000+ Students Worldwide
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Achieve Your Dream
                <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mt-2">
                  IELTS Band Score
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                Transform your IELTS preparation with personalized coaching, AI-powered feedback, and proven strategies from expert trainers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-200 transform hover:scale-105 font-semibold flex items-center justify-center group">
                  Get Started Today
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-emerald-600 hover:text-emerald-600 transition-all duration-200 font-semibold">
                  Watch Demo Video
                </button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-gray-900">10K+</p>
                  <p className="text-sm text-gray-600 mt-1">Students</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-gray-900">8.2</p>
                  <p className="text-sm text-gray-600 mt-1">Avg. Score</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-gray-900">97%</p>
                  <p className="text-sm text-gray-600 mt-1">Success Rate</p>
                </div>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Band Score Report</h3>
                    <Award className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">L</span>
                        </div>
                        <span className="font-semibold text-gray-700">Listening</span>
                      </div>
                      <span className="text-emerald-600 font-bold text-lg">8.5</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">R</span>
                        </div>
                        <span className="font-semibold text-gray-700">Reading</span>
                      </div>
                      <span className="text-emerald-600 font-bold text-lg">8.0</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">W</span>
                        </div>
                        <span className="font-semibold text-gray-700">Writing</span>
                      </div>
                      <span className="text-emerald-600 font-bold text-lg">7.5</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">S</span>
                        </div>
                        <span className="font-semibold text-gray-700">Speaking</span>
                      </div>
                      <span className="text-emerald-600 font-bold text-lg">8.0</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-semibold">Overall Band</span>
                      <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">8.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose GlobalSpeak Academy?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive IELTS preparation with cutting-edge technology and expert mentorship
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-white p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-emerald-200">
                <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from real students who achieved their target band scores
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed text-sm sm:text-base">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base mr-4 shadow-md">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-emerald-600 font-semibold text-sm sm:text-base">{testimonial.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Start Your IELTS Journey?</h2>
          <p className="text-lg sm:text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students and take the first step towards your dream score today.
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105 font-bold text-lg">
            Book Your Free Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">GlobalSpeak</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">Empowering students worldwide to achieve IELTS excellence since 2015.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mock Tests</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Study Materials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Practice Tests</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tips & Strategies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Contact Us</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>info@globalspeak.com</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                  <span>123 Education Plaza, Mumbai, India 400001</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 GlobalSpeak Academy. All rights reserved. | <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-white transition-colors">Terms of Service</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}