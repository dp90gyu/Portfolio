import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';

function About() {
  const skills = [
    { name: 'Frontend', icon: Palette, items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    { name: 'Backend', icon: Code, items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { name: 'Tools', icon: Zap, items: ['Git', 'Docker', 'AWS', 'Figma'] },
    { name: 'Soft Skills', icon: Users, items: ['Team Leadership', 'Problem Solving', 'Agile', 'Communication'] },
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              Passionate Developer & Problem Solver
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I'm a full-stack developer with a passion for creating exceptional digital experiences. 
                With expertise in modern web technologies, I focus on building scalable, user-centric applications 
                that solve real-world problems.
              </p>
              <p>
                My journey in software development has taught me the importance of clean code, 
                thoughtful design, and continuous learning. I believe in writing code that's not just 
                functional, but also maintainable and elegant.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-1 rounded-2xl">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <skill.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{skill.name}</h4>
                      <div className="space-y-1">
                        {skill.items.map((item, i) => (
                          <div key={i} className="text-sm text-gray-600 dark:text-gray-400">{item}</div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Experience Highlights */}
        {/* Removed the experience section as requested */}
      </div>
    </section>
  );
}

export default About;