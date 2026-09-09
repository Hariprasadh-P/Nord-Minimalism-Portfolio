"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hold preloader for 2.5 seconds as per original specification
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-6">
              <img src="/assets/logo/nord-logo.svg" alt="Nord Media House" className="w-full h-full object-contain" />
            </div>
            <div className="text-sm font-semibold tracking-[0.2em] mb-2 uppercase">NORD</div>
            <div className="text-[10px] text-gray-400 tracking-wider uppercase mb-8">Directional Creative Studio &bull; Est. 2024</div>
            <div className="w-48 h-[1px] bg-gray-200 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-black"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
