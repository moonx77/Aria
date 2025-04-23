import React from "react";
import { AboutSection } from "./sections/AboutSection";
import { CommandsSection } from "./sections/CommandsSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { SupportSection } from "./sections/SupportSection";
import { useTheme } from "../../lib/theme";

export const Screen = (): JSX.Element => {
  const { isDark } = useTheme();
  
  return (
    <main className={`w-full ${isDark ? 'bg-[#1a1a1a]' : 'bg-gray-50'}`}>
      <HeaderSection />
      <HeroSection />
      <div id="features" className="scroll-mt-16">
        <FeaturesSection />
      </div>
      <div id="commands" className="scroll-mt-16">
        <CommandsSection />
      </div>
      <SupportSection />
      <div id="about" className="scroll-mt-16">
        <AboutSection />
      </div>
    </main>
  );
};