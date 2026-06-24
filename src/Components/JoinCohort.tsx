import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";



export default function JoinCohort(){



const benefits=[

{
title:"Biblical Foundation",
text:"Grow deeper in Scripture, gospel-centered leadership and ministry understanding."
},


{
title:"Practical Leadership",
text:"Develop leadership skills for churches, organizations and communities."
},


{
title:"Leadership Multiplication",
text:"Become a leader who equips and develops other leaders."
}


];






const steps=[

{
number:"01",
title:"Apply",
text:"Submit your application and select your leadership track."
},

{
number:"02",
title:"Training",
text:"Participate in practical leadership sessions and coaching."
},

{
number:"03",
title:"Transform",
text:"Apply what you learn and multiply leaders around you."
}

];






return(


<div className="
min-h-screen
bg-gray-50
">


<Header/>







{/* HERO */}


<section className="
pt-32
bg-linear-to-br
from-blue-950
via-blue-900
to-gray-900
text-white
">



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
duration:0.8
}}



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


Join Our Leadership Cohort


</h1>




<p className="
mt-6
text-xl
text-gray-300
max-w-3xl
mx-auto
">


Be equipped, empowered and transformed
to become a leader who equips others.


</p>



</motion.div>



</section>









{/* BENEFITS */}



<section className="
max-w-7xl
mx-auto
px-6
py-20
">



<motion.h2


initial={{
opacity:0,
y:30
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


className="
text-4xl
font-bold
text-center
text-blue-950
">


Why Join The Cohort?


</motion.h2>





<div className="
grid
md:grid-cols-3
gap-8
mt-12
">


{

benefits.map(item=>(



<motion.div


key={item.title}


whileHover={{
y:-10
}}


initial={{
opacity:0,
scale:0.9
}}


whileInView={{
opacity:1,
scale:1
}}


viewport={{
once:true
}}



className="
bg-white
rounded-3xl
shadow-lg
p-8
border
">


<h3 className="
text-xl
font-bold
text-blue-900
">


{item.title}


</h3>




<p className="
mt-4
text-gray-600
leading-relaxed
">


{item.text}


</p>


</motion.div>


))


}


</div>



</section>












{/* FORM */}




<section className="
bg-white
py-20
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



className="
max-w-4xl
mx-auto
px-6
">


<div className="
bg-gray-50
rounded-3xl
shadow-xl
p-10
">


<h2 className="
text-3xl
font-bold
text-blue-950
text-center
mb-8
">


Register For The Next Cohort


</h2>




<form className="
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
focus:ring-2
focus:ring-blue-900
outline-none
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
focus:ring-2
focus:ring-blue-900
outline-none
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
focus:ring-2
focus:ring-blue-900
outline-none
"

/>







<select

className="
w-full
border
rounded-xl
px-5
py-4
">


<option>

Choose Training Track

</option>


<option>

Church Leadership Institute

</option>


<option>

Marketplace Leadership Academy

</option>


</select>







<select

className="
w-full
border
rounded-xl
px-5
py-4
">


<option>

Select Your Role

</option>


<option>

Pastor / Ministry Leader

</option>


<option>

Business Owner

</option>


<option>

Manager / Team Leader

</option>


<option>

Entrepreneur

</option>


</select>








<textarea

rows={5}

placeholder="Tell us why you want to join"

className="
w-full
border
rounded-xl
px-5
py-4
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
">


Submit Application


</button>





</form>



</div>



</motion.div>



</section>













{/* PROCESS */}



<section className="
max-w-7xl
mx-auto
px-6
py-20
">



<h2 className="
text-4xl
font-bold
text-center
text-blue-950
">


How It Works


</h2>





<div className="
grid
md:grid-cols-3
gap-8
mt-12
">



{


steps.map(step=>(



<motion.div


key={step.number}


whileHover={{
scale:1.05
}}



className="
bg-blue-950
text-white
rounded-3xl
p-8
text-center
">


<h3 className="
text-5xl
font-bold
text-yellow-500
">


{step.number}


</h3>




<h4 className="
text-2xl
font-bold
mt-4
">


{step.title}


</h4>




<p className="
mt-4
text-gray-300
">


{step.text}


</p>



</motion.div>



))


}



</div>



</section>













{/* WHATSAPP */}



<motion.a


href="https://wa.me/2547045148380"


target="_blank"


animate={{
y:[0,-10,0]
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
">


💬


</motion.a>












{/* CTA */}



<section className="
bg-blue-950
text-white
py-20
text-center
">



<h2 className="
text-4xl
font-bold
">


Ready To Equip Yourself?


</h2>



<p className="
mt-5
text-gray-300
">


EMPOWER | EQUIP | TRANSFORM


</p>


</section>









<Footer/>


</div>



)


}