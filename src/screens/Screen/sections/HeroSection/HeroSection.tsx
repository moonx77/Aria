import { HeadphonesIcon, Music2Icon, AudioWaveformIcon as WaveformIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { motion } from "framer-motion";
import { useTheme } from "../../../../lib/theme";

export const HeroSection = (): JSX.Element => {
  const { isDark } = useTheme();

  return (
    <section className={`relative w-full min-h-screen pt-16 sm:pt-20 md:pt-32 pb-12 sm:pb-16 md:pb-24 ${isDark ? 'bg-[#1a1a1a]' : 'bg-gray-50'} overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(90,144,213,0.2),transparent_70%)]"
        />
        <motion.div
          initial={{ scale: 0, x: -100 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 -left-20 sm:left-10 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/20 rounded-full filter blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, x: 100 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-20 -right-20 sm:right-10 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/20 rounded-full filter blur-3xl"
        />
      </div>

      <div className="container relative flex flex-col items-center justify-center max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center space-y-8 sm:space-y-10">
          {/* Icon */}
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative mb-2 p-6 sm:p-8 rounded-full bg-blue-500/20 backdrop-blur-lg border border-blue-500/30"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <HeadphonesIcon className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 ${isDark ? 'text-blue-400' : 'text-blue-500'}`} />
            </motion.div>
          </motion.div>

          {/* Title and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} font-['Playfair_Display',Helvetica] tracking-tight [text-shadow:0px_0px_15px_rgba(85,168,247,0.4)]`}>
              Aria
            </h1>
            <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-light ${isDark ? 'text-zinc-300' : 'text-gray-700'} font-['Inter',Helvetica] leading-relaxed max-w-3xl mx-auto`}>
              Experience Discord Music Like Never Before
            </p>
            <p className={`text-base sm:text-lg md:text-xl font-light ${isDark ? 'text-zinc-400' : 'text-gray-600'} font-['Inter',Helvetica] leading-relaxed max-w-2xl mx-auto`}>
              Crystal-clear Sound • Seamless Playback • Advanced Features
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-full max-w-4xl mx-auto px-2 sm:px-4"
          >
            {[
              { label: "Active Servers", value: "40+" },
              { label: "Happy Users", value: "22k+" },
              { label: "Total Commands", value: "70+" },
              { label: "Service Uptime", value: "99.9%" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`flex flex-col items-center p-3 sm:p-4 md:p-6 rounded-xl backdrop-blur-sm ${isDark ? 'bg-blue-500/5 border border-blue-500/20' : 'bg-white/30 border border-blue-200/30'}`}
              >
                <span className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 ${isDark ? 'text-blue-400' : 'text-blue-500'} font-['Playfair_Display',Helvetica]`}>
                  {stat.value}
                </span>
                <span className={`text-xs sm:text-sm md:text-base ${isDark ? 'text-zinc-400' : 'text-gray-600'} font-['Inter',Helvetica] text-center`}>
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="w-full sm:w-auto"
            >
              <Button 
                className={`w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-10 text-base sm:text-lg font-medium ${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-xl backdrop-blur-sm shadow-lg shadow-blue-500/20`}
                onClick={() => window.open("https://discord.com/oauth2/authorize?client_id=1355425916221653054", "_blank")}
              >
                Add to Discord
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                className={`w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-10 text-base sm:text-lg font-medium border-2 ${isDark ? 'border-blue-500/50 text-blue-400 hover:bg-blue-500/10' : 'border-blue-400/50 text-blue-600 hover:bg-blue-400/10'} rounded-xl backdrop-blur-sm shadow-lg shadow-blue-500/10`}
                onClick={() => document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Features
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating icons */}
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-[5%] sm:left-[10%] top-1/4 hidden sm:block"
        >
          <Music2Icon className={`w-8 sm:w-12 h-8 sm:h-12 ${isDark ? 'text-blue-500/40' : 'text-blue-400/40'}`} />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -10, 10, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute right-[5%] sm:right-[10%] bottom-1/4 hidden sm:block"
        >
          <WaveformIcon className={`w-8 sm:w-12 h-8 sm:h-12 ${isDark ? 'text-blue-500/40' : 'text-blue-400/40'}`} />
        </motion.div>
      </div>
    </section>
  );
};