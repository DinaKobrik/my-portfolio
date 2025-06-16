import Image from 'next/image';

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
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Привет, я Анна!
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Фронтенд-разработчик, создаю стильные и современные веб-приложения с
          использованием React, TypeScript и Tailwind CSS.
        </p>
        <a
          href="/projects"
          className="mt-6 inline-block bg-pink-600 text-white py-3 px-6 rounded-full hover:bg-pink-700 transition-colors"
        >
          Посмотреть проекты
        </a>
      </div>
    </section>
  );
}
