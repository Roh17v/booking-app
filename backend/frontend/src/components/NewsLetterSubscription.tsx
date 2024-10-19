import React, { useState } from 'react';

const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Handle the subscription logic here
    alert(`Subscribed with email: ${email}`);
  };

  return (
    <div className="bg-primary-blue text-white p-6 text-center  w-full mt-2">
      <h2 className="text-2xl font-bold mb-4">
        Save time, save money!
      </h2>
      <p className="mb-6">
        Sign up and we'll send the best deals to you
      </p>
      <div className="flex justify-center items-center mb-4">
        <input
          type="email"
          placeholder="Your email address"
          className="p-2 rounded-l-lg text-gray-700 focus:outline-none w-64"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubscribe}
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-r-lg"
        >
          Subscribe
        </button>
      </div>
      <p className="text-sm">
        By subscribing, you agree to receive promotional emails. You can unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterSubscription;
