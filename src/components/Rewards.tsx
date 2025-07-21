
import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface RewardItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface RewardsProps {
  title: string;
  subtitle: string;
  items: RewardItem[];
}

const Rewards: React.FC<RewardsProps> = ({ title, subtitle, items }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif font-light">{title}</h2>
        <p className="text-muted-foreground mt-2">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((reward, index) => (
          <motion.div
            key={reward.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-start space-x-4"
          >
            <div className="bg-gold-100 p-3 rounded-full">
              <reward.icon className="h-6 w-6 text-gold-600" />
            </div>
            <div>
              <h3 className="font-medium">{reward.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{reward.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Rewards;
