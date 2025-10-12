import SkillCard from "./SkillCard";

import skills from "../../assets/Data/skills.json"


const Skill = () => {



    return (
        <div className="flex flex-col items-center py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-10">My Skills</h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
    )
}

export default Skill;