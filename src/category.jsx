import { MdOutlineDoneAll } from "react-icons/md";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { FaHamburger } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa6";
import { SiMainwp } from "react-icons/si";
import { IoFastFoodSharp } from "react-icons/io5";
import { CiBowlNoodles } from "react-icons/ci";


 const Categories = [
    {
        id:1,
        name:"All",
        image:<MdOutlineDoneAll className="w-[60px] h-[60px] text-green-600" />
    },
    {
         id:2,
        name:"breakfast",
        image:<MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600" />
    },
     {
         id:3,
        name:"soups",
        image:<CiBowlNoodles className="w-[60px] h-[60px] text-green-600" />
    },
     {
         id:4,
        name:"pasta",
        image:<IoFastFoodSharp className="w-[60px] h-[60px] text-green-600"/>
    },
     {
         id:5,
        name:"main_course",
        image:<SiMainwp className="w-[60px] h-[60px] text-green-600" />
    },
     {
         id:6,
        name:"pizza",
        image:<FaPizzaSlice className="w-[60px] h-[60px] text-green-600"/>
    },
      {
         id:7,
        name:"burger",
        image:<FaHamburger  className="w-[60px] h-[60px] text-green-600"/>
    }

]
export default Categories;