import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";



export default function Contact(){



const contactInfo=[

{
title:"Phone / WhatsApp",
icon:"📞",
text:"+254 7045148380"
},

{
title:"Email",
icon:"✉️",
text:"info@empowerequiptransform.com"
},

{
title:"Location",
icon:"📍",
text:"Kenya | East Africa"
}

];





const services=[

"Church Leadership Training",

"Marketplace Leadership Academy",

"Corporate Training",

"Leadership Coaching"

];




return(


<div className="
min-h-screen
bg-gray-50
">


<Header />






{/* HERO */}


<section className="
relative
pt-32
bg-linear-to-br
from-blue-950
via-blue-900
to-gray-900
text-white
overflow-hidden
">



<motion.div

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

transition={{duration:0.8}}

className="
max-w-7xl
mx-auto
px-6
py-24
text-center
">


<h1 className="
text-5xl
md:text-6xl
font-bold
">

Let's Connect

</h1>



<p className="
mt-6
max-w-3xl
mx-auto
text-xl
text-gray-300
">


Ready to empower leaders, equip churches
and transform communities?


We would love to walk with you.

</p>


</motion.div>


</section>









{/* CONTACT AREA */}



<section className="
max-w-7xl
mx-auto
px-6
py-20
">



<div className="
grid
md:grid-cols-2
gap-14
items-start
">







{/* INFORMATION */}



<motion.div


initial={{opacity:0,x:-50}}

whileInView={{opacity:1,x:0}}

transition={{duration:0.7}}

viewport={{once:true}}

>


<h2 className="
text-4xl
font-bold
text-blue-950
">


Contact Information


</h2>




<p className="
mt-5
text-gray-600
leading-relaxed
">


Whether you are a pastor,
organization leader or marketplace professional,
we are ready to help you grow and multiply leaders.


</p>






<div className="
mt-10
space-y-6
">


{

contactInfo.map(item=>(



<motion.div

whileHover={{
scale:1.03
}}

key={item.title}

className="
bg-white
rounded-2xl
shadow-lg
p-6
border
">


<h3 className="
text-xl
font-bold
text-blue-900
">

{item.icon} {item.title}

</h3>



<p className="
mt-3
text-gray-600
">

{item.text}

</p>


</motion.div>



))


}



</div>




</motion.div>














{/* FORM */}



<motion.div


initial={{opacity:0,x:50}}

whileInView={{opacity:1,x:0}}

transition={{duration:0.7}}

viewport={{once:true}}


className="
bg-white
rounded-3xl
shadow-xl
p-8
border
">


<h2 className="
text-3xl
font-bold
text-blue-950
mb-8
">

Send Us A Message

</h2>




<form className="
space-5
">



<input

type="text"

placeholder="Full Name"

className="
w-full
border
rounded-xl
px-5
py-4
outline-none
focus:ring-2
focus:ring-blue-900
"

/>





<input

type="email"

placeholder="Email Address"

className="
w-full
border
rounded-xl
px-5
py-4
outline-none
focus:ring-2
focus:ring-blue-900
"

/>







<input

type="text"

placeholder="Phone Number"

className="
w-full
border
rounded-xl
px-5
py-4
outline-none
focus:ring-2
focus:ring-blue-900
"

/>








<select

className="
w-full
border
rounded-xl
px-5
py-4
"


>


<option>

Select Service

</option>


{

services.map(service=>(


<option key={service}>

{service}

</option>


))

}


</select>







<textarea

rows={5}

placeholder="Your Message"

className="
w-full
border
rounded-xl
px-5
py-4
outline-none
focus:ring-2
focus:ring-blue-900
"

/>







<button

className="
w-full
bg-yellow-600
text-white
py-4
rounded-xl
font-bold
hover:bg-yellow-700
transition
"


>


Send Message


</button>




</form>




</motion.div>





</div>



</section>









{/* WHATSAPP BUTTON */}


<motion.a


href="https://wa.me/2547045148380"

target="_blank"


initial={{scale:0}}

animate={{scale:1}}

transition={{
duration:0.5
}}


whileHover={{
scale:1.15
}}


className="
fixed
bottom-6
right-6
bg-green-600
text-white
w-16
h-16
rounded-full
flex
items-center
justify-center
text-3xl
shadow-xl
z-50
"


>


💬


</motion.a>









{/* CTA */}



<motion.section


initial={{opacity:0}}

whileInView={{opacity:1}}

viewport={{once:true}}


className="
bg-blue-950
text-white
py-20
text-center
">


<h2 className="
text-4xl
font-bold
">


Empower Leaders. Equip People. Transform Lives.


</h2>



<p className="
mt-5
text-gray-300
">


Ephesians 4:11-13


</p>



</motion.section>







<Footer/>


</div>



)


}