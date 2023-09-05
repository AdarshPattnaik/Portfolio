import { HiHome } from "react-icons/hi";
import { HiRectangleGroup } from "react-icons/hi2";
import { BiSolidUserPin } from "react-icons/bi";
import { SiPolymerproject } from "react-icons/si";
import { TfiThought } from "react-icons/tfi";
import { GrMail } from "react-icons/gr";

const NavData = [
    {
        name: 'Home',
        value: 'home',
        path: '/',
        icon: <HiHome />
    },
    {
        name: 'Know About Me',
        value: 'about',
        path: '/about',
        icon: <BiSolidUserPin />
    },
    {
        name: 'Offerings',
        value: 'services',
        path: '/services',
        icon: <HiRectangleGroup />
    },
    {
        name: 'Projects',
        value: 'projects',
        path: '/projects',
        icon: <SiPolymerproject />
    },
    {
        name: "Testimonials",
        value: 'thought',
        path: '/thought',
        icon: <TfiThought />
    },
    {
        name: 'Contact Me',
        value: 'contact',
        path: '/contact',
        icon: <GrMail />
    },
];

export default NavData;