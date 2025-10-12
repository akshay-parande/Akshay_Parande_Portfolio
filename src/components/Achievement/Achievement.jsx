
import achievements from "../../assets/Data/achievements.json"
import certificates from "../../assets/Data/certifications.json"
import AchievementCard from "./AchievementCard";
import CertificationCard from "./CertificationCard";

const Achievement = () => {



    return(
        <div className="py-16 md:py-20">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-medium text-slate-100">Certifications & Credentials</h2>
                <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
                    My commitment to continuous learning is validated by these industry-recognized certifications.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {certificates.map(cert=>(
                    <CertificationCard key={cert.id} cert={cert}/>
                ))}
            </div>
            <div className="text-center my-12">
                <h2 className="text-2xl md:text-3xl font-medium text-slate-100">Coding Achievements</h2>
                <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
                    My progress in competitive programming and cybersecurity challenges.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {achievements.map(ach => (
                    <AchievementCard key={ach.id} achievement={ach} />
                ))}
            </div>
        </div>
    )
}


export default Achievement;