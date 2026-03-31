"use client";

import React from 'react';
import {Abril_Fatface, Plus_Jakarta_Sans} from 'next/font/google';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Star, ArrowRight, Shield, Zap, BarChart3, Globe, Smartphone, CreditCard, Lock } from 'lucide-react';

const abrilFatface = Abril_Fatface({ weight: '400', subsets: ['latin'] });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function WhopLanding() {
  return (
    <div className={`min-h-screen bg-white text-gray-900 ${plusJakarta.className}`}>
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50" data-landright-section="Navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="data:image/webp;base64,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" alt="Whop" className="h-8 w-auto" />
              <span className="text-xl font-bold text-gray-900">Whop</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <span className="text-gray-600 hover:text-gray-900 cursor-pointer">Marketplace</span>
              <span className="text-gray-600 hover:text-gray-900 cursor-pointer">Creators</span>
              <span className="text-gray-600 hover:text-gray-900 cursor-pointer">Resources</span>
              <a href="https://www.linkedin.com/company/whop-io/about/" className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                Get started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32 overflow-hidden" data-landright-section="Hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 ${abrilFatface.className}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Build Your Digital Empire
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join the creator economy revolution. Whop empowers digital entrepreneurs to build, sell, and scale their products with the tools that matter most.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="https://www.linkedin.com/company/whop-io/about/" className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center space-x-2">
                <span>Get started</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Creator Cards */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            className="absolute top-20 left-10 bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-sm">Alex Chen</p>
                <p className="text-xs text-gray-500">Course Creator</p>
              </div>
            </div>
            <p className="text-2xl font-bold text-green-600">$47,320</p>
            <p className="text-xs text-gray-500">This month</p>
          </motion.div>
          
          <motion.div 
            className="absolute top-32 right-16 bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="font-semibold text-sm">Sarah Kim</p>
                <p className="text-xs text-gray-500">Digital Artist</p>
              </div>
            </div>
            <p className="text-2xl font-bold text-purple-600">2,847</p>
            <p className="text-xs text-gray-500">Active subscribers</p>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-20 left-1/4 bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-sm">Marcus Rivera</p>
                <p className="text-xs text-gray-500">Fitness Coach</p>
              </div>
            </div>
            <p className="text-2xl font-bold text-orange-600">4.9★</p>
            <p className="text-xs text-gray-500">Customer rating</p>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gray-50 py-16" data-landright-section="SocialProof">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-6 ${abrilFatface.className}`}>
              Trusted by Digital Pioneers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <p className="text-4xl font-bold text-purple-600 mb-2">$1B+</p>
                <p className="text-gray-600">Payments Processed</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-purple-600 mb-2">10K+</p>
                <p className="text-gray-600">Active Merchants</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-purple-600 mb-2">95%</p>
                <p className="text-gray-600">Seller Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Spotlights */}
      <section className="bg-white py-20" data-landright-section="CreatorSpotlights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl font-bold text-gray-900 mb-6 ${abrilFatface.className}`}>
              Creator Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real creators building real businesses with Whop's powerful platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Emma Rodriguez", type: "Photography Course", earnings: "$89,450", growth: "+247%", avatar: "bg-purple-500" },
              { name: "David Park", type: "Trading Signals", earnings: "$156,780", growth: "+189%", avatar: "bg-orange-500" },
              { name: "Lisa Chen", type: "Design Templates", earnings: "$67,230", growth: "+312%", avatar: "bg-green-500" },
              { name: "Jordan Smith", type: "Fitness Programs", earnings: "$94,560", growth: "+198%", avatar: "bg-blue-500" },
              { name: "Maya Patel", type: "Language Courses", earnings: "$78,940", growth: "+276%", avatar: "bg-pink-500" },
              { name: "Alex Thompson", type: "Music Production", earnings: "$112,340", growth: "+234%", avatar: "bg-indigo-500" }
            ].map((creator, index) => (
              <motion.div 
                key={creator.name}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 ${creator.avatar} rounded-full flex items-center justify-center text-white font-bold`}>
                    {creator.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{creator.name}</h3>
                    <p className="text-sm text-gray-500">{creator.type}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Monthly Revenue</span>
                    <span className="font-bold text-green-600">{creator.earnings}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Growth Rate</span>
                    <span className="font-bold text-purple-600">{creator.growth}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-20" data-landright-section="Features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl font-bold text-gray-900 mb-6 ${abrilFatface.className}`}>
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional-grade tools designed for the modern digital entrepreneur
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Storefront Builder", desc: "Create stunning, conversion-optimized storefronts in minutes" },
              { icon: CreditCard, title: "Payment Processing", desc: "Secure, global payment processing with instant payouts" },
              { icon: TrendingUp, title: "Marketplace Discovery", desc: "Get discovered by millions of potential customers" },
              { icon: BarChart3, title: "Analytics Dashboard", desc: "Deep insights into sales, customers, and performance" },
              { icon: Users, title: "Customer Management", desc: "Build relationships with powerful CRM tools" },
              { icon: Zap, title: "Digital Delivery", desc: "Instant, automated delivery of digital products" },
              { icon: Smartphone, title: "Mobile Optimization", desc: "Perfect experience across all devices and platforms" },
              { icon: Lock, title: "Fraud Protection", desc: "Advanced security to protect you and your customers" }
            ].map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20" data-landright-section="HowItWorks">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl font-bold text-gray-900 mb-6 ${abrilFatface.className}`}>
              Start Selling in Minutes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined onboarding gets you from idea to income faster than ever
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Sign Up", desc: "Create your account in under 2 minutes with our simple registration process" },
              { step: "02", title: "Create Storefront", desc: "Use our drag-and-drop builder to design your perfect digital storefront" },
              { step: "03", title: "Upload Products", desc: "Add your digital products, set pricing, and configure delivery options" },
              { step: "04", title: "Start Selling", desc: "Go live and start earning with our built-in marketing and discovery tools" }
            ].map((step, index) => (
              <motion.div 
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20" data-landright-section="FAQ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl font-bold text-gray-900 mb-6 ${abrilFatface.className}`}>
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "What fees does Whop charge?", a: "We charge a competitive 5% transaction fee plus payment processing fees. No monthly fees or hidden costs." },
              { q: "How long does setup take?", a: "Most creators have their storefront live within 30 minutes. Our guided setup process makes it incredibly simple." },
              { q: "What types of products can I sell?", a: "Digital courses, templates, software, memberships, consultations, and any other digital product or service." },
              { q: "What payment methods do you support?", a: "We support all major credit cards, PayPal, Apple Pay, Google Pay, and cryptocurrency payments." },
              { q: "Do you provide customer support?", a: "Yes! We offer 24/7 customer support via chat, email, and phone to help you succeed." },
              { q: "Can I scale my business on Whop?", a: "Absolutely. Our platform handles everything from your first sale to millions in revenue with enterprise-grade infrastructure." }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-purple-600 py-20" data-landright-section="FinalCTA">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl sm:text-5xl font-bold text-white mb-6 ${abrilFatface.className}`}>
            Ready to Build Your Empire?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who've transformed their passion into profit with Whop
          </p>
          <a href="https://www.linkedin.com/company/whop-io/about/" className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">
            <span>Get started</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" data-landright-section="Footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="data:image/webp;base64,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" alt="Whop" className="h-8 w-auto" />
                <span className="text-xl font-bold">Whop</span>
              </div>
              <p className="text-gray-400 mb-4">Your digital storefront for the new economy.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <div className="space-y-2 text-gray-400">
                <p>Marketplace</p>
                <p>Creator Tools</p>
                <p>Analytics</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-gray-400">
                <p>Help Center</p>
                <p>Community</p>
                <p>Contact</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-gray-400">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Security</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Whop. All rights reserved.</p>
            <div className="mt-4">
              <a href="https://www.linkedin.com/company/whop-io/about/" className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                Get started
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
