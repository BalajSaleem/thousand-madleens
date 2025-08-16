"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import InteractiveMap from "@/components/interactive-map";
import {
  Ship,
  Heart,
  Users,
  DollarSign,
  Share2,
  Megaphone,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ExternalLink,
  Anchor,
  Globe,
  HandHeart,
  MessageSquare,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

export default function MadleensGazaLanding() {
  const [activeRole, setActiveRole] = useState("sailors");

  const newsArticles = [
    {
      id: 1,
      title: "THE 1000 FLOTILLA INITIATIVE TO BREAK THE SIEGE",
      image:
        "https://mapim.org.my/wp-content/uploads/2025/06/THE-1000-FLOTILLA-INITIATIVE-TO-BREAK-THE-SIEGE-1200x480.png",
      description:
        "A comprehensive look at the ambitious campaign to organize 1000 ships from around the world in solidarity with Gaza, breaking the blockade through peaceful maritime resistance.",
      source: "MAPIM",
      sourceIcon: MapPin,
      badge: "Breaking News",
      badgeColor: "bg-green-600",
      borderColor: "border-green-200",
      buttonColor: "border-green-600 text-green-600 hover:bg-green-50",
      link: "https://mapim.org.my/2025/06/13/the-1000-flotilla-initiative-to-break-the-siege/",
    },
    {
      id: 2,
      title:
        "A Thousand Madleens: New Civilian Fleet Readies to Defy Israeli Blockade",
      image:
        "https://qudsnen.co/wp-content/uploads/2025/06/IMG_5537-780x432.jpeg",
      description:
        "International civil society prepares an unprecedented maritime flotilla as civilians worldwide unite to challenge the blockade of Gaza through coordinated peaceful action.",
      source: "Quds News",
      sourceIcon: Globe,
      badge: "Featured",
      badgeColor: "bg-red-600",
      borderColor: "border-red-200",
      buttonColor: "border-red-600 text-red-600 hover:bg-red-50",
      link: "https://qudsnen.co/a-thousand-madleens-new-civilian-fleet-readies-to-defy-israeli-blockade/",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header
        className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/logo.jpg"
              alt="1000 Madleens to Gaza Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold text-black">
              1000 Madleens to Gaza
            </span>
          </div>
          <nav className="hidden md:flex space-x-12">
            <a
              href="#mission"
              className="text-gray-700 font-bold hover:text-green-600 transition-colors"
            >
              Mission
            </a>
            <a
              href="#support"
              className="text-gray-700 font-bold hover:text-green-600 transition-colors"
            >
              Support
            </a>
            <a
              href="#community"
              className="text-gray-700 font-bold hover:text-green-600 transition-colors"
            >
              Community
            </a>
            <a
              href="#contact"
              className="text-gray-700 font-bold hover:text-green-600 transition-colors"
            >
              Contact
            </a>
          </nav>
          <Link target="_blank" href={"linktr.ee/thousand.madleens"}>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Join the Movement
            </Button>
          </Link>
        </div>
      </motion.header>

      {/* Combined Hero/Mission Section */}
      <section className="relative min-h-screen bg-black text-white">
        {/* Banner Image Background */}
        <div className="absolute inset-0">
          <img
            src="thousand-madleens-banner.jpg"
            alt="Sailboat with Palestinian flag sailing on the Mediterranean Sea - 1000 Madleens to Gaza campaign"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 "></div>
        </div>

        <div className="relative z-10">
          {/* Hero Content */}
          <div className="container mx-auto px-4 pt-48 pb-16">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 drop-shadow-lg">
                1000 Madleens to Gaza
              </h1>
              <div className="inline-block bg-black px-6 py-3 mb-8">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                  Breaking the Blockage
                </h2>
              </div>
              <p className="text-xl md:text-2xl lg:text-3xl drop-shadow-lg mb-8">
                1000 Ships. One Mission. Free Gaza.
              </p>
              <p className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
                A global maritime flotilla campaign to break the blockade of
                Gaza through peaceful solidarity. Inspired by resilience, driven
                by hope, united in action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  target="_blank"
                  href="https://chuffed.org/project/138012-a-thousand-madleens-to-gaza"
                >
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4"
                  >
                    <HandHeart className="mr-2 h-5 w-5" />
                    Support the Mission
                  </Button>
                </Link>
                <Link
                  target="_blank"
                  href={"https://linktr.ee/thousand.madleens"}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent px-8 py-4"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Join Community
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Mission Cards at Bottom - Leaking out of section */}
          <div className="container mx-auto px-4 pb-0 pt-12">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-200">
                  A tribute to the resilience and patience of the people of
                  Gaza, and a collective movement to stand alongside them.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 transform translate-y-8">
                <Card className="bg-black border-green-600 border-2 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-400 text-xl">
                      <Heart className="mr-2 h-6 w-6" />
                      Tribute to Resilience
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200">
                      The "Madleen" represents the unwavering spirit of the
                      Palestinians who refuse to accept injustice. Our campaign
                      honors the courage of all who have sailed these waters
                      before us, carrying hope across the Mediterranean.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black border-green-600 border-2 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-400 text-xl">
                      <Globe className="mr-2 h-6 w-6" />
                      Global Solidarity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200">
                      From every corner of the world, we unite in peaceful
                      resistance. 1000 ships from many nations will converge to
                      break the Israeli genocidal blockade through the power of
                      international civil society.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Goals & Organization */}
      <section className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-green-600 mb-6">
                Goals & Organization
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our mission is organized around clear objectives and coordinated
                international action.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-center mx-auto mb-6">
                  <Ship className="h-16 w-16 text-green-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-green-600 mb-4">
                  Maritime Flotilla
                </h3>
                <p className="text-gray-700">
                  Coordinate 1000 ships from multiple nations to converge and
                  sail together toward Gaza, creating an unprecedented peaceful
                  maritime demonstration.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-center mx-auto mb-6">
                  <Anchor className="h-16 w-16 text-green-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-green-600 mb-4">
                  Break the Blockade
                </h3>
                <p className="text-gray-700">
                  Challenge the illegal blockade through peaceful resistance,
                  bringing international attention to the humanitarian crisis
                  and demanding open borders.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-center mx-auto mb-6">
                  <Users className="h-16 w-16 text-green-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-green-600 mb-4">
                  Global Unity
                </h3>
                <p className="text-gray-700">
                  Build an international coalition of civil society
                  organizations, activists, and supporters committed to justice
                  and human rights.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flotilla Map - Fixed Layout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Global Departure Points
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Ships from around the world will depart from these locations to
                join the historic flotilla to Gaza.
              </p>
            </div>

            <InteractiveMap />

            {/* Call to Action */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className=" p-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Join the Global Fleet
                </h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Is your country organizing ships for the flotilla? Contact us
                  to add your departure location to our global map and
                  coordinate with the international fleet.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Ship className="mr-2 h-4 w-4" />
                    Register Departure Point
                  </Button>
                  <Button
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    View All Locations
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Financial Support */}
      <section id="support" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Support the Mission
              </h2>
              <p className="text-lg text-gray-700">
                Your financial support helps fund ships, supplies, and
                coordination efforts for this historic flotilla.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-700">
                    Direct Donations
                  </CardTitle>
                  <CardDescription>
                    Support the flotilla organization directly
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <DollarSign className="mr-2 h-4 w-4" />
                    Donate Now
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-green-600 text-green-600 bg-transparent"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    PayPal Donation
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-green-600 text-green-600 bg-transparent"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Bank Transfer
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-700">Sponsor a Ship</CardTitle>
                  <CardDescription>
                    Help fund an entire vessel for the flotilla
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-red-50">
                    <p className="text-2xl font-bold text-red-700">$50,000</p>
                    <p className="text-sm text-gray-600">
                      Average cost per ship
                    </p>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <Ship className="mr-2 h-4 w-4" />
                    Sponsor a Ship
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-red-600 text-red-600 bg-transparent"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Group Sponsorship
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Join Our Community
              </h2>
              <p className="text-lg text-gray-700">
                Connect with supporters worldwide, organize local events, and
                amplify our message.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-green-600" />
                    Organize Groups
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Start local support groups and organize fundraising events
                    in your community.
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Start a Local Group
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Find Groups Near You
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5 text-red-600" />
                    Community Events
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Organize solidarity events and fundraising activities in
                    your area.
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Plan an Event
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Upcoming Events
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Voice/Advocacy */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Raise Your Voice
              </h2>
              <p className="text-lg text-gray-700">
                Contact your elected representatives and those in power to
                support our peaceful mission.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Megaphone className="mr-2 h-5 w-5 text-green-600" />
                    Contact Representatives
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Find and contact your local representatives with our
                    advocacy toolkit.
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Find My Representatives
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Download Advocacy Kit
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5 text-red-600" />
                    Letter Templates
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Pre-written letters to government officials and
                    international bodies.
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Download Letters
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Customize Template
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                How You Can Contribute
              </h2>
              <p className="text-lg text-gray-700">
                Different roles for different skills - everyone has a part to
                play in this historic mission.
              </p>
            </div>

            <Tabs
              value={activeRole}
              onValueChange={setActiveRole}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="sailors">Sailors</TabsTrigger>
                <TabsTrigger value="navigators">Navigators</TabsTrigger>
                <TabsTrigger value="officials">Officials</TabsTrigger>
                <TabsTrigger value="citizens">Citizens</TabsTrigger>
              </TabsList>

              <TabsContent value="sailors" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-700">
                      <Ship className="mr-2 h-5 w-5" />
                      Sailors & Crew
                    </CardTitle>
                    <CardDescription>
                      Experienced maritime professionals and volunteers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Requirements:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Maritime experience preferred</li>
                          <li>• Valid passport and documentation</li>
                          <li>• Commitment to peaceful resistance</li>
                          <li>• Physical fitness for sea voyage</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">
                          Responsibilities:
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Ship operations and maintenance</li>
                          <li>• Safety protocols and procedures</li>
                          <li>• Coordination with flotilla</li>
                          <li>• Media and documentation support</li>
                        </ul>
                      </div>
                    </div>
                    <Button className="mt-6 bg-green-600 hover:bg-green-700">
                      Apply as Sailor
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="navigators" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-700">
                      <Anchor className="mr-2 h-5 w-5" />
                      Navigators & Technical
                    </CardTitle>
                    <CardDescription>
                      Navigation, communications, and technical specialists
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Requirements:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Navigation or technical certification</li>
                          <li>• GPS and communication systems experience</li>
                          <li>• International waters knowledge</li>
                          <li>• Emergency response training</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">
                          Responsibilities:
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Route planning and coordination</li>
                          <li>• Inter-ship communications</li>
                          <li>• Weather monitoring and safety</li>
                          <li>• Technical equipment maintenance</li>
                        </ul>
                      </div>
                    </div>
                    <Button className="mt-6 bg-red-600 hover:bg-red-700">
                      Apply as Navigator
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="officials" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-black">
                      <Users className="mr-2 h-5 w-5" />
                      Officials & Coordinators
                    </CardTitle>
                    <CardDescription>
                      Legal, diplomatic, and organizational leadership
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Requirements:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Legal or diplomatic background</li>
                          <li>• International law knowledge</li>
                          <li>• Multi-language capabilities</li>
                          <li>• Crisis management experience</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">
                          Responsibilities:
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Legal compliance and documentation</li>
                          <li>• Government and media relations</li>
                          <li>• International coordination</li>
                          <li>• Strategic planning and oversight</li>
                        </ul>
                      </div>
                    </div>
                    <Button className="mt-6 bg-black hover:bg-gray-800 text-white">
                      Apply as Official
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="citizens" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-700">
                      <Heart className="mr-2 h-5 w-5" />
                      Citizens & Supporters
                    </CardTitle>
                    <CardDescription>
                      Ground support, advocacy, and community organizing
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">How to Help:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Fundraising and donations</li>
                          <li>• Social media advocacy</li>
                          <li>• Local event organization</li>
                          <li>• Community outreach</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Impact Areas:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Public awareness campaigns</li>
                          <li>• Political pressure and lobbying</li>
                          <li>• Solidarity events and demonstrations</li>
                          <li>• Educational workshops</li>
                        </ul>
                      </div>
                    </div>
                    <Button className="mt-6 bg-green-600 hover:bg-green-700">
                      Join as Supporter
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-700">
                Common questions about the 1000 Madleens to Gaza campaign.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What is the 1000 Madleens to Gaza campaign?
                </AccordionTrigger>
                <AccordionContent>
                  The 1000 Madleens to Gaza is a global civil society campaign
                  aiming to organize a massive maritime flotilla of 1000 ships
                  from many nations worldwide. The campaign seeks to break the
                  blockade of Gaza through peaceful, coordinated international
                  action, inspired by the recent voyage of the vessel "Madleen."
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How will the flotilla be organized?
                </AccordionTrigger>
                <AccordionContent>
                  Ships from participating nations will converge at a designated
                  meeting point near Palestine before jointly sailing toward
                  Gaza. The operation will be coordinated through international
                  civil society organizations, with careful attention to
                  maritime law, safety protocols, and peaceful resistance
                  principles.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Is this a peaceful mission?</AccordionTrigger>
                <AccordionContent>
                  Yes, absolutely. The 1000 Madleens to Gaza campaign is
                  committed to peaceful resistance and non-violent action. All
                  participants must agree to strict non-violence protocols, and
                  the mission operates within the framework of international law
                  and civil disobedience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How can I participate if I'm not a sailor?
                </AccordionTrigger>
                <AccordionContent>
                  There are many ways to support the campaign: financial
                  donations, organizing local support groups, advocacy with
                  elected representatives, social media campaigns, fundraising
                  events, and spreading awareness in your community. Every form
                  of support contributes to the mission's success.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  What are the legal implications?
                </AccordionTrigger>
                <AccordionContent>
                  The campaign operates within international maritime law and
                  the principles of civil disobedience. Participants are
                  informed of potential legal risks, and the campaign works with
                  legal experts to ensure compliance with international law
                  while challenging what we consider to be an illegal blockade.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  When will the flotilla sail?
                </AccordionTrigger>
                <AccordionContent>
                  The timeline depends on successful coordination of ships,
                  crews, and international support. Updates on timing will be
                  provided through our official channels as planning progresses.
                  Safety and thorough preparation are prioritized over speed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* News Section - Updated to use mapped articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Latest News
              </h2>
              <p className="text-lg text-gray-700">
                Stay updated with the latest developments in our mission to Gaza
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {newsArticles.map((article, index) => {
                const SourceIcon = article.sourceIcon;
                const isExternal = article.link.startsWith("http");

                return (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card
                      className={`overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow duration-300 ${article.borderColor}`}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className={`${article.badgeColor} text-white`}>
                            {article.badge}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-black mb-3 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {article.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <SourceIcon className="h-4 w-4" />
                            <span>{article.source}</span>
                          </div>
                          {isExternal ? (
                            <Link href={article.link} target="_blank">
                              <Button
                                variant="outline"
                                size="sm"
                                className={`${article.buttonColor} bg-transparent`}
                              >
                                Read More
                                <ExternalLink className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                          ) : (
                            <Button
                              variant="outline"
                              size="sm"
                              className={`${article.buttonColor} bg-transparent`}
                            >
                              Read More
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Contact Us
              </h2>
              <p className="text-lg text-gray-700">
                Get in touch with our campaign coordinators and support team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    We'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input type="email" placeholder="Email Address" />
                  <Input placeholder="Subject" />
                  <Textarea
                    placeholder="Your message..."
                    className="min-h-[120px]"
                  />
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Mail className="mr-2 h-5 w-5 text-green-600" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">info@1000madleens.org</p>
                    <p className="text-gray-700">press@1000madleens.org</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="mr-2 h-5 w-5 text-red-600" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">
                      International Coordination
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-black" />
                      Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      International Coordination Office
                      <br />
                      123 Maritime Way
                      <br />
                      Global City, GC 12345
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section - Moved to Bottom */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Follow Our Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Stay updated with the latest news, ship registrations, and
              campaign progress across all our social platforms.
            </p>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <motion.a
                href="#"
                className="flex flex-col items-center p-6 bg-gray-800 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Facebook className="h-12 w-12 text-blue-400 mb-3" />
                <span className="font-semibold">Facebook</span>
                <span className="text-sm text-gray-400">Daily Updates</span>
              </motion.a>

              <motion.a
                href="#"
                className="flex flex-col items-center p-6 bg-gray-800 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href="https://x.com/1kMadleentoGaza"
                  target="_blank"
                  className="flex flex-col items-center"
                >
                  <Twitter className="h-12 w-12 text-blue-400 mb-3" />
                  <span className="font-semibold">Twitter</span>
                  <span className="text-sm text-gray-400">Live Updates</span>
                </Link>
              </motion.a>

              <motion.a
                href="#"
                className="flex flex-col items-center p-6 bg-gray-800 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href="https://www.instagram.com/thousandmadleenstogaza/?utm_source=ig_web_button_share_sheet"
                  target="_blank"
                  className="flex flex-col items-center"
                >
                  <Instagram className="h-12 w-12 text-pink-400 mb-3" />
                  <span className="font-semibold">Instagram</span>
                  <span className="text-sm text-gray-400">Behind Scenes</span>
                </Link>
              </motion.a>

              <motion.a
                href="#"
                className="flex flex-col items-center p-6 bg-gray-800 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Youtube className="h-12 w-12 text-red-400 mb-3" />
                <span className="font-semibold">YouTube</span>
                <span className="text-sm text-gray-400">Documentaries</span>
              </motion.a>
            </div>

            <div className="bg-gray-800 p-6">
              <h3 className="text-xl font-bold mb-4">Share Our Mission</h3>
              <div className="bg-gray-700 p-4 mb-4">
                <p className="text-sm text-gray-300 italic">
                  "Join the historic #1000MadleensToGaza flotilla! 🚢 Breaking
                  the blockade through peaceful solidarity. Together we sail for
                  justice and human rights. #FreePalestine #BreakTheBlockade"
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-green-600 hover:bg-green-700">
                  <Share2 className="mr-2 h-4 w-4" />
                  Copy Message
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Download Graphics
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Important Disclaimer
              </h2>
            </div>

            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center text-red-700">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Legal and Safety Notice
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  <strong>Peaceful Mission:</strong> The 1000 Madleens to Gaza
                  campaign is committed to peaceful, non-violent resistance. All
                  participants must agree to strict non-violence protocols.
                </p>
                <p>
                  <strong>Legal Risks:</strong> Participants should be aware
                  that this mission may involve legal risks, including potential
                  detention or legal proceedings. We recommend consulting with
                  legal counsel before participating.
                </p>
                <p>
                  <strong>Safety First:</strong> Maritime operations carry
                  inherent risks. All vessels must meet safety standards, and
                  participants must have appropriate maritime experience or
                  training.
                </p>
                <p>
                  <strong>International Law:</strong> This campaign operates
                  within the framework of international maritime law and the
                  principles of civil disobedience in challenging what we
                  consider to be violations of international law.
                </p>
                <p>
                  <strong>Independent Participation:</strong> Participation in
                  this campaign is voluntary and at your own risk. The campaign
                  organizers cannot be held responsible for individual decisions
                  or consequences.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="public/logo.jpg"
                  alt="1000 Madleens to Gaza Logo"
                  className="h-8 w-8 object-contain filter brightness-0 invert"
                />
                <span className="text-lg font-bold">1000 Madleens</span>
              </div>
              <p className="text-gray-400 text-sm">
                Breaking the blockade through peaceful solidarity and
                international cooperation.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#mission"
                    className="hover:text-green-400 transition-colors"
                  >
                    Mission
                  </a>
                </li>
                <li>
                  <a
                    href="#support"
                    className="hover:text-green-400 transition-colors"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#community"
                    className="hover:text-green-400 transition-colors"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-green-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Get Involved</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Volunteer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Organize
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Advocate
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-green-400 bg-transparent"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-green-400 bg-transparent"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-green-400 bg-transparent"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-green-400 bg-transparent"
                >
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} 1000 Madleens to Gaza Campaign. All
              rights reserved. |
              <a
                href="#"
                className="hover:text-green-400 transition-colors ml-1"
              >
                Privacy Policy
              </a>{" "}
              |
              <a
                href="#"
                className="hover:text-green-400 transition-colors ml-1"
              >
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
