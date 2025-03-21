import Education from "../../assets/education.png"
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FadeUp } from "../Hero/Hero";
import { motion } from "framer-motion";

const BannerList = [
    {
        id: 1,
        title: "10,000+ Courses",
        link: "#",
        icon: <FaBookReader />,
        delay: 0.2,
    },
    {
        id: 2,
        title: "Expert Instructors",
        link: "#",
        icon: <GrUserExpert/>,
        delay: 0.3,
    },
    {
        id: 3,
        title: "Lifetime Access",
        link: "#",
        icon: <MdOutlineAccessTime/>,
        delay: 0.4,
    },
]

const Banner = () => {
  return (
    <section>
        <div className="container flex justify-items-center gap-6 p-10">
            <div className='flex justify-center items-center m-auto'>
                <motion.img 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className='w-100 h-100 align-center' 
                src={Education} alt="Image Banner" />
            </div>
            <div>

                <h1 className='text-4xl font-bold'> The World's Online Learning Platform</h1>
                
                <div className='grid grid-cols-1 gap-6 mt-10'>
                {BannerList.map((item) => (
                    <motion.div 
                    variants={FadeUp(item.delay)}
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{ once: true }}
                    key={item.id} className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl duration-300 hover:shadow-xl">
                            <div className="text-2xl">{item.icon}</div>
                            <h3>{item.title}</h3>
                    </motion.div>))}
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Banner