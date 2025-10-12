
import { NavLink } from "react-router-dom";



const Header = () => {



    return(
        <div className="flex bg-[#2c3e50] h-15 ml-3 mr-3 justify-center text-center
            [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)] 
            [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]"
        >
            <div className="w-1/2 font-normal text-3xl text-purple-500 text-center p-2">
                <h1>Akshay Parande Portfolio</h1>
            </div>
            <ul className="flex w-1/2 items-center m-2.5 gap-2.5">
                <li>
                    <NavLink to="/" 
                        className={({isActive})=>
                            `block font-bold py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"}`
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/skill"
                        className={({isActive})=>
                            `block font-bold py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"}`
                        }
                    >
                        Skills
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/project" className={({isActive})=>
                            `block font-bold py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"}`
                        }
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/achievement" className={({isActive})=>
                            `block font-bold py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"}`
                        }
                    >
                        Achievements
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({isActive})=>
                            `block font-bold py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"}`
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header;