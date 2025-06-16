import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-pink-600">
          Портфолио
        </Link>
        <div className="space-x-4">
          <Link href="/about" className="text-gray-600 hover:text-pink-600">
            Обо мне
          </Link>
          <Link href="/projects" className="text-gray-600 hover:text-pink-600">
            Проекты
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-pink-600">
            Контакты
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-pink-600">
            Блог
          </Link>
        </div>
      </nav>
    </header>
  );
}
