import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X, Activity } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { cn } from '../../lib/utils';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "glass border-border-color py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-black dark:bg-white flex items-center justify-center text-white dark:text-black">
            <Activity className="w-6 h-6" />
          </div>
          <span className="font-semibold text-lg tracking-tight hidden sm:block">AI Digital Twin</span>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            <a href="#vision" className="hover:text-black dark:hover:text-white transition-colors">Vision</a>
            <a href="#architecture" className="hover:text-black dark:hover:text-white transition-colors">Architecture</a>
            <a href="#simulation" className="hover:text-black dark:hover:text-white transition-colors">Simulation</a>
            <a href="#research" className="hover:text-black dark:hover:text-white transition-colors">Research</a>
          </nav>

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 glass border-b border-border-color"
        >
          <nav className="flex flex-col p-6 gap-4 text-center text-lg font-medium">
            <a href="#vision" onClick={() => setMobileMenuOpen(false)}>Vision</a>
            <a href="#architecture" onClick={() => setMobileMenuOpen(false)}>Architecture</a>
            <a href="#simulation" onClick={() => setMobileMenuOpen(false)}>Simulation</a>
            <a href="#research" onClick={() => setMobileMenuOpen(false)}>Research</a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
