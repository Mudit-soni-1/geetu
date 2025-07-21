
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Events data
const events = {
  past: [
    {
      id: 1,
      title: "Spiritual Awakening Workshop",
      description: "A transformative workshop exploring the journey of spiritual awakening and self-discovery.",
      image: "https://source.unsplash.com/random/800x600?meditation&1",
      date: "March 15, 2025",
      location: "Yoga Studio, New Delhi",
      time: "10:00 AM - 4:00 PM",
      tags: ["Workshop", "Spiritual Growth"]
    },
    {
      id: 2,
      title: "Full Moon Ceremony",
      description: "A powerful full moon ritual to release negative energy and manifest new beginnings.",
      image: "https://source.unsplash.com/random/800x600?fullmoon&1",
      date: "February 24, 2025",
      location: "Beach Resort, Goa",
      time: "7:00 PM - 10:00 PM",
      tags: ["Ceremony", "Manifestation"]
    },
    {
      id: 3,
      title: "Astrology & Your Career Path",
      description: "Understanding how your birth chart can guide your professional decisions and career development.",
      image: "https://source.unsplash.com/random/800x600?astrology&1",
      date: "January 18, 2025",
      location: "Urban Wellness Center, Mumbai",
      time: "2:00 PM - 5:00 PM",
      tags: ["Astrology", "Career"]
    },
  ],
  upcoming: [
    {
      id: 4,
      title: "Tarot Reading Masterclass",
      description: "Learn the art of intuitive tarot reading in this comprehensive hands-on masterclass.",
      image: "https://source.unsplash.com/random/800x600?tarot&1",
      date: "May 8, 2025",
      location: "Spiritual Center, Bangalore",
      time: "11:00 AM - 6:00 PM",
      tags: ["Masterclass", "Tarot"],
      registrationLink: "#register"
    },
    {
      id: 5,
      title: "Energy Healing Retreat",
      description: "A weekend retreat focused on chakra balancing, energy clearing, and spiritual rejuvenation.",
      image: "https://source.unsplash.com/random/800x600?retreat&1",
      date: "June 12-14, 2025",
      location: "Mountain Resort, Rishikesh",
      time: "All Day",
      tags: ["Retreat", "Healing"],
      registrationLink: "#register"
    },
    {
      id: 6,
      title: "New Moon Intention Setting",
      description: "A guided ceremony to set powerful intentions aligned with the lunar cycle.",
      image: "https://source.unsplash.com/random/800x600?newmoon&1",
      date: "July 5, 2025",
      location: "Garden Sanctuary, Delhi",
      time: "7:00 PM - 9:00 PM",
      tags: ["Ceremony", "Manifestation"],
      registrationLink: "#register"
    },
  ]
};

const Events = () => {
  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 font-medium">Events</span>
          <h2 className="text-4xl font-serif font-light mt-2">Join Our Transformational Gatherings</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Experience the power of community and spiritual growth through our carefully curated events.
          </p>
        </motion.div>

        <Tabs defaultValue="upcoming" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="upcoming" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.upcoming.map((event) => (
                <EventCard key={event.id} event={event} isUpcoming={true} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="past" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.past.map((event) => (
                <EventCard key={event.id} event={event} isUpcoming={false} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

interface EventCardProps {
  event: {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    location: string;
    time: string;
    tags: string[];
    registrationLink?: string;
  };
  isUpcoming: boolean;
}

const EventCard = ({ event, isUpcoming }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative">
          <AspectRatio ratio={16/9}>
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
          <div className="absolute top-3 right-3 flex gap-2">
            {event.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="bg-black/60 text-white hover:bg-black/80">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl">{event.title}</CardTitle>
          <CardDescription>{event.description}</CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-3 flex-grow">
          <div className="flex items-start gap-2">
            <Calendar className="h-4 w-4 text-amber-600 mt-0.5" />
            <span className="text-sm">{event.date}</span>
          </div>
          
          <div className="flex items-start gap-2">
            <Clock className="h-4 w-4 text-amber-600 mt-0.5" />
            <span className="text-sm">{event.time}</span>
          </div>
          
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-amber-600 mt-0.5" />
            <span className="text-sm">{event.location}</span>
          </div>
        </CardContent>
        
        <CardFooter>
          {isUpcoming && event.registrationLink ? (
            <Button variant="default" className="w-full bg-amber-600 hover:bg-amber-700">
              Register <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default Events;
