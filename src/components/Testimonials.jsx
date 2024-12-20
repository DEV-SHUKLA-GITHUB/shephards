import React from 'react';
import TestimonialCard from './TestimonialCard';

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
  },
  // You can add more testimonials here
];

const Testimonials = () => {
  return (
    <div className='p-8 w-screen justify-center items-center flex flex-col bg-gray-50'>
      <h1 className='font-serif py-4 text-center text-2xl md:text-3xl text-gray-800'>Hear From Our Guests</h1>
      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-700">
        Our customers are never homesick
      </h2>
      <div className='flex w-11/12  flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0'>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
