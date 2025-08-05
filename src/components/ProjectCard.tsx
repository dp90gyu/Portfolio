import { motion } from 'framer-motion';

type Props = {
  title: string;
  description: string;
};

export default function ProjectCard({ title, description }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-left shadow-md w-full max-w-sm transition-all"
    >
      <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-200">{description}</p>
    </motion.div>
  );
}
