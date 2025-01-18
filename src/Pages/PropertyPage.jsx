import React, { useState } from 'react';
import Hero from '../components/Hero';
import img1 from "../assets/carausalImg/1.jpg";

const PropertyOwnerPage = () => {
  const content = [
    {
      id: 1,
      heading: "Long Term Stability",
      description: "We'll be the last tenants you'll ever need with a guaranteed 3-year lease.",
      image: "/api/placeholder/400/320"
    },
    {
      id: 2,
      heading: "On Time Payments",
      description: "We'll be the last tenants you'll ever need with a guaranteed 3-year lease.",
      image: "/api/placeholder/400/320"
    },
    {
      id: 3,
      heading: "Pristine Maintainance",
      description: "We'll be the last tenants you'll ever need with a guaranteed 3-year lease.",
      image: "/api/placeholder/400/320"
    },
    {
      id: 4,
      heading: "Enhanced Value",
      description: "We'll be the last tenants you'll ever need with a guaranteed 3-year lease.",
      image: "/api/placeholder/400/320"
    },
    {
      id: 5,
      heading: "Trust and Care",
      description: "We'll be the last tenants you'll ever need with a guaranteed 3-year lease.",
      image: "/api/placeholder/400/320"
    }
  ];

  const [selectedId, setSelectedId] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    ownershipType: 'Single Property'
  });
  const [isHovered, setIsHovered] = useState(false);

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
        <div className='text-4xl text-white font-bold text-center my-20'>Guiding Your Property to <br/> Exceptional Returns.</div>
       <div 
              className="relative p-24 "
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="max-w-3xl mx-auto relative min-h-[600px]">
            
                <div className="absolute inset-0 rounded-t-full border border-[#E6D5B8] transition-all duration-500"
                     style={{ margin: '-20px', opacity: '0.4' }} />
                
                <div className="absolute inset-0 rounded-t-full border-2 border-[#E6D5B8] transition-all duration-500"
                     style={{ margin: '-60px', opacity: '0.5' }} />
                
                {/* <div className="absolute inset-0 rounded-t-full border-2 border-[#FFD700] transition-all duration-500"
                     style={{ margin: '-60px', opacity: '0.3' }} /> */}
                
                <div className="absolute inset-0 rounded-t-full border-2 border-[#FFD700] transition-all duration-500"
                     style={{ margin: '-100px', opacity: '0.2' }} />
                
                {/* <div className="absolute inset-0 rounded-t-full border-3 border-[#FFD700] transition-all duration-500"
                     style={{ margin: '-100px', opacity: '0.1' }} />
       */}
              
      {/* <div className="relative rounded-t-full overflow-hidden h-full"> */}
      <div className={`max-w-[100px] h- rounded-t-full `}
  />
{/* </div> */}
      <div className=''> <img 
                    src={img1} 
                    alt="Luxury interior" 
                    className={`w-full h-[80m] object-cover rounded-t-full `}
                  /></div>
</div>

            </div>
        </div>
      {/* Journey Section */}
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mx-60 mb-4">Like a Shephard, we watch over your property with diligence and care—proactively handling maintenance, guest relations, and quality assurance, so you never need to worry.</h2>
        </div>
        

        <div className="relative mt-12 sm:mt-40">
  {/* Timeline Line - Hidden on mobile */}
  <div className="hidden lg:block absolute left-0 right-0 h-0.5 bg-emerald-200 top-8" />

  {/* Timeline Steps */}
  <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-8 sm:gap-6">
    {journeySteps.map((step, index) => (
      <div key={step.number} className="flex flex-col items-center">
        {/* For even indices, title is absolutely positioned above the icon */}
        {index % 2 === 0 && (
          <p className="absolute text-sm sm:text-base font-medium text-gray-800 mb-2 -top-10">{step.title}</p>
        )}

        {/* Icon */}
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center relative z-10 shadow-lg text-lg sm:text-xl font-semibold">
          {step.icon}
        </div>

        {/* For odd indices, title is below the icon */}
        {index % 2 !== 0 && (
          <p className="text-sm sm:text-base font-medium text-gray-800 mt-2">{step.title}</p>
        )}
      </div>
    ))}
  </div>
</div>

        <div className='flex m-20 flex-col justify-center items-center'>
  <div className='m-20 text-3xl font-semibold'>Our Promise, Our Advantage</div>
  <div className="flex justify-around h-[30rem]">
      <div className="w-1/3 border">
        <img 
          // src={content[selectedId - 1].image}
          src={img1}
          alt={`Image ${selectedId}`}
          className="w-full rounded h-full object-cover"
        />
      </div>
      <div className="w-1/2 border h-full flex flex-col">
        {content.map((item) => (
          <div
            key={item.id}
            className={`flex-1 flex items-center border cursor-pointer transition-colors hover:bg-gray-50
              ${selectedId === item.id ? 'bg-gray-100' : ''}`}
            onClick={() => setSelectedId(item.id)}
          >
            <div className="w-full px-4 py-2">
              <h3 className="font-medium text-lg">{item.heading}</h3>
              {selectedId === item.id && (
                <p className="mt-1 text-gray-600">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
</div>

      </div>
    </div>
  );
};

export default PropertyOwnerPage;