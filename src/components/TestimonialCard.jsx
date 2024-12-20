import React from 'react';

const testimonials = [
  {
    text: "Since my stay in Bangalore was uncertain, I needed a fully furnished place without the hassle of large deposits or long-term commitments. This was the perfect solution, offering flexibility and ease without any of the usual rental stress, and I could move in right away without any worries.",
    author: "Kelly Lawson",
    role: "CTO, Stripe"
  }
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
      <p className="text-gray-600 text-lg leading-relaxed mb-4">
        "{testimonial.text}"
      </p>
      <div className="flex items-center mt-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
          <p className="text-gray-500 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
