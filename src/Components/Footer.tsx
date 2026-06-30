import { Link } from "react-router-dom";
import { motion } from "framer-motion";



export default function Footer(){


const year = new Date().getFullYear();





const links=[

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






const training=[

"Church Leadership Institute",

"Marketplace Leadership Academy",

"Corporate Training",

"Leadership Coaching"

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
y:40
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


transition={{
duration:.8
}}


className="
max-w-7xl
mx-auto
px-6
py-16
grid
md:grid-cols-2
lg:grid-cols-4
gap-12
"


>







{/* BRAND */}



<div>


<h2 className="
text-3xl
font-black
leading-tight
">


EMPOWER

<span className="text-yellow-500">

 |

</span>


 EQUIP


<span className="text-yellow-500">

 |

</span>


 TRANSFORM



</h2>





<p className="
mt-5
text-gray-400
leading-7
">


Preparing God's People for God's Work.


<br/>


Equipping leaders to transform churches,
organizations and communities through
biblical leadership development.


</p>






<div className="
mt-6
bg-white/5
rounded-2xl
p-5
border
border-white/10
">


<p className="
text-yellow-500
font-bold
">


Ephesians 4:11-13


</p>



<p className="
mt-3
text-gray-400
text-sm
leading-relaxed
">


Equipping the saints for the work of ministry
and building the body of Christ.


</p>



</div>




</div>









{/* QUICK LINKS */}




<div>


<h3 className="
text-xl
font-bold
text-yellow-500
mb-6
">

Explore

</h3>




<ul className="
space-y-4
">


{

links.map(link=>(



<motion.li

key={link.path}

whileHover={{
x:8
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









{/* TRAINING */}




<div>


<h3 className="
text-xl
font-bold
text-yellow-500
mb-6
">


Training


</h3>




<ul className="
space-y-4
">


{

training.map(item=>(


<li

key={item}

className="
text-gray-400
"

>

{item}

</li>


))


}


</ul>





<p className="
mt-6
text-gray-400
text-sm
leading-relaxed
">


We serve both the Church and Marketplace,
equipping pastors, leaders, CEOs,
managers and entrepreneurs.


</p>



</div>









{/* CONTACT */}





<div>


<h3 className="
text-xl
font-bold
text-yellow-500
mb-6
">

Contact

</h3>




<div className="
space-y-5
text-gray-400
">



<p>

📞 +254 7045148380

</p>



<p>

✉️ info@empowerequiptransform.com

</p>



<p>

📍 Kenya | East Africa

</p>





<a

href="https://wa.me/2547045148380"

target="_blank"

className="
inline-block
mt-4
bg-yellow-500
text-blue-950
px-6
py-3
rounded-full
font-bold
hover:bg-yellow-600
transition
"

>


Join Our Next Cohort


</a>



</div>




</div>









</motion.div>









{/* SOCIAL + COPYRIGHT */}





<div className="
border-t
border-gray-800
">


<div className="
max-w-7xl
mx-auto
px-6
py-8
flex
flex-col
md:flex-row
justify-between
items-center
gap-5
">






<div className="
flex
gap-4
">





<a

href="#"

className="
w-10
h-10
rounded-full
bg-white/10
flex
items-center
justify-center
hover:bg-yellow-500
hover:text-blue-950
transition
"

>

f

</a>






<a

href="#"

className="
w-10
h-10
rounded-full
bg-white/10
flex
items-center
justify-center
hover:bg-yellow-500
hover:text-blue-950
transition
"

>

𝕏

</a>






<a

href="https://wa.me/2547045148380"

target="_blank"

className="
w-10
h-10
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







<p className="
text-gray-500
text-sm
text-center
">


© {year} Empower Equip Transform.
All Rights Reserved.


</p>





</div>


</div>








</footer>



)

}