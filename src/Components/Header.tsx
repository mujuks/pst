import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


export default function Header(){


const [open,setOpen] = useState(false);

const location = useLocation();



const menu = [

{
name:"Home",
path:"/"
},

{
name:"About",
path:"/about"
},

{
name:"Training",
path:"/training"
},

{
name:"Contact",
path:"/contact"
}

];




return (


<motion.header

initial={{
y:-100,
opacity:0
}}

animate={{
y:0,
opacity:1
}}

transition={{
duration:0.6
}}

className="
fixed
top-0
w-full
z-50
bg-white/90
backdrop-blur-lg
shadow-lg
"

>


<div className="
max-w-7xl
mx-auto
px-6
py-4
flex
justify-between
items-center
">






{/* LOGO */}


<motion.div

whileHover={{
scale:1.05
}}

transition={{
duration:0.2
}}

>


<Link

to="/"

className="
text-xl
md:text-2xl
font-bold
text-blue-950
tracking-wide
"

>


EMPOWER

<span className="
text-yellow-600
">

 |

</span>


 EQUIP


<span className="
text-yellow-600
">

 |

</span>


 TRANSFORM


</Link>


</motion.div>









{/* DESKTOP NAV */}



<nav className="
hidden
md:flex
items-center
gap-8
">


{

menu.map(item=>(


<Link

key={item.path}

to={item.path}

className={`
relative
font-medium
transition
duration-300

${
location.pathname === item.path

?

"text-blue-950"

:

"text-gray-600 hover:text-blue-950"

}

`}

>


{item.name}




{

location.pathname === item.path &&


<motion.span

layoutId="active"

className="
absolute
left-0
right-0
-bottom-2
h-0.75
bg-yellow-600
rounded-full
"

/>

}



</Link>


))


}



</nav>










{/* CTA BUTTON */}



<motion.div

whileHover={{
scale:1.05
}}

>


<Link


to="/joincohort"


className="
hidden
md:block
bg-yellow-600
text-white
px-7
py-3
rounded-full
font-semibold
shadow-md
hover:bg-yellow-700
transition
"


>


Join Cohort


</Link>


</motion.div>









{/* MOBILE BUTTON */}



<button


onClick={()=>setOpen(!open)}


className="
md:hidden
text-3xl
text-blue-950
"


>


{


open

?

"✕"

:

"☰"


}



</button>



</div>













{/* MOBILE MENU */}



<AnimatePresence>


{


open &&



<motion.div


initial={{

opacity:0,

height:0

}}


animate={{

opacity:1,

height:"auto"

}}


exit={{

opacity:0,

height:0

}}



className="
md:hidden
overflow-hidden
bg-white
shadow-lg
px-6
pb-6
"



>


<div className="
space-y-4
pt-4
">


{


menu.map(item=>(



<Link

key={item.path}

to={item.path}

onClick={()=>setOpen(false)}


className="
block
text-lg
font-medium
text-gray-700
hover:text-blue-950
transition
"


>


{item.name}


</Link>


))


}





<Link


to="/joincohort"


onClick={()=>setOpen(false)}


className="
block
text-center
bg-yellow-600
text-white
py-3
rounded-full
font-semibold
mt-5
"


>


Join Cohort


</Link>


</div>



</motion.div>


}



</AnimatePresence>




</motion.header>



)

}