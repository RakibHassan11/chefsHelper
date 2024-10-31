// eslint-disable-next-line no-unused-vars
import React from 'react';

const Banner = () => {
    return (
        <div
  className="bg-cover bg-no-repeat hero min-h-screen mx-auto w-11/12 lg:w-10/12 rounded-3xl"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/WVwv4Dd/Rectangle-1.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-10"></div>
  <div className="hero-content text-neutral-content text-center ">
    <div className="max-w-4xl">
      <h1 className="mb-10 text-6xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-10">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
      </p>
      <button className="btn bg-transparent  mx-6 rounded-full px-8 text-xl text-white mt-6 font-medium">Explore Now</button>
      <button className="btn bg-green-400 rounded-full px-8 text-xl text-gray-800 mt-6 font-medium border-none">Our Feedback</button>
    </div>
  </div>
</div>
    );
};

export default Banner;