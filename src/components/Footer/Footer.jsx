



const Footer = () =>{



    return (
        <div className="bg-[#2c3e50] bottom-0 fixed w-full text-center justify-center
            [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)] 
            [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]"
        >
            <p>&copy; {new Date().getFullYear()} Akshay Parande. All rights reserved.</p>
        </div>
    )
}

export default Footer;