// components/ModernBannerClient.jsx
"use client";


import { motion } from "framer-motion";
import Image from 'next/image';
import React, { useState } from 'react';
import {  FaSwimmingPool, FaWifi, FaUtensils, FaConciergeBell, FaParking, FaSpa, FaStar, FaCheck } from 'react-icons/fa';



export default function Delhiescorts({
  title = "Premium Personal Services",
  subtitle = "Luxury experience — Book trusted professionals across Delhi",
  ctaPrimary = "Book Now",
  ctaSecondary = "View Services",
  image = "/images/bannermodel.jpg" // use local optimized image
})

{
    // 5 start hotel 
          const [activeHotel, setActiveHotel] = useState(null);
        
        const hotels = [
          {
            id: 1,
            name: "Grand Royale Palace",
            location: "Bangkok, Thailand",
            rating: 5,
            description: "An iconic luxury hotel offering breathtaking views of the city skyline and the Chao Phraya River.",
            image: "/images/lajpatnagahotel.avif",
            amenities: ["Infinity Pool", "Michelin-star Restaurant", "Luxury Spa", "24/7 Butler Service"],
            price: "₹25,000",
            features: ["Ocean View", "Private Beach", "Helipad"]
          },
          {
            id: 2,
            name: "Azure Waters Resort",
            location: "Maldives",
            rating: 5,
            description: "Experience paradise in our overwater villas with direct access to crystal-clear lagoons.",
            image: "/images/JwMarriott_CP.jpg",
            amenities: ["Overwater Bungalows", "Coral Reef Access", "Underwater Restaurant", "Spa Sanctuary"],
            price: "₹45,000",
            features: ["Private Island", "Seaplane Transfer", "Glass Floor"]
          },
          {
            id: 3,
            name: "Alpine Peak Lodge",
            location: "Swiss Alps, Switzerland",
            rating: 5,
            description: "Majestic mountain retreat with ski-in/ski-out access and panoramic alpine views.",
            image: "/images/jaypeeVasantAerocity.png",
            amenities: ["Ski Valet", "Heated Indoor Pool", "Mountain Spa", "Fondue Restaurant"],
            price: "₹38,000",
            features: ["Private Ski Lift", "Fireplace Lounges", "Chocolate Atelier"]
          },
          {
            id: 4,
            name: "Oasis Desert Mirage",
            location: "Dubai, UAE",
            rating: 5,
            description: "Luxurious desert sanctuary blending traditional Arabian hospitality with modern opulence.",
            image: "/images/holidayIn_CP.jpg",
            amenities: ["Private Oasis Pool", "Camel Rides", "Desert Spa", "Starlight Dining"],
            price: "₹32,000",
            features: ["Falconry Experience", "Gold-plated Interiors", "Private Dune"]
          },
          {
            id: 5,
            name: "Emerald Bay Retreat",
            location: "Bali, Indonesia",
            rating: 5,
            description: "Tropical paradise nestled in lush rainforest with stunning ocean vistas and traditional Balinese architecture.",
            image: "/images/pullmanAerocity.jpg",
            amenities: ["Cliffside Infinity Pool", "Jungle Spa", "Rice Terrace Dining", "Cultural Workshops"],
            price: "₹28,000",
            features: ["Volcano Views", "Sacred Spring", "Monkey Sanctuary"]
          },
          {
            id: 6,
            name: "Sapphire Sky Tower",
            location: "New York City, USA",
            rating: 5,
            description: "Ultra-modern luxury in the heart of Manhattan with panoramic city views from every suite.",
            image: "/images/tajmahalhotel_lajpatnagar.jpg",
            amenities: ["Rooftop Pool", "Sky Lounge", "Personal Shopper", "Broadway Concierge"],
            price: "₹52,000",
            features: ["Central Park View", "Penthouse Suites", "Private Elevator"]
          }
        ];
      
        const amenitiesIcons = {
          "Infinity Pool": <FaSwimmingPool className="text-blue-500" />,
          "Michelin-star Restaurant": <FaUtensils className="text-red-500" />,
          "Luxury Spa": <FaSpa className="text-pink-500" />,
          "24/7 Butler Service": <FaConciergeBell className="text-amber-500" />,
          "Overwater Bungalows": <FaSwimmingPool className="text-cyan-500" />,
          "Coral Reef Access": <FaSwimmingPool className="text-teal-500" />,
          "Underwater Restaurant": <FaUtensils className="text-indigo-500" />,
          "Spa Sanctuary": <FaSpa className="text-purple-500" />,
          "Ski Valet": <FaParking className="text-blue-600" />,
          "Heated Indoor Pool": <FaSwimmingPool className="text-amber-500" />,
          "Mountain Spa": <FaSpa className="text-emerald-500" />,
          "Fondue Restaurant": <FaUtensils className="text-yellow-600" />,
          "Private Oasis Pool": <FaSwimmingPool className="text-amber-500" />,
          "Camel Rides": <FaConciergeBell className="text-orange-800" />,
          "Desert Spa": <FaSpa className="text-orange-600" />,
          "Starlight Dining": <FaUtensils className="text-indigo-500" />,
          "Cliffside Infinity Pool": <FaSwimmingPool className="text-emerald-500" />,
          "Jungle Spa": <FaSpa className="text-green-600" />,
          "Rice Terrace Dining": <FaUtensils className="text-lime-600" />,
          "Cultural Workshops": <FaConciergeBell className="text-amber-700" />,
          "Rooftop Pool": <FaSwimmingPool className="text-sky-500" />,
          "Sky Lounge": <FaConciergeBell className="text-purple-500" />,
          "Personal Shopper": <FaConciergeBell className="text-pink-500" />,
          "Broadway Concierge": <FaConciergeBell className="text-red-500" />
        };
          //end 5 start hotel 
    const cities = [
{ name: 'DELHI', img: '/images/hotel3.webp' },
{ name: 'MUMBAI', img: '/images/lajpatnagahotel.avif' },
{ name: 'NOIDA', img: '/images/RoseateHouse.jpg' },
{ name: 'BANGALORE', img: '/images/paschimvihar.jpg' },
{ name: 'PUNE', img: '/images/JwMarriott_CP.jpg' },
{ name: 'AHMEDABAD', img: '/images/Andazhat.jpg' },
{ name: 'GURGAON', img: '/images/holidayIn_CP.jpg' },
{ name: 'HYDERABAD', img: '/images/tajmahalhotel_lajpatnagar.jpg' },
{ name: 'KOLKATA', img: '/images/paschimvihar.jpg' },
{ name: 'CHENNAI', img: '/images/hotel2.jpg' },
{ name: 'CHANDIGARH', img: '/images/pullmanAerocity.jpg' },
{ name: 'JAIPUR', img: '/images/jwmarriott.jpeg' },
]
  return (
    <>
    <header className="relative overflow-hidden bg-gradient-to-r from-rose-50 via-white to-amber-50">
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Hero background"
          className="w-full h-full object-cover object-center filter brightness-75 sm:brightness-90"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20 mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#book"
                className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-semibold shadow-md hover:shadow-lg transition"
                aria-label="Primary action - Book now"
              >
                {ctaPrimary}
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/40 text-white px-5 py-3 text-sm font-medium backdrop-blur-sm hover:bg-white/10 transition"
                aria-label="Secondary action - View services"
              >
                {ctaSecondary}
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3 text-xs text-white/90"
            >
              <li className="bg-white/10 px-3 py-1 rounded-full">Verified Profiles</li>
              <li className="bg-white/10 px-3 py-1 rounded-full">24/7 Support</li>
              <li className="bg-white/10 px-3 py-1 rounded-full">Discreet Booking</li>
            </motion.ul>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-md border border-white/10"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                    <img
                      src="/images/18244.jpg"
                      alt="Service sample"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-white font-semibold">Top-rated Professionals</h3>
                    <p className="text-sm text-white/80">Handpicked, background-checked</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="bg-white/6 p-3 rounded-lg">
                    <p className="text-xs text-white/80">From</p>
                    <p className="text-sm font-semibold text-white">₹999</p>
                  </div>

                  <div className="bg-white/6 p-3 rounded-lg">
                    <p className="text-xs text-white/80">Avg. Response</p>
                    <p className="text-sm font-semibold text-white">5 min</p>
                  </div>
                </div>

                <a
                  href="#quickbook"
                  className="mt-6 inline-block w-full text-center rounded-md bg-white text-gray-900 px-4 py-2 font-medium shadow-sm hover:shadow-md transition"
                >
                  Quick Book
                </a>
              </div>
            </motion.div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-white/6 text-white/90">24+ Outlets</div>
              <div className="p-3 rounded-lg bg-white/6 text-white/90">Secure Payments</div>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M0 40 C360 120 1080 -40 1440 40 L1440 120 L0 120 Z" fill="rgba(255,255,255,0.06)" />
      </svg>
    </header>
    {/* Location */}
                    <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                  <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          className="text-center mb-16"
                        >
                          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                            Our Premium Location in Aerocity
                          </h2>
                          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Meet our diverse team of professionals who bring excellence and passion to every engagement.
                          </p>
                        </motion.div>
                
                
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {cities.map((c, i) => (
                <motion.a
                key={c.name}
                href={`#/cities/${c.name.toLowerCase()}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                className="group block rounded-2xl overflow-hidden shadow-lg relative transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 bg-white"
                >
                <div className="relative w-full h-44 sm:h-48 lg:h-52">
                <Image
                src={c.img}
                alt={c.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                </div>
                
                
                <div className="absolute left-0 right-0 bottom-4 px-4 text-center">
                <span className="text-white text-lg sm:text-xl font-semibold tracking-wider drop-shadow-lg uppercase">{c.name}</span>
                </div>
                </motion.a>
                ))}
                </div>
                
                
                <div className="flex justify-center mt-10">
                <a
                href="#/cities"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
                >
                View All Cities
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                </a>
                </div>
                </div>
                </section>
                    {/* End Location */}
                    {/* 5 star hotel */}
                    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
                      <div className="max-w-7xl mx-auto">
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-center mb-16"
                        >
                          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                            Our 5-Star Hotel Collection
                          </h2>
                          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover the world&apos;s most exclusive luxury hotels and resorts, each offering unparalleled service and unforgettable experiences.
                          </p>
                        </motion.div>
                    
                        {/* Hotel Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {hotels.map((hotel) => (
                            <motion.div
                              key={hotel.id}
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                              whileHover={{ y: -10 }}
                              className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group ${
                                activeHotel === hotel.id ? "ring-4 ring-purple-500" : ""
                              }`}
                              onClick={() => setActiveHotel(activeHotel === hotel.id ? null : hotel.id)}
                            >
                              {/* Hotel Image */}
                              <div className="relative h-60 overflow-hidden">
                                 <Image
                                    src={hotel.image} // string URL or local import
                                    alt={hotel.name}
                                    fill                                        // fills the parent container
                                    className="object-cover object-center"     // cover behavior
                                    priority={false}                            // set true if critical for LCP
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                                <div className="absolute top-4 right-4 z-20 flex items-center bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                                  <FaStar className="mr-1" />
                                  {hotel.rating}
                                </div>
                                <div className="absolute bottom-4 left-4 z-20 text-white">
                                  <h3 className="text-xl font-bold">{hotel.name}</h3>
                                  <p className="text-sm">{hotel.location}</p>
                                </div>
                                {/* Placeholder Image */}
                                <div className="bg-gradient-to-br from-purple-100 to-pink-200 w-full h-full flex items-center justify-center">
                                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                                </div>
                              </div>
                    
                              {/* Hotel Info */}
                              <div className="p-6">
                                <p className="text-gray-600 mb-4">{hotel.description}</p>
                                {/* Amenities */}
                                <div className="mb-6">
                                  <h4 className="font-bold text-gray-800 mb-2">Key Amenities</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {hotel.amenities.slice(0, 4).map((amenity, index) => (
                                      <div key={index} className="flex items-center bg-gray-100 px-3 py-1.5 rounded-full text-sm">
                                        <span className="mr-2">{amenitiesIcons[amenity]}</span>
                                        {amenity}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                {/* Price and Features */}
                                <div className="flex justify-between items-center">
                                  <div>
                                    <div className="text-2xl font-bold text-purple-700">{hotel.price}</div>
                                    <div className="text-sm text-gray-500">per night</div>
                                  </div>
                                  <div className="flex space-x-2">
                                    {hotel.features.slice(0, 2).map((feature, index) => (
                                      <div key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                                        {feature}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                {/* Button */}
                                <button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
                                  View Details
                                </button>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                    
                        {/* Featured Hotel - Theme matched */}
                        <motion.div 
                          className="mt-16 bg-gradient-to-r from-purple-700 to-pink-700 rounded-3xl overflow-hidden shadow-2xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Image */}
                            <div className="relative min-h-[400px]">
                              <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 to-pink-800/30 z-10"></div>
                              <div className="absolute bottom-6 left-6 z-20 text-white">
                                <h3 className="text-2xl font-bold">Luxury Experience Package</h3>
                                <p className="mt-2 max-w-md">Book 3 nights and receive complimentary spa treatments, airport transfers, and dining credits</p>
                              </div>
                              {/* Placeholder Image */}
                              <div className="bg-gradient-to-br from-purple-300 to-pink-400 w-full h-full flex items-center justify-center">
                                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                              </div>
                            </div>
                    
                            {/* Details */}
                            <div className="p-8 text-white">
                              <div className="flex items-center mb-4">
                                <FaStar className="text-yellow-400 mr-1" />
                                <FaStar className="text-yellow-400 mr-1" />
                                <FaStar className="text-yellow-400 mr-1" />
                                <FaStar className="text-yellow-400 mr-1" />
                                <FaStar className="text-yellow-400 mr-1" />
                                <span className="ml-2 font-semibold">Top Rated</span>
                              </div>
                              <h3 className="text-3xl font-bold mb-4">Exclusive Benefits for Our Guests</h3>
                              <ul className="space-y-3 mb-6">
                                <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Complimentary airport transfers</li>
                                <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Personal concierge service</li>
                                <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> VIP lounge access</li>
                                <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Michelin restaurant reservations</li>
                                <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Free spa credits</li>
                              </ul>
                              <div className="flex space-x-4">
                                <button className="px-6 py-3 bg-white text-purple-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                                  Explore Packages
                                </button>
                                <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                                  Contact Concierge
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    {/* END Hotel */}
    </>
    
  );
}
