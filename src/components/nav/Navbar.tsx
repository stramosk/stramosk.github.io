'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Stramosk
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/projects" className="hover:text-blue-500 transition-colors">
              Projects
            </Link>
            <Link href="/math" className="hover:text-blue-500 transition-colors">
              Math
            </Link>
            <Link href="/tools" className="hover:text-blue-500 transition-colors">
              Tools
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}; 
