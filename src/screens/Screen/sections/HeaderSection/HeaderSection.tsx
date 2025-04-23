import React, { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../../../../lib/theme";

export const HeaderSection = (): JSX.Element => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems = [
    { label: "Features", width: "w-[90px]", href: "#features" },
    { label: "Commands", width: "w-[108px]", href: "#commands" },
    { label: "About", width: "w-[72px]", href: "#about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? `${isDark ? 'bg-[#1a1a1a]/95' : 'bg-white/95'} shadow-lg shadow-blue-900/5` 
          : `${isDark ? 'bg-[#1a1a1a]/50' : 'bg-white/50'}`
      } backdrop-blur-lg border-b ${isDark ? 'border-blue-900/20' : 'border-blue-200/20'}`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-4 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <motion.img 
              className="w-8 h-8"
              alt="Icon"
              src="/icon-1.svg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            />
            <div className={`[text-shadow:0px_0px_8px_#90b3ba] font-['Playfair_Display',Helvetica] font-bold ${isDark ? 'text-blue-300 group-hover:text-blue-200' : 'text-blue-600 group-hover:text-blue-700'} text-2xl leading-8 tracking-[0] whitespace-nowrap transition-colors duration-300`}>
              ARIA
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="ghost"
                  className={`${item.width} h-10 rounded-lg ${isDark ? 'hover:bg-blue-500/10 hover:text-blue-300' : 'hover:bg-blue-500/10 hover:text-blue-600'}`}
                  onClick={() => handleNavClick(item.href)}
                >
                  <span className={`font-['Inter',Helvetica] font-medium ${isDark ? 'text-zinc-400 hover:text-blue-300' : 'text-zinc-600 hover:text-blue-600'} text-sm transition-colors duration-300`}>
                    {item.label}
                  </span>
                </Button>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleTheme}
                className={`w-10 h-10 rounded-lg ${isDark ? 'hover:bg-blue-500/10' : 'hover:bg-blue-500/10'}`}
              >
                {isDark ? (
                  <Sun className="h-5 w-5 text-zinc-400 hover:text-blue-300 transition-colors duration-300" />
                ) : (
                  <Moon className="h-5 w-5 text-zinc-600 hover:text-blue-600 transition-colors duration-300" />
                )}
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Button 
                className={`h-10 px-6 ${
                  isDark 
                    ? 'bg-blue-600/80 hover:bg-blue-600 text-white' 
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                } rounded-lg backdrop-blur-sm shadow-lg shadow-blue-500/20 transition-all duration-300`}
                onClick={() => window.open("https://discord.com/oauth2/authorize?client_id=1355425916221653054", "_blank")}
              >
                <span className="font-['Inter',Helvetica] font-medium text-sm">
                  Add to Discord
                </span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`w-10 h-10 rounded-lg ${isDark ? 'hover:bg-blue-500/10' : 'hover:bg-blue-500/10'}`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? (
                    <X className={`h-6 w-6 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`} />
                  ) : (
                    <Menu className={`h-6 w-6 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`} />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden ${isDark ? 'bg-[#1a1a1a]/95' : 'bg-white/95'} backdrop-blur-lg border-t ${isDark ? 'border-blue-900/20' : 'border-blue-200/20'}`}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    className={`w-full text-left justify-start h-12 rounded-lg ${isDark ? 'hover:bg-blue-500/10' : 'hover:bg-blue-500/10'}`}
                    onClick={() => handleNavClick(item.href)}
                  >
                    <span className={`font-['Inter',Helvetica] font-medium ${isDark ? 'text-zinc-400 hover:text-blue-300' : 'text-zinc-600 hover:text-blue-600'} text-sm transition-colors duration-300`}>
                      {item.label}
                    </span>
                  </Button>
                </motion.div>
              ))}
              
              <div className="pt-2 flex flex-col gap-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Button 
                    variant="ghost" 
                    onClick={toggleTheme}
                    className={`w-full justify-start h-12 rounded-lg ${isDark ? 'hover:bg-blue-500/10' : 'hover:bg-blue-500/10'}`}
                  >
                    <span className={`font-['Inter',Helvetica] font-medium ${isDark ? 'text-zinc-400 hover:text-blue-300' : 'text-zinc-600 hover:text-blue-600'} text-sm flex items-center gap-2 transition-colors duration-300`}>
                      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                      {isDark ? 'Light Mode' : 'Dark Mode'}
                    </span>
                  </Button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Button 
                    className={`w-full h-12 ${
                      isDark 
                        ? 'bg-blue-600/80 hover:bg-blue-600 text-white' 
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    } rounded-lg backdrop-blur-sm shadow-lg shadow-blue-500/20 transition-all duration-300`}
                    onClick={() => window.open("https://discord.com/oauth2/authorize?client_id=1355425916221653054", "_blank")}
                  >
                    <span className="font-['Inter',Helvetica] font-medium text-sm">
                      Add to Discord
                    </span>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};