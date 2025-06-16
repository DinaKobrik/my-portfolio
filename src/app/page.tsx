import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        <Hero />
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Мои навыки
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['React', 'TypeScript', 'Tailwind CSS', 'Next.js'].map((skill) => (
              <div
                key={skill}
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-700">{skill}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
