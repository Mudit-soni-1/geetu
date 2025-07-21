
import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, X, Image, MessageCircle, Video } from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogClose
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

// Client stories data with support for different media types
const clientStories = [
  {
    name: "Sarah M.",
    text: "The birth chart reading was incredibly accurate and gave me deep insights into my life path. Highly recommended!",
    rating: 5,
    image: "https://source.unsplash.com/random/100x100?portrait&1",
    media: [
      { type: "image", url: "https://source.unsplash.com/random/600x400?spiritual&1", caption: "My personalized birth chart" },
      { type: "chat", url: "https://source.unsplash.com/random/600x800?chat&1", caption: "Our helpful conversation" }
    ]
  },
  {
    name: "Michael R.",
    text: "The tarot reading provided clarity during a difficult time. The guidance was both practical and spiritual.",
    rating: 5,
    image: "https://source.unsplash.com/random/100x100?portrait&2",
    media: [
      { type: "video", url: "https://source.unsplash.com/random/600x400?tarot&1", caption: "Video testimonial" },
      { type: "image", url: "https://source.unsplash.com/random/600x400?cards&1", caption: "My tarot spread" }
    ]
  },
  {
    name: "Emma L.",
    text: "I've been attending the spiritual workshops for 3 months now, and the transformation in my life has been remarkable.",
    rating: 5,
    image: "https://source.unsplash.com/random/100x100?portrait&3",
    media: [
      { type: "chat", url: "https://source.unsplash.com/random/600x800?chat&2", caption: "My journey shared in chat" },
      { type: "image", url: "https://source.unsplash.com/random/600x400?spiritual&2", caption: "During a workshop" },
      { type: "video", url: "https://source.unsplash.com/random/600x400?meditation&1", caption: "My video feedback" }
    ]
  },
  {
    name: "James T.",
    text: "Geetikaa's guidance helped me see patterns in my life I was blind to before. The energy healing sessions were transformative.",
    rating: 5,
    image: "https://source.unsplash.com/random/100x100?portrait&4",
    media: [
      { type: "image", url: "https://source.unsplash.com/random/600x400?healing&1", caption: "During my healing session" },
      { type: "chat", url: "https://source.unsplash.com/random/600x800?chat&3", caption: "Follow-up guidance" }
    ]
  }
];

const Testimonials = () => {
  const [selectedStory, setSelectedStory] = useState<null | typeof clientStories[0]>(null);
  const [selectedTab, setSelectedTab] = useState("all");

  const filterStories = () => {
    if (selectedTab === "all") return clientStories;
    
    return clientStories.filter(story => 
      story.media.some(media => media.type === selectedTab)
    );
  };

  const openStory = (story: typeof clientStories[0]) => {
    setSelectedStory(story);
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 font-medium">Client Stories</span>
          <h2 className="text-4xl font-serif font-light mt-2">Transformational Journeys</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Real stories from real people whose lives changed through TheKarmaAtree's guidance and services.
          </p>
          
          <div className="mt-8">
            <Tabs defaultValue="all" value={selectedTab} onValueChange={setSelectedTab} className="w-full max-w-md mx-auto">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="image">Photos</TabsTrigger>
                <TabsTrigger value="video">Videos</TabsTrigger>
                <TabsTrigger value="chat">Chats</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filterStories().map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => openStory(story)}
            >
              <div className="flex gap-4 items-center mb-4">
                <Avatar>
                  <AvatarImage src={story.image} alt={story.name} />
                  <AvatarFallback>{story.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">{story.name}</h3>
                  <div className="flex gap-1">
                    {Array.from({ length: story.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 text-amber-200" size={24} />
                <p className="text-muted-foreground relative z-10 pl-4 mb-4">{story.text}</p>
              </div>
              
              <div className="flex gap-2 items-center mt-4">
                <span className="text-xs text-muted-foreground">Media:</span>
                {story.media.map((media, idx) => (
                  <span 
                    key={idx} 
                    className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center"
                    title={`View ${media.type}`}
                  >
                    {media.type === 'image' && <Image size={12} />}
                    {media.type === 'video' && <Video size={12} />}
                    {media.type === 'chat' && <MessageCircle size={12} />}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dialog for viewing detailed client story */}
      <Dialog open={!!selectedStory} onOpenChange={(open) => !open && setSelectedStory(null)}>
        <DialogContent className="max-w-4xl">
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          
          {selectedStory && (
            <div className="py-2">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={selectedStory.image} alt={selectedStory.name} />
                  <AvatarFallback>{selectedStory.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-medium">{selectedStory.name}</h2>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: selectedStory.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <Quote className="text-amber-200 mr-2 inline-block" size={20} />
                <p className="text-lg italic text-muted-foreground inline">{selectedStory.text}</p>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-6">
                <h3 className="font-medium text-lg">Media Shared</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedStory.media.map((media, idx) => (
                    <div key={idx} className="border rounded-lg overflow-hidden">
                      <div className="aspect-video relative bg-muted">
                        {media.type === 'image' && (
                          <img 
                            src={media.url} 
                            alt={media.caption} 
                            className="w-full h-full object-cover"
                          />
                        )}
                        {media.type === 'video' && (
                          <div className="w-full h-full flex items-center justify-center bg-black/5">
                            <Video size={48} className="text-amber-500" />
                            <span className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                              Video
                            </span>
                          </div>
                        )}
                        {media.type === 'chat' && (
                          <div className="w-full h-full flex items-center justify-center bg-gray-50">
                            <img 
                              src={media.url} 
                              alt={media.caption} 
                              className="w-full h-full object-cover"
                            />
                            <span className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                              Chat
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-3">
                        <p className="text-sm text-muted-foreground">{media.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Testimonials;
