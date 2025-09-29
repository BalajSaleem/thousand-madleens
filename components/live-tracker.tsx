"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Radar, Waves, ExternalLink, Compass } from "lucide-react";
import Link from "next/link";

export default function LiveTracker() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Track the Flotilla Live
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Follow the real-time movements and status of ships participating
              in the 1000 Madleens to Gaza campaign as they navigate toward
              their historic mission.
            </p>
          </div>

          {/* Main Tracker Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="relative overflow-hidden border-2 border-green-200 bg-white shadow-xl">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 via-green-400 to-blue-400" />
              </div>

              {/* Floating Animation Elements */}
              <div className="absolute top-4 right-4">
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity },
                  }}
                >
                  <Compass className="h-8 w-8 text-green-600 opacity-20" />
                </motion.div>
              </div>

              <div className="absolute bottom-4 left-4">
                <motion.div
                  animate={{
                    y: [-5, 5, -5],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Waves className="h-6 w-6 text-blue-600" />
                </motion.div>
              </div>

              <CardContent className="relative p-8 md:p-12 text-center">
                {/* Main Content */}
                <div className="space-y-6">
                  {/* Call to Action Button */}
                  <Link
                    href="https://thousandmadleens.fr/tracker/"
                    target="_blank"
                    className="inline-block"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold px-8 py-4 shadow-lg"
                      >
                        <Radar className="mr-3 h-5 w-5" />
                        Launch Live Tracker
                        <ExternalLink className="ml-3 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </Link>

                  {/* Subtitle */}
                  <p className="text-sm text-gray-500 mt-4">
                    Opens in a new window • Updates regularly
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Info Cards */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
