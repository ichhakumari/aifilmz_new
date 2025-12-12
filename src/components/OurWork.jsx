import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';

const { FiPlay, FiArrowRight, FiChevronLeft, FiChevronRight } = FiIcons;

const OurWork = () => {
  const ref = useRef(null);
  const scrollContainerRef = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const projects = [
    {
      id: 'project-medical-tech',
      title: "Medical Technology",
      client: "Healthcare Technology",
      industry: "Sales",
      description: "Hyper-personalized video messages that revolutionized customer engagement",
      videoUrl: "https://res.cloudinary.com/dqgknssu8/video/upload/v1765371480/Medical_srxspe.mp4",
      metric: "340% Response",
      stats: {
        sent: "50K+",
        response: "68%",
        duration: "Automated"
      }
    },
    {
      id: 'project-ecommerce-500',
      title: "E-commerce Product Launch",
      client: "Fashion Retail Brand",
      industry: "E-commerce",
      description: "AI-generated product videos that drove massive engagement and conversions",
      videoUrl: "https://res.cloudinary.com/dqgknssu8/video/upload/v1765371497/Video-500_pgg0qe.mp4",
      metric: "500% ROI",
      stats: {
        views: "2.5M",
        engagement: "87%",
        duration: "3 min"
      }
    },
    {
      id: 'project-corporate-training',
      title: "Corporate Training Program",
      client: "Tech Corporation",
      industry: "HR/Training",
      description: "Personalized onboarding videos that transformed employee engagement",
      videoUrl: "https://res.cloudinary.com/dqgknssu8/video/upload/v1765371478/Coporatevideos_mvzmbq.mp4",
      metric: "98% Completion",
      stats: {
        employees: "10K+",
        satisfaction: "95%",
        duration: "5 min"
      }
    },
    {
      id: 'project-sharoma-candles',
      title: "Sharoma Candles Marketing Campaign",
      client: "Sharoma Candles",
      industry: "Marketing",
      description: "AI-powered ad campaign that captured attention and drove brand recall",
      videoUrl: "https://res.cloudinary.com/dqgknssu8/video/upload/v1765371489/Sequence_01_1_r9wr3d.mp4",
      metric: "3.2M Reach",
      stats: {
        reach: "3.2M",
        ctr: "12.5%",
        duration: "1 day"
      }
    },
    {
      id: 'project-animated-story',
      title: "Animated Story",
      client: "-",
      industry: "Animation",
      description: "Engaging animated content that brought brand values to life",
      videoUrl: "https://res.cloudinary.com/dqgknssu8/video/upload/v1765371490/Video-249_zb0q39.mp4",
      metric: "1.8M Shares",
      stats: {
        shares: "1.8M",
        engagement: "92%",
        duration: "1 week"
      }
    },

    {
      id: 'project-biscuit-ads',
      title: "Biscuit Ads",
      client: "-",
      industry: "Ads",
      description: "Engaging animated content that brought brand values to life",
      videoUrl: "https://res.cloudinary.com/dqgknssu8/video/upload/v1765371496/Video-851_h3tctc.mp4",
      metric: "1.8M Shares",
      stats: {
        shares: "1.8M",
        engagement: "92%",
        duration: "1 week"
      }
    }
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 356; // Card width (350px) + gap (6px)
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      ref={ref}
      id="our-work"
      className="py-8 px-2 sm:px-4"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span
            className="font-semibold mb-2 inline-block text-sm tracking-widest uppercase"
            style={{ color: 'var(--accent-color)' }}
          >
            Our Portfolio
          </span>
          <h2
            className="font-bold mb-4"
            style={{ fontSize: 'var(--text-4xl)', color: 'var(--text-primary)' }}
          >
            Explore Projects From <span style={{ color: 'var(--accent-color)' }}>Brands</span>
          </h2>
          <p
            className="max-w-3xl mx-auto leading-relaxed"
            style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)' }}
          >
            Affiliate To Brand Collaborations
          </p>
        </motion.div>

        {/* Horizontal Scrolling Container with Navigation */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 ml-0 md:-ml-6"
            style={{
              backgroundColor: 'var(--accent-color)',
              color: '#FFFFFF',
              boxShadow: '0 4px 12px rgba(254, 74, 35, 0.3)'
            }}
          >
            <FiChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 mr-0 md:-mr-6"
            style={{
              backgroundColor: 'var(--accent-color)',
              color: '#FFFFFF',
              boxShadow: '0 4px 12px rgba(254, 74, 35, 0.3)'
            }}
          >
            <FiChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-[85vw] sm:w-[350px] snap-center group"
              >
                {/* Video Container - Increased Height */}
                <div className="relative rounded-2xl overflow-hidden mb-4" style={{ aspectRatio: '3.2/5.2' }}>
                  {/* Video */}
                  <video
                    src={project.videoUrl}
                    className="w-full h-full object-cover cursor-pointer"
                    autoPlay
                    loop
                    muted
                    playsInline
                    loading="lazy"
                    preload="metadata"
                    onClick={(e) => {
                      if (e.target.paused) {
                        e.target.play();
                      } else {
                        e.target.pause();
                      }
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>

                  {/* Play Button Overlay - Removed (videos autoplay with click controls)
                  <div className="absolute inset-0 bg-black/20 opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(254, 74, 35, 0.9)' }}
                    >
                      <FiPlay className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  */}

                  {/* Industry Badge - Commented out
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md"
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        color: '#FFFFFF'
                      }}
                    >
                      {project.industry}
                    </span>
                  </div>
                  */}

                  {/* Metric Badge */}
                  <div className="absolute top-4 right-4">
                    <div
                      className="px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md"
                      style={{
                        backgroundColor: 'rgba(254, 74, 35, 0.9)',
                        color: '#FFFFFF'
                      }}
                    >
                      {project.metric}
                    </div>
                  </div>

                  {/* Client Details Card - Bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-5 backdrop-blur-xl"
                    style={{
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), transparent)'
                    }}
                  >
                    {/* Client Name - Commented out
                    <p className="text-xs font-medium mb-1" style={{ color: 'var(--accent-color)' }}>
                      {project.client}
                    </p>
                    */}

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-2 text-white line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm mb-3 text-gray-300 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Stats Row */}
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                      {Object.entries(project.stats).map(([key, value], idx) => (
                        <div key={idx} className="flex items-center gap-1">
                          <span className="font-semibold" style={{ color: '#fe4a23' }}>{value}</span>
                          <span className="capitalize">{key}</span>
                        </div>
                      ))}
                    </div>

                    {/* View Project Link */}
                    {/* <button
                      className="flex items-center gap-2 text-sm font-semibold transition-all group/btn"
                      style={{ color: 'var(--accent-color)' }}
                    >
                      <span>View Project</span>
                      <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Hint - Commented out
          <div className="flex justify-center mt-6">
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              ← Scroll to explore more projects →
            </p>
          </div>
          */}
        </div>

        {/* CTA Section - Commented out
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all"
            style={{
              backgroundColor: 'var(--accent-color)',
              color: '#FFFFFF'
            }}
          >
            <span>Start Your Project</span>
            <FiArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
        */}
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default OurWork;