import { AiFillHome, AiOutlineHome, AiOutlinePlusCircle, AiFillPlusCircle, AiOutlineDollarCircle, AiFillDollarCircle } from 'react-icons/ai'
import { CgProfile } from "react-icons/cg";
import { MdPersonSearch } from "react-icons/md";
import { FaPhotoVideo } from 'react-icons/fa';
export const menu = [
    { title: "Home", icon: <AiOutlineHome className='text-2xl mr-5'></AiOutlineHome>, activeIcon: <AiFillHome className='text-2xl mr-5'></AiFillHome> },
    {
        title: "search", icon: <MdPersonSearch className='text-2xl mr-5'></MdPersonSearch>, activeIcon: <MdPersonSearch className='text-2xl mr-5'></MdPersonSearch>
    },
    {
        title: "AddEmployee", icon: <AiOutlinePlusCircle className='text-2xl mr-5'></AiOutlinePlusCircle>, activeIcon: <AiFillPlusCircle className='text-2xl mr-5'></AiFillPlusCircle>
    },
    {
        title: "PayMoney", icon: <AiOutlineDollarCircle className='text-2xl mr-5'></AiOutlineDollarCircle>, activeIcon: <AiFillDollarCircle className='text-2xl mr-5'></AiFillDollarCircle>
    }, {
        title: "Create", icon: <FaPhotoVideo className='text-2xl mr-5'></FaPhotoVideo>, activeIcon: <FaPhotoVideo className='text-2xl mr-5'></FaPhotoVideo>
    },
    {
        title: "Profile", icon: <CgProfile className='text-2xl mr-5'></CgProfile>, activeIcon: <CgProfile className='text-2xl mr-5'></CgProfile>
    }
]