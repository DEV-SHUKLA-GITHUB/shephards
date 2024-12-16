import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "Since my stay in Bangalore was uncertain, I needed a fully furnished place without the hassle of large deposits or long-term commitments. This was the perfect solution, offering flexibility and ease without any of the usual rental stress, and I could move in right away without any worries.",
    author: "Kelly Lawson",
    role: "CTO, Stripe"
  },
  {
    text: "Since my stay in Bangalore was uncertain, I needed a fully furnished place without the hassle of large deposits or long-term commitments. This was the perfect solution, offering flexibility and ease without any of the usual rental stress, and I could move in right away without any worries.",
    author: "Kelly Lawson",
    role: "CTO, Stripe"
  },
  {
    text: "Since my stay in Bangalore was uncertain, I needed a fully furnished place without the hassle of large deposits or long-term commitments. This was the perfect solution, offering flexibility and ease without any of the usual rental stress, and I could move in right away without any worries.",
    author: "Kelly Lawson",
    role: "CTO, Stripe"
  }
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Our customers are never homesick
      </h2>

      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full px-4"
            >
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {testimonial.text}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-emerald-600 w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;