import React, { useState } from 'react';

const PropertyOwnerPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    ownershipType: 'Single Property'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const journeySteps = [
    { number: 1, title: 'Property Evaluation', icon: '🏢' },
    { number: 2, title: 'Contract Signing', icon: '📝' },
    { number: 3, title: 'Property Transformation', icon: '🛋️' },
    { number: 4, title: 'Property Activation', icon: '🔐' },
    { number: 5, title: 'Welcome Guests', icon: '👥' },
    { number: 6, title: 'Account Support', icon: '🎧' },
    { number: 7, title: 'Monthly Reporting', icon: '📊' },
    { number: 8, title: 'Monthly Payments', icon: '💰' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative min-h-[600px] lg:h-[700px] bg-gradient-to-r from-emerald-800 to-emerald-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Background Image */}
        <img 
          src="/api/placeholder/1920/1080" 
          alt="background" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
        />
        
        <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 h-full">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 h-full">
            {/* Left Column - Text */}
            <div className="text-white space-y-6 w-full lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Whether it's one property or an entire portfolio, our expertise is at your service.
              </h1>
              <p className="text-lg sm:text-xl text-gray-200">
                Let us manage your properties and unlock the potential of the short term rental market.
              </p>
            </div>
            
            {/* Right Column - Form */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-w-lg mx-auto">
                <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">
                  Maximize your property's earnings with our expert guidance.
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ownership type *</label>
                    <select
                      name="ownershipType"
                      value={formData.ownershipType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    >
                      <option>Single Property</option>
                      <option>Multiple Properties</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3 px-6 text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium text-lg"
                  >
                    Next
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Your Property Management Journey</h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            From initial contact to your first booking, experience our seamless property management process
          </p>
        </div>

        <div className="relative mt-12 sm:mt-20">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-0 right-0 h-0.5 bg-emerald-200 top-8" />
          
          {/* Timeline Steps */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-8 sm:gap-6">
            {journeySteps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center relative z-10 mb-4 shadow-lg text-lg sm:text-xl font-semibold">
                  {step.number}
                </div>
                <div className="text-center">
                  <span className="text-2xl sm:text-3xl mb-2 sm:mb-3 block">{step.icon}</span>
                  <p className="text-sm sm:text-base font-medium text-gray-800">{step.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyOwnerPage;