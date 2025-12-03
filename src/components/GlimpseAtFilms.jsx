import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';

const { FiPlay } = FiIcons;

const GlimpseAtFilms = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const films = [
    {
      id: 8,
      title: 'Medical Technology Showcase',
      category: 'Healthcare',
      thumbnail: '',
      videoUrl: "/videos/graphics.mp4"
    },
    {
      id: 9,
      title: 'Automotive AI Integration',
      category: 'AI ADS',
      thumbnail: '',
      videoUrl: '/videos/eagle.mp4'
    },
    {
      id: 1,
      title: 'Vasavi Gold & Diamonds AI Ad',
      category: 'AI ADS',
      thumbnail: '',
      videoUrl: "/videos/shoes.mp4"
    },
    {
      id: 2,
      title: 'Sankara Eye Hospital Campaign',
      category: 'AI ADS',
      thumbnail: '',
      videoUrl: "/videos/Cadbury Dairy Milk.mp4"
    },
    {
      id: 3,
      title: "Nature's Box Honey",
      category: 'AI ADS',
      thumbnail: '',
      videoUrl: "/videos/video1.mp4"
    },
    {
      id: 4,
      title: 'Quantum Computing Visuals',
      category: 'Tech Promo',
      thumbnail: '',
      videoUrl: "/videos/video2.mp4"
    },
    {
      id: 5,
      title: 'Architectural Fly-through',
      category: '3D Render',
      thumbnail: '',
      videoUrl: "/videos/zomato.mp4"
    },
    {
      id: 6,
      title: 'Cyber Security Explainer',
      category: 'Animation',
      thumbnail: '',
      videoUrl: "/videos/Cadbury Dairy Milk.mp4"
    },
    {
      id: 7,
      title: 'Eco-Friendly Product Launch',
      category: 'Commercial',
      thumbnail: '',
      videoUrl: "/videos/annimated.mp4"
    }

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section ref={ref} className="py-12 sm:py-16 px-4 sm:px-6" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-bold mb-4" style={{ fontSize: 'var(--text-4xl)', color: 'var(--text-primary)' }}>
            Transforming Brands Through{" "}
            <TypeAnimation
              sequence={[
                'Ad Films', 2000,
                'Corporate Videos', 2000,
                'Documentry Films', 2000,
              ]}
              wrapper="span"
              speed={40}
              deletionSpeed={60}
              repeat={Infinity}
              style={{ color: '#FF6B35' }}
            />
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {films.map((film) => (
            <motion.div
              key={film.id}
              variants={itemVariants}
              className="group relative rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative aspect-square bg-black">
                <video
                  src={film.videoUrl}
                  className="w-full h-full object-cover"
                  controls
                  muted
                  loop
                />
              </div>

              <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 pointer-events-none">
                <h3 className="text-white font-bold text-base sm:text-lg truncate mb-2 drop-shadow-md">{film.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GlimpseAtFilms;