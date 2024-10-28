import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const googleReviews = [
    {
      name: "Demosthenis Imarhiagbe",
      rating: 5,
      date: "5 months ago",
      review: "Roza is one of the best at hairstyling. Always a pleasure having my cornrows done here.",
    },
    {
      name: "Hanna Tesfaye",
      rating: 5,
      date: "8 months ago",
      review: "I highly recommend Roza Beauty Salon to everyone. She is very professional and friendly!",
    },
    {
      name: "Efi K.",
      rating: 5,
      date: "2 months ago",
      review: "Great job... Very nice people... Highly recommended... 💚",
    },
    {
      name: "Alem Tesfaye",
      rating: 5,
      date: "a year ago",
      review: "The place where you can get what you want. They are the best in styling your hair. Highly recommended!",
    },
    {
      name: "Anna Kousathana",
      rating: 5,
      date: "2 years ago",
      review: "Super friendly staff and I love my braided hair! Highly recommended! ❤️",
    },
    {
      name: "Eliany Hurtado",
      rating: 5,
      date: "8 months ago",
      review: "El mejor negocio que existe en Grecia para nosotras las mulatas son un amor, excelente atención y buen servicio y con precios súper.",
    },
    {
      name: "Gabriel Helu",
      rating: 5,
      date: "5 years ago",
      review: "Nice place to have a good haircut.",
    },
    // Add more reviews as needed
  ];

  return (
    <div className="testimonials-container fade-in">
      <h2>Client Testimonials</h2>
      <h3>Verified Google Reviews</h3>
      <div className="google-reviews">
        {googleReviews.map((review, index) => (
          <div key={index} className="google-review">
            <p><strong>{review.name}</strong> - {review.date}</p>
            <p>Rating: {"⭐".repeat(review.rating)}</p>
            <blockquote>{review.review}</blockquote>
          </div>
        ))}
      </div>
      <p className="google-attribution">
        *These reviews are sourced from Google. They reflect genuine experiences from our valued clients.
      </p>
    </div>
  );
}

export default Testimonials;
