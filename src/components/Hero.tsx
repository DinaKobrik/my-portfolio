import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[500px] flex items-center justify-center text-center">
      <Image
        src="/images/hero.jpg"
        alt="Фоновое изображение"
        fill
        className="object-cover opacity-50"
        priority
      />
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-gray-800 mb-4"
        >
          Привет, я Анна!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Фронтенд-разработчик, создаю стильные и современные веб-приложения с
          использованием React, TypeScript и Tailwind CSS.
        </motion.p>
        <motion.a
          href="/projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6 inline-block bg-pink-600 text-white py-3 px-6 rounded-full hover:bg-pink-700 transition-colors"
        >
          Посмотреть проекты
        </motion.a>
      </div>
    </section>
  );
}
