// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import { motion } from "framer-motion";

// export default function FeaturedProjects({ featured }) {
//   return (
//     <section className="py-16">
//       <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-10">
//         Featured Projects
//       </h2>

//       <Swiper
//         modules={[Autoplay, Pagination]}
//         spaceBetween={30}
//         slidesPerView={1}
//         autoplay={{ delay: 4000 }}
//         pagination={{ clickable: true }}
//         className="max-w-4xl mx-auto"
//       >
//         {featured.map((project, index) => (
//           <SwiperSlide key={index}>
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               className="bg-white/10 dark:bg-gray-800/40 backdrop-blur-md border border-gray-200/20 dark:border-gray-700/40
//                          rounded-2xl p-6 shadow-md transition-all duration-300 flex flex-col items-center"
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="rounded-lg mb-5 w-full h-64 object-cover"
//               />
//               <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{project.title}</h3>
//               <p className="text-gray-600 dark:text-gray-300 text-center mt-2">{project.description}</p>

//               <div className="flex flex-wrap justify-center gap-2 mt-4">
//                 {project.technologies.map((tech, idx) => (
//                   <span
//                     key={idx}
//                     className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-300/20"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <a
//                 href={project.github}
//                 target="_blank"
//                 className="mt-4 inline-block text-sm text-indigo-500 hover:underline"
//               >
//                 View on GitHub →
//               </a>
//             </motion.div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }
//--------------------------------------------------------------------------------------------------

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function FeaturedProjects({ featured }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
        Featured Projects
      </h2>

      <div className="relative max-w-5xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: false,
          }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          // ✅ Connect navigation buttons here
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="swiper-container px-4"
        >
          {featured.map((project, index) => (
            <SwiperSlide
              key={index}
              className="max-w-md backdrop-blur-lg bg-white/10 dark:bg-gray-800/40 border border-gray-200/20 dark:border-gray-700/40 rounded-2xl shadow-lg"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 flex flex-col items-center"
              >
                <div className="relative w-full h-56 overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full rounded-xl transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
                </div>

                <h3 className="text-2xl font-semibold mt-4 text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mt-2 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-300/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  className="mt-5 inline-block text-sm text-indigo-500 hover:underline"
                >
                  View on GitHub →
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="mt-5 inline-block text-sm text-indigo-500 hover:underline"
                >
                  View Demo →
                </a>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ These now control the Swiper properly */}
        <button
          ref={prevRef}
          className="swiper-button-prev !text-indigo-500 hover:scale-110 transition-transform"
        ></button>
        <button
          ref={nextRef}
          className="swiper-button-next !text-indigo-500 hover:scale-110 transition-transform"
        ></button>
      </div>
    </section>
  );
}
