"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Code2,
  Sparkles,
  Terminal,
  Rocket,
  Brain,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 border-orange-500/30 backdrop-blur-sm shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col items-center text-center space-y-8">
              {/* Icon animation */}
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full" />
                <div className="relative animate-float">
                  <Terminal className="w-20 h-20 md:w-28 md:h-28 text-orange-500 animate-pulse-glow" />
                </div>
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold animate-gradient bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                  Claude Code Power!
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
                  Template built with Next.js, Tailwind CSS, Shadcn UI, TypeScript & Lucide Icons
                </p>
              </div>

              {/* Feature badges */}
              <div className="flex flex-wrap justify-center gap-3">
                <Badge icon={<Code2 className="w-4 h-4" />} text="Next.js 15" />
                <Badge icon={<Sparkles className="w-4 h-4" />} text="Tailwind v4" />
                <Badge icon={<Zap className="w-4 h-4" />} text="Shadcn UI" />
                <Badge icon={<Brain className="w-4 h-4" />} text="TypeScript" />
                <Badge icon={<Rocket className="w-4 h-4" />} text="Lucide Icons" />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-orange-500/25 transition-all hover:shadow-orange-500/40"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:text-orange-300 px-8 py-6 text-lg"
                >
                  <Code2 className="w-5 h-5 mr-2" />
                  View Code
                </Button>
              </div>

              {/* Footer text */}
              <p className="text-sm text-gray-500 pt-4">
                Powered by <span className="text-orange-400 font-semibold">Claude AI</span> & <span className="text-orange-400 font-semibold">Anthropic</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 bg-gray-800/60 border border-orange-500/20 rounded-full px-4 py-2 text-sm text-gray-300 hover:border-orange-500/50 hover:bg-gray-800 transition-all cursor-default">
      <span className="text-orange-400">{icon}</span>
      {text}
    </div>
  );
}
