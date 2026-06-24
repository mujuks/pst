import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function Footer(){


const year = new Date().getFullYear();



const links = [

{
name:"Home",
path:"/"
},

{
name:"About Us",
path:"/about"
},

{
name:"Training",
path:"/training"
},

{
name:"Join Cohort",
path:"/joincohort"
},

{
name:"Contact",
path:"/contact"
}

];




return(


<footer className="
bg-gray-950
text-white
mt-20
overflow-hidden
">





<motion.div


initial={{
opacity:0,
y:50
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


transition={{
duration:0.8
}}


className="
max-w-7xl
mx-auto
px-6
py-16
grid
sm:grid-cols-2
lg:grid-cols-3
gap-14
"

>









{/* BRAND SECTION */}


<div className="
space-y-6
">



<motion.h2


whileHover={{
scale:1.03
}}


className="
text-3xl
font-bold
leading-snug
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


</motion.h2>





<p className="
text-gray-400
leading-7
max-w-sm
">


Preparing God's People for God's Work.


Equipping leaders for transformation in
churches, organizations and communities.


</p>







<div className="
flex
gap-5
pt-3
">



<a

href="#"

className="
w-11
h-11
rounded-full
bg-white/10
flex
items-center
justify-center
hover:bg-yellow-600
transition
"

>

f

</a>





<a

href="#"

className="
w-11
h-11
rounded-full
bg-white/10
flex
items-center
justify-center
hover:bg-yellow-600
transition
"

>

𝕏

</a>





<a

href="https://wa.me/2547045148380"

target="_blank"

className="
w-11
h-11
rounded-full
bg-white/10
flex
items-center
justify-center
hover:bg-green-600
transition
"

>

💬

</a>



</div>




</div>












{/* QUICK LINKS */}



<div>


<h3 className="
text-xl
font-bold
text-yellow-500
mb-7
">





</h3>




<ul className="
space-y-5
">


{


links.map(link=>(


<motion.li

key={link.path}


whileHover={{
x:8
}}


transition={{
duration:0.2
}}

>


<Link

to={link.path}


className="
text-gray-400
hover:text-white
transition
"

>


{link.name}


</Link>


</motion.li>


))


}


</ul>


</div>













{/* CONTACT */}



<div>


<h3 className="
text-xl
font-bold
text-yellow-500
mb-7
">

Contact

</h3>





<div className="
space-y-5
text-gray-400
">



<p className="
flex
items-center
gap-3
">

📞

+254 7045148380

</p>





<p className="
flex
items-center
gap-3
">

✉️

info@empowerequiptransform.com

</p>





<p className="
flex
items-center
gap-3
">

📍

Kenya | East Africa

</p>







<div className="
mt-8
bg-white/5
rounded-2xl
p-6
border
border-white/10
">


<p className="
italic
text-gray-300
text-lg
">

"Ephesians 4:11-13"

</p>



<p className="
mt-3
text-sm
leading-relaxed
">

Equipping the saints for the work of ministry.

</p>



</div>




</div>




</div>







</motion.div>













{/* COPYRIGHT */}



<motion.div


initial={{
opacity:0
}}


whileInView={{
opacity:1
}}


viewport={{
once:true
}}


className="
border-t
border-gray-800
mt-6
py-6
text-center
text-gray-500
text-sm
"

>


© {year} Empower Equip Transform.
All Rights Reserved.


</motion.div>







</footer>


)

}