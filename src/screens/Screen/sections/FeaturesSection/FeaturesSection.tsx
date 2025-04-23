import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { motion } from "framer-motion";
import { Heart, Music, Zap, Users } from "lucide-react";
import { useTheme } from "../../../../lib/theme";

export const FeaturesSection = (): JSX.Element => {
  const { isDark } = useTheme();
  
  const features = [
    {
      title: "24/7 Reliability",
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      description: [
        "Always online and ready to play your music with",
        "consistent uptime",
      ],
    },
    {
      title: "Multi-Platform Support",
      icon: <Music className="w-6 h-6 text-blue-400" />,
      description: [
        "Seamlessly play music from Spotify, YouTube,",
        "and SoundCloud",
      ],
    },
    {
      title: "Premium Audio Quality",
      icon: <Users className="w-6 h-6 text-blue-400" />,
      description: ["Crystal clear sound with adjustable audio filters"],
    },
    {
      title: "Roleplay Commands",
      icon: <Heart className="w-6 h-6 text-blue-400" />,
      description: [
        "Express yourself with interactive commands:",
        "hug, pat, kiss, slap, and more!"
      ],
    }
  ];

  return (
    <section className={`relative w-full py-20 ${isDark ? 'bg-[#1a1a1a]' : 'bg-gray-50'} overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(90,144,213,0.1),transparent_50%)]"
        />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-5xl font-bold text-center mb-16 font-['Playfair_Display',Helvetica] ${isDark ? 'text-white' : 'text-gray-900'}`}
        >
          Why Choose Aria?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1400px] mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="w-full"
            >
              <Card className={`h-full min-h-[204px] rounded-lg overflow-hidden ${isDark ? 'bg-zinc-900/50' : 'bg-white/50'} backdrop-blur-sm border-zinc-800 hover:border-blue-500/50 transition-all duration-300`}>
                <CardContent className="p-8 h-full relative flex flex-col items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4"
                  >
                    {feature.icon}
                  </motion.div>

                  <h3 className={`font-['Playfair_Display',Helvetica] font-bold ${isDark ? 'text-white' : 'text-gray-900'} text-xl md:text-2xl mb-4 text-center`}>
                    {feature.title}
                  </h3>

                  <div className="text-center">
                    {feature.description.map((line, lineIndex) => (
                      <p
                        key={lineIndex}
                        className={`font-['Inter',Helvetica] font-normal ${isDark ? 'text-zinc-400' : 'text-gray-600'} text-base leading-6`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};