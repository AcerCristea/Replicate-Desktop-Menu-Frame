import { motion } from 'motion/react';

export function LoadingSkeleton() {
  return (
    <div className="flex flex-col gap-[20px]">
      {[...Array(10)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: index * 0.1,
          }}
          className="flex gap-[17px] items-start py-2"
        >
          <div className="w-[240px] h-[16px] bg-[#3e6064] bg-opacity-20 rounded" />
          <div className="w-[150px] h-[16px] bg-[#3e6064] bg-opacity-20 rounded" />
          <div className="w-[150px] h-[16px] bg-[#3e6064] bg-opacity-20 rounded" />
          <div className="w-[60px] h-[16px] bg-[#3e6064] bg-opacity-20 rounded ml-auto" />
        </motion.div>
      ))}
    </div>
  );
}
