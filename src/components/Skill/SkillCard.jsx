import { motion } from "framer-motion";

export default function SkillCard({ skill }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative group bg-[#0f172a] text-white p-6 rounded-2xl shadow-lg h-20 w-48 overflow-hidden cursor-pointer transition-all duration-500 hover:h-auto hover:w-72"
    >
      <div className="flex items-center gap-3">
        <img src={skill.logo} alt={skill.name} className="w-10 h-10" />
        <h3 className="text-lg font-semibold">{skill.name}</h3>
      </div>

      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-3">
        <p className="text-sm text-orange-400 font-medium mb-2">
          Level: {skill.level}
        </p>

        <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
          <div
            className="bg-gradient-to-r from-orange-700 to-yellow-300 h-3 rounded-full transition-all duration-700"
            style={{ width: `${skill.levelPercent}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-300 mb-2">{skill.levelPercent}%</p>

        <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
          {skill.concepts.map((concept, i) => (
            <li key={i}>{concept}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
