import { ClockIcon, RefreshCwIcon, HeartIcon, MessageCircleIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { motion } from "framer-motion";
import { useTheme } from "../../../../lib/theme";

export const SupportSection = (): JSX.Element => {
  const { isDark } = useTheme();

  const supportCards = [
    {
      title: "24/7 Support",
      icon: <ClockIcon className="h-6 w-6 text-blue-400" />,
      description: [
        "Join our Discord community for instant help",
        "and updates",
      ],
    },
    {
      title: "Regular Updates",
      icon: <RefreshCwIcon className="h-6 w-6 text-blue-400" />,
      description: [
        "New features and improvements added",
        "regularly"
      ],
    },
    {
      title: "Active Community",
      icon: <HeartIcon className="h-6 w-6 text-blue-400" />,
      description: [
        "Join thousands of users sharing",
        "experiences and tips"
      ],
    },
    {
      title: "Friendly Support Team",
      icon: <MessageCircleIcon className="h-6 w-6 text-blue-400" />,
      description: [
        "Our team is always ready to help",
        "with any questions"
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
          Support &amp; Community
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1400px] mx-auto">
          {supportCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className={`h-full rounded-lg overflow-hidden ${isDark ? 'bg-zinc-900/50' : 'bg-white/50'} backdrop-blur-sm border-zinc-800 hover:border-blue-500/50 transition-all duration-300`}>
                <CardContent className="p-8 flex flex-col items-center">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center mb-6"
                  >
                    {card.icon}
                  </motion.div>
                  <h3 className={`font-['Playfair_Display',Helvetica] font-bold text-xl md:text-2xl mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {card.title}
                  </h3>
                  <div className="text-center">
                    {card.description.map((line, i) => (
                      <p
                        key={i}
                        className={`font-['Inter',Helvetica] font-normal text-base ${isDark ? 'text-zinc-400' : 'text-gray-600'} leading-6`}
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