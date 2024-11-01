import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    query: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate email sending - replace with actual EmailJS implementation
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowSuccess(true);
      setFormData({ name: '', email: '', contact: '', query: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-[#5F2517]">Get in Touch</h1>
              <p className="mt-4 text-lg text-gray-600">
                Have questions about your stay? We're here to help make your experience exceptional.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-[#5F2517]" />
                <span className="text-gray-600">123 Hosting Street, Airtown</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#5F2517]" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#5F2517]" />
                <span className="text-gray-600">support@staywise.com</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-[#5F2517] focus:outline-none focus:ring-1 focus:ring-[#5F2517] sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-[#5F2517] focus:outline-none focus:ring-1 focus:ring-[#5F2517] sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-[#5F2517] focus:outline-none focus:ring-1 focus:ring-[#5F2517] sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="query" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="query"
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-[#5F2517] focus:outline-none focus:ring-1 focus:ring-[#5F2517] sm:text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#5F2517] hover:bg-[#4a1c11] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5F2517] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>

              {showSuccess && (
                <div className="mt-4 text-center text-green-600 bg-green-50 p-3 rounded-md">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;