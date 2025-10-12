




const CertificationCard = ({ cert }) => {
    return (
        <div className="bg-slate-800/50 rounded-lg p-5 flex items-center space-x-4 border border-slate-700/50 transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
            <img src={cert.logo} alt={`${cert.issuer} logo`} className="w-16 h-16 flex-shrink-0 object-contain"/>
            <div className="flex-grow">
                <h4 className="font-bold text-slate-100">{cert.name}</h4>
                <p className="text-sm text-slate-400">{cert.issuer}</p>
                <p className="text-xs text-slate-500 mt-1">Issued: {cert.date}</p>
                <a 
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-sm group-hover:underline font-semibold mt-2 inline-flex items-center space-x-1.5 group"
                >
                    Verify Credential
                </a>
            </div>
        </div>
    );
};

export default CertificationCard;