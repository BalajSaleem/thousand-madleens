"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navigation, Ship, Globe } from "lucide-react";

const locations = [
  {
    id: 1,
    country: "United Kingdom",
    ships: 0,
    status: "Organizing",
    statusColor: "bg-green-100 text-green-800",
    lat: 50.8198,
    lng: -1.088,
    color: "red",
  },
  {
    id: 2,
    country: "France",
    ships: 5,
    status: "Preparing",
    statusColor: "bg-blue-100 text-blue-800",
    lat: 43.2965,
    lng: 5.3698,
    color: "green",
  },
  {
    id: 3,
    country: "Malaysia",
    ships: 0,
    status: "Planning",
    statusColor: "bg-yellow-100 text-yellow-800",
    lat: 3.0044,
    lng: 101.3997,
    color: "black",
  },
  {
    id: 4,
    country: "Turkey",
    ships: 0,
    status: "Ready",
    statusColor: "bg-green-100 text-green-800",
    lat: 41.0082,
    lng: 28.9784,
    color: "red",
  },
  {
    id: 5,
    country: "Spain",
    ships: 0,
    status: "Organizing",
    statusColor: "bg-yellow-100 text-yellow-800",
    lat: 41.3851,
    lng: 2.1734,
    color: "green",
  },
  {
    id: 6,
    country: "Norway",
    ships: 0,
    status: "Planning",
    statusColor: "bg-blue-100 text-blue-800",
    lat: 59.9139,
    lng: 10.7522,
    color: "black",
  },
];

export default function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="text-center mb-8">
        <motion.div
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-red-100 px-4 py-2 rounded-full mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Globe className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium text-gray-700">
            Global Departure Points
          </span>
        </motion.div>
      </div>

      {/* Location Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {locations.map((location, index) => (
          <motion.div
            key={location.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              className={`border-${
                location.color === "black" ? "gray" : location.color
              }-200 ${
                selectedLocation === location.id ? "ring-2 ring-blue-500" : ""
              } cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              onClick={() =>
                setSelectedLocation(
                  selectedLocation === location.id ? null : location.id
                )
              }
            >
              <CardHeader className="pb-3">
                <CardTitle
                  className={`flex items-center text-${
                    location.color === "black" ? "gray-800" : location.color
                  }-700 text-lg`}
                >
                  <div
                    className={`w-3 h-3 bg-${
                      location.color === "black" ? "gray-800" : location.color
                    }-600 rounded-full mr-3`}
                  ></div>
                  {location.country}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 flex items-center">
                      <Ship className="h-3 w-3 mr-1" />
                      Ships Registered:
                    </span>
                    <span
                      className={`font-bold text-lg text-${
                        location.color === "black" ? "gray-800" : location.color
                      }-600`}
                    >
                      {location.ships}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Status:</span>
                    <Badge variant="secondary" className={location.statusColor}>
                      {location.status}
                    </Badge>
                  </div>

                  {selectedLocation === location.id && (
                    <motion.div
                      className="mt-4 pt-3 border-t border-gray-200"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <div className="space-y-2 text-xs text-gray-600">
                        <p>• Coordination with local maritime authorities</p>
                        <p>• Safety equipment and crew training</p>
                        <p>• International legal compliance</p>
                        <p>• Media and documentation support</p>
                      </div>
                      <Button
                        size="sm"
                        className={`w-full mt-3 bg-${
                          location.color === "black"
                            ? "gray-800"
                            : location.color
                        }-600 hover:bg-${
                          location.color === "black"
                            ? "gray-700"
                            : location.color
                        }-700 text-white`}
                      >
                        <Ship className="mr-1 h-3 w-3" />
                        Join {location.country} Fleet
                      </Button>
                    </motion.div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Summary Statistics */}
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">
                {locations.reduce((sum, loc) => sum + loc.ships, 0)}
              </div>
              <div className="text-sm text-gray-600 mb-1">Ships Registered</div>
              <div className="text-xs text-gray-500">
                Goal: 1000 ships (
                {Math.round(
                  (locations.reduce((sum, loc) => sum + loc.ships, 0) / 1000) *
                    100
                )}
                % complete)
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
          <Card className="bg-gradient-to-r from-red-50 to-red-100 border-red-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-red-700 mb-2">
                {locations.length}
              </div>
              <div className="text-sm text-gray-600 mb-1">
                Countries Participating
              </div>
              <div className="text-xs text-gray-500">Across 3 continents</div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <Card className="bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200">
            <CardContent className="p-6 text-center">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                <Navigation className="mr-2 h-4 w-4" />
                Register Your Ship
              </Button>
              <div className="text-xs text-gray-500 mt-2">
                Add your departure location
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
