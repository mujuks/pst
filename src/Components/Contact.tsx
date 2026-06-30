import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";



export default function Contact(){



const contactInfo=[

{
title:"WhatsApp / Call",
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

"Church Leadership Institute",

"Marketplace Leadership Academy",

"Corporate Leadership Training",

"Leadership Coaching",

"Open Leadership Cohort"

];





const audiences=[

"Pastors & Ministry Leaders",

"CEOs & Business Leaders",

"Managers & Team Leaders",

"Entrepreneurs",

"Church Planters"

];






return(


<div className="
min-h-screen
bg-gray-50
">


<Header/>






{/* HERO */}



<section className="
relative
pt-32
bg-blue-950
text-white
overflow-hidden
">


<div className="
absolute
right-0
top-0
w-96
h-96
bg-yellow-500/20
rounded-full
blur-3xl
">

</div>





<motion.div


initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}


className="
relative
max-w-7xl
mx-auto
px-6
py-24
text-center
">


<p className="
text-yellow-400
tracking-[6px]
font-bold
">

EPHESIANS 4:11-13

</p>




<h1 className="
mt-6
text-5xl
md:text-7xl
font-black
">

Let's Connect

</h1>



<p className="
mt-6
text-xl
max-w-3xl
mx-auto
text-gray-300
">


Ready to empower leaders, equip churches,
and transform communities through biblical
leadership development?


</p>



</motion.div>


</section>









{/* CONTACT INFORMATION */}



<section className="
max-w-7xl
mx-auto
px-6
py-20
">


<div className="
grid
md:grid-cols-3
gap-8
">



{
contactInfo.map(item=>(


<motion.div


whileHover={{
y:-8
}}

key={item.title}

className="
bg-white
rounded-3xl
shadow-lg
p-8
border
"


>


<div className="
text-4xl
">

{item.icon}

</div>



<h3 className="
mt-5
text-xl
font-bold
text-blue-950
">


{item.title}


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


</section>









{/* WHO WE SERVE */}



<section className="
bg-white
py-20
">


<div className="
max-w-7xl
mx-auto
px-6
">


<h2 className="
text-4xl
font-bold
text-center
text-blue-950
">

Who We Serve

</h2>




<p className="
mt-5
text-center
text-gray-600
max-w-3xl
mx-auto
">


The work of ministry happens both in the church
and marketplace. We equip leaders who influence
churches, organizations, companies and communities.


</p>





<div className="
flex
flex-wrap
justify-center
gap-5
mt-10
">


{
audiences.map(person=>(


<span

key={person}

className="
bg-blue-950
text-white
px-6
py-3
rounded-full
"


>


{person}


</span>


))


}


</div>



</div>


</section>









{/* FORM SECTION */}




<section className="
py-20
bg-gray-100
">


<div className="
max-w-5xl
mx-auto
px-6
">


<div className="
bg-white
rounded-3xl
shadow-xl
p-10
">



<h2 className="
text-3xl
font-bold
text-blue-950
text-center
">

Start A Conversation

</h2>



<p className="
text-center
mt-4
text-gray-600
">


Tell us how we can help you grow,
equip your team or develop leaders.


</p>







<form className="
mt-10
space-y-5
">



<input

placeholder="Full Name"

className="
w-full
border
rounded-xl
px-5
py-4
outline-none
focus:ring-2
focus:ring-blue-950
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
focus:ring-blue-950
"

/>






<input

placeholder="Phone Number"

className="
w-full
border
rounded-xl
px-5
py-4
outline-none
focus:ring-2
focus:ring-blue-950
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

Choose Service

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
focus:ring-blue-950
"

/>






<button

className="
w-full
bg-yellow-500
text-blue-950
py-4
rounded-xl
font-bold
hover:bg-yellow-600
transition
"


>


Send Message


</button>





</form>



</div>



</div>


</section>









{/* CORPORATE PARTNERSHIP */}



<section className="
bg-blue-950
text-white
py-20
">


<div className="
max-w-6xl
mx-auto
px-6
text-center
">


<h2 className="
text-4xl
font-bold
">

Partner With Us

</h2>



<p className="
mt-6
text-gray-300
leading-relaxed
">


For churches, we provide leadership development,
biblical training and disciple-making tools.

For companies, we provide leadership coaching,
team development and workplace transformation.


</p>



<div className="
grid
md:grid-cols-3
gap-6
mt-10
">



<div className="
bg-white/10
p-6
rounded-2xl
">

Church Leadership

</div>



<div className="
bg-white/10
p-6
rounded-2xl
">

Corporate Training

</div>




<div className="
bg-white/10
p-6
rounded-2xl
">

Leadership Cohorts

</div>



</div>



</div>


</section>









{/* WHATSAPP */}



<motion.a


href="https://wa.me/2547045148380"

target="_blank"


animate={{

y:[0,-8,0]

}}


transition={{

repeat:Infinity,

duration:2

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









{/* FINAL CTA */}




<section className="
py-20
text-center
bg-white
">


<h2 className="
text-4xl
font-bold
text-blue-950
">


Ready To Multiply Leaders?


</h2>



<p className="
mt-5
text-gray-600
">

EMPOWER | EQUIP | TRANSFORM

<br/>

Preparing God's People For God's Work

</p>


</section>






<Footer/>


</div>


)

}