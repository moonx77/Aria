import { FilterIcon, InfoIcon, MusicIcon, SettingsIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../../../../components/ui/card";
import { motion } from "framer-motion";
import { useTheme } from "../../../../lib/theme";

export const CommandsSection = (): JSX.Element => {
  const { isDark } = useTheme();
  
  const commandCategories = [
    {
      title: "Music Commands",
      description:
        "High-quality music from multiple platforms with advanced features",
      icon: <MusicIcon className="w-6 h-6 text-blue-400" />,
      commands: [
        "autoplay",
        "247",
        "grab",
        "join",
        "play",
        "loop",
        "nowplaying",
        "pause",
      ],
    },
    {
      title: "Config Commands",
      description: "Manage your profile and customize it however you like",
      icon: <SettingsIcon className="w-6 h-6 text-blue-400" />,
      commands: ["Config", "ignore", "prefix", "preset", "profile", "balance"],
    },
    {
      title: "Filter Commands",
      description:
        "Manage or shape the sound by attenuating or boosting specific frequency",
      icon: <FilterIcon className="w-6 h-6 text-blue-400" />,
      commands: ["enhance", "equalizer", "filter", "optimize"],
    },
    {
      title: "Information Commands",
      description: "Fetch or display descriptive data of our bot",
      icon: <InfoIcon className="w-6 h-6 text-blue-400" />,
      commands: ["help", "invite", "ping", "report", "stats", "support"],
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
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-5xl font-bold text-center mb-16 font-['Playfair_Display',Helvetica] ${isDark ? 'text-white' : 'text-gray-900'}`}
        >
          What Aria Can Do?
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1400px] mx-auto">
          {commandCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className={`h-full rounded-lg overflow-hidden ${isDark ? 'bg-zinc-900/50' : 'bg-white/50'} backdrop-blur-sm border-zinc-800 hover:border-blue-500/50 transition-all duration-300`}>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-3 mb-4">
                    {category.icon}
                    <CardTitle className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} font-['Playfair_Display',Helvetica]`}>
                      {category.title}
                    </CardTitle>
                  </div>

                  <CardDescription className={`text-base ${isDark ? 'text-zinc-400' : 'text-gray-600'} mb-6 font-['Inter',Helvetica]`}>
                    {category.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2">
                    {category.commands.map((command, cmdIndex) => (
                      <motion.div
                        key={cmdIndex}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-blue-500/20 text-blue-300 font-normal rounded-full px-3 py-1 h-7 font-['Inter',Helvetica]"
                        >
                          {command}
                        </Badge>
                      </motion.div>
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