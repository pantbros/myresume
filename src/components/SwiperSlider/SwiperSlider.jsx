import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles correctly
import { FaStar } from 'react-icons/fa'; // Star icon from react-icons
import reviewer1 from '../../assets/reviews/user1.png'

const TestimonialSlider = () => {
  // Testimonial data
  const testimonials = [
    {
      quote: "I highly recommend Portfolify to anyone looking for a high-quality best Bootstrap theme.",
      name: "Esther Howard",
      country: "Australia",
      image: reviewer1, // Update with correct image paths
    },
    {
      quote: "This is a fantastic theme, and I’ve used it in multiple projects. I’m really happy with the results!",
      name: "John Doe",
      country: "USA",
      image: reviewer1,
    },
    {
      quote: "Great design and easy to use. Perfect for modern websites and very responsive!",
      name: "Jane Smith",
      country: "Canada",
      image: reviewer1,
    },
    {
      quote: "The theme is sleek, and it works well across all screen sizes. Amazing performance!",
      name: "Jack Williams",
      country: "UK",
      image: reviewer1,
    },
  ];

  return (
    <div className="testimonial-slider container mx-auto py-8">
      <Swiper
       spaceBetween={30}  // Space between slides
       speed={1000} // Transition speed (in ms) - lower is smoother
       loop={true}  // Infinite loop
       autoplay={{
         delay: 3000, // Auto play delay (3 seconds)
         disableOnInteraction: false, // Continue autoplay after interaction
       }}
       breakpoints={{
         320: {
           slidesPerView: 1, // 1 slide per view on small screens
         },
         768: {
           slidesPerView: 2, // 2 slides per view on medium screens
         },
         1400: {
           slidesPerView: 3, // 3 slides per view on large screens
         },
         1600: {
           slidesPerView: 4, // 4 slides per view on extra-large screens
         },
       }}
       pagination={{
         clickable: true, // Clickable pagination bullets
         type: 'bullets', // Bullet style pagination
         el: '.swiper-pagination',
         bulletClass: 'swiper-custom-bullet',
         bulletActiveClass: 'swiper-custom-bullet-active',
       }}
        className="swiper-container"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="slide-card px-6 py-8 bg-[#fafafa] shadow-lg rounded-lg border-2 border-[#efefef] h-[calc(100%)]">
              {/* Rating stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-lg" />
                ))}
              </div>

              {/* Testimonial quote */}
              <p className="text-gray-700 text-lg italic mb-6">
                “{testimonial.quote}”
              </p>

              {/* User info */}
              <div className="flex gap-4 items-center">
                <img
                  src={testimonial.image}
                  alt="testimonial"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <span className="text-xl font-semibold text-gray-900">{testimonial.name}</span><br />
                  <span className="text-sm text-gray-600">{testimonial.country}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Pagination */}
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default TestimonialSlider;