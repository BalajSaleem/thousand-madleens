"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation, Globe, Instagram, ExternalLink } from "lucide-react";
import Link from "next/link";
import content from "../content.json";

export default function InteractiveMap() {
  const { locations, registerButton } = content.map;

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="text-center mb-4 sm:mb-8">
        <motion.div
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-green-100 px-4 py-2 rounded-full mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Globe className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium text-gray-700">
            {content.map.title}
          </span>
        </motion.div>
      </div>

      {/* Location Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
        {locations.map((location, index) => (
          <motion.div
            key={location.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group h-full">
              <CardContent className="p-4 sm:p-6 text-center flex flex-col justify-between h-full">
                <div>
                  <div className="text-2xl sm:text-3xl mb-2">
                    {location.flag}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-3">
                    {location.country}
                  </h3>
                </div>

                {/* Links Section */}
                <div className="space-y-2">
                  {location.links.linktree && (
                    <Link
                      href={location.links.linktree}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-xs border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300"
                      >
                        <ExternalLink className="mr-1.5 h-3 w-3" />
                        Join Delegation
                      </Button>
                    </Link>
                  )}

                  {location.links.instagram && (
                    <Link
                      href={location.links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full text-xs text-gray-600 hover:text-pink-600 hover:bg-pink-50"
                      >
                        <Instagram className="mr-1.5 h-3 w-3" />
                        Follow
                      </Button>
                    </Link>
                  )}

                  {/* Fallback for countries with only Instagram */}
                  {!location.links.linktree && location.links.instagram && (
                    <Link
                      href={location.links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-xs border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300 mt-2"
                      >
                        <Instagram className="mr-1.5 h-3 w-3" />
                        Join via Instagram
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Summary Statistics */}
      <div className="space-y-4 sm:space-y-6">
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-700 mb-2">
                  {locations.length}
                </div>
                <div className="text-sm sm:text-base text-gray-600 mb-1">
                  Country Delegations
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  Building the global fleet
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-700 mb-2">
                  1000
                </div>
                <div className="text-sm sm:text-base text-gray-600 mb-1">
                  Ships Goal
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  Historic maritime mission
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Register Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <Card className="bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200">
            <CardContent className="p-4 sm:p-6 text-center">
              <Link
                href={registerButton.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base py-3 sm:py-4">
                  <Navigation className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {registerButton.label}
                </Button>
              </Link>
              <div className="text-xs sm:text-sm text-gray-500 mt-3">
                {registerButton.description}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
