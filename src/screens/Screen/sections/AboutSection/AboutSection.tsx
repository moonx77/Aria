import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { motion } from "framer-motion";
import { useTheme } from "../../../../lib/theme";

export const AboutSection = (): JSX.Element => {
  const { isDark } = useTheme();
  
  const teamMembers = [
    {
      name: "Moonx",
      role: "Lead Developer",
    },
    {
      name: "Renn",
      role: "Bot Designer",
    },
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
          Meet the Team
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="w-full md:w-[424px]"
            >
              <Card className={`h-full min-h-[128px] rounded-lg overflow-hidden ${isDark ? 'bg-zinc-900/50' : 'bg-white/50'} backdrop-blur-sm border-zinc-800 hover:border-blue-500/50 transition-all duration-300`}>
                <CardContent className="flex flex-col items-center justify-center h-full p-8">
                  <motion.h3 
                    whileHover={{ scale: 1.05 }}
                    className={`font-['Playfair_Display',Helvetica] font-bold text-2xl ${isDark ? 'text-blue-400' : 'text-blue-600'} mb-4`}
                  >
                    {member.name}
                  </motion.h3>
                  <p className={`font-['Inter',Helvetica] font-normal text-base ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};