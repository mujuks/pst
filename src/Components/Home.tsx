import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";



export default function Home(){



const values = [

{
title:"Biblically Rooted",
text:"All training flows from Scripture. Ephesians 4 is our blueprint for leadership and ministry."
},

{
title:"Spirit Empowered",
text:"We provide tools, but God empowers believers through His Spirit."
},

{
title:"Gospel Centered",
text:"The gospel shapes leadership, ministry and everyday life."
},

{
title:"Multiplication Focused",
text:"We train leaders who equip other leaders."
},

{
title:"Contextual",
text:"Built for Kenya and East Africa with practical and relevant solutions."
},

{
title:"Transformation Focused",
text:"Our goal is Christ-like maturity in church and workplace."
}

];




const tools=[

"The Gospel",

"Biblical Interpretation",

"Leadership Training",

"Public Speaking",

"Counselling",

"People Development"

];





const fadeUp = {

hidden:{
opacity:0,
y:40
},

show:{
opacity:1,
y:0,
transition:{
duration:0.7
}
}

};





return(


<div className="min-h-screen bg-gray-50">


<Header/>





{/* HERO */}



<section

className="
relative
pt-32
bg-cover
bg-center
text-white
"

style={{

backgroundImage:"url('/Pst3.jpeg')"

}}

>



<div className="
absolute
inset-0
bg-blue-950/85
">


</div>





<motion.div

variants={fadeUp}

initial="hidden"

animate="show"

className="
relative
max-w-7xl
mx-auto
px-6
py-28
grid
md:grid-cols-2
gap-12
items-center
"

>


<div>



<h1 className="
text-5xl
md:text-7xl
font-bold
leading-tight
">


Empower

<br/>

Equip

<br/>

Transform


</h1>





<p className="
mt-6
text-xl
text-gray-200
leading-relaxed
">


Preparing God's People for God's Work through biblical
leadership training, discipleship and transformation.


</p>




<div className="
mt-8
flex
gap-5
flex-wrap
">



<motion.div

whileHover={{scale:1.05}}

>


<Link

to="/joincohort"

className="
bg-yellow-600
px-10
py-4
rounded-full
font-semibold
inline-block
hover:bg-yellow-700
transition
"

>

Join Cohort

</Link>


</motion.div>





<motion.div

whileHover={{scale:1.05}}

>


<Link

to="/about"

className="
border
border-white
px-10
py-4
rounded-full
inline-block
hover:bg-white
hover:text-blue-950
transition
"

>

Discover More

</Link>


</motion.div>



</div>



</div>









<motion.div

animate={{

y:[0,-10,0]

}}

transition={{

duration:3,

repeat:Infinity

}}

className="
bg-white/10
backdrop-blur
rounded-3xl
p-10
border
border-white/20
"

>


<h2 className="
text-3xl
font-bold
">


Ephesians 4:11-13


</h2>




<p className="
mt-5
italic
text-gray-200
leading-relaxed
">


"Equipping the saints for the work of ministry,
for the edifying of the body of Christ."


</p>



</motion.div>





</motion.div>



</section>









{/* INTRO */}



<motion.section

variants={fadeUp}

initial="hidden"

whileInView="show"

viewport={{once:true}}

className="
max-w-7xl
mx-auto
px-6
py-20
text-center
"

>


<h2 className="
text-4xl
font-bold
text-blue-950
">


Preparing Leaders For Kingdom Impact


</h2>




<p className="
mt-6
max-w-4xl
mx-auto
text-lg
text-gray-600
">


We exist to close the gap between Sunday faith and Monday leadership.
We equip pastors, ministry leaders and marketplace leaders with
biblical knowledge and practical tools for transformation.


</p>



</motion.section>









{/* VISION */}



<section className="
max-w-7xl
mx-auto
px-6
pb-20
">


<div className="
grid
md:grid-cols-3
gap-8
">


{


[

{
title:"Vision",
text:"To see gospel-centered churches and leaders equipped with knowledge and tools that make them effective and transformational."
},

{
title:"Mission",
text:"To train men and women empowered by God to equip and disciple God's people."
},

{
title:"Conviction",
text:"Every believer is called to ministry. Healthy leaders create healthy churches and organizations."
}


].map((item,index)=>(


<motion.div

key={item.title}

variants={fadeUp}

initial="hidden"

whileInView="show"

viewport={{once:true}}

transition={{delay:index *0.2}}

whileHover={{scale:1.03}}

className="
bg-white
rounded-3xl
shadow-lg
p-8
"

>


<h3 className="
text-2xl
font-bold
text-blue-950
">


{item.title}


</h3>



<p className="
mt-5
text-gray-600
">


{item.text}


</p>



</motion.div>


))


}



</div>


</section>









{/* SCRIPTURE */}



<motion.section

initial={{opacity:0}}

whileInView={{opacity:1}}

viewport={{once:true}}

className="
bg-blue-950
text-white
py-20
"


>


<div className="
max-w-5xl
mx-auto
px-6
text-center
">


<h2 className="
text-4xl
font-bold
">


Our Anchor Scripture


</h2>




<div className="
mt-10
bg-white/10
rounded-3xl
p-10
">


<p className="
italic
text-xl
">


"And He Himself gave some to be apostles,
some prophets, some evangelists, and some pastors
and teachers..."


</p>


</div>


</div>


</motion.section>









{/* TOOLS */}



<section className="
py-20
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


What We Equip Leaders With


</h2>





<div className="
grid
md:grid-cols-3
gap-8
mt-12
">


{

tools.map((tool,index)=>(



<motion.div

key={tool}

initial={{opacity:0,y:30}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{
delay:index*0.1
}}

whileHover={{
scale:1.05
}}

className="
bg-white
rounded-2xl
shadow
p-8
"


>


<h3 className="
text-xl
font-bold
text-yellow-600
">


{tool}


</h3>


<p className="
mt-3
text-gray-600
">


Practical biblical tools for effective leadership.


</p>


</motion.div>


))


}


</div>


</section>









{/* DIFFERENT */}



<section className="
bg-gray-100
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


What Makes Us Different


</h2>



<div className="
grid
md:grid-cols-3
gap-8
mt-12
">


{

values.map((value,index)=>(


<motion.div

key={value.title}

initial={{opacity:0,scale:.9}}

whileInView={{opacity:1,scale:1}}

viewport={{once:true}}

transition={{
delay:index*0.1
}}

className="
bg-white
rounded-3xl
shadow
p-8
"

>


<h3 className="
text-xl
font-bold
text-blue-900
">


{value.title}


</h3>


<p className="
mt-4
text-gray-600
">


{value.text}


</p>


</motion.div>


))


}


</div>


</div>


</section>









{/* CTA */}



<section className="
bg-blue-950
text-white
py-20
text-center
">


<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

>


<h2 className="
text-4xl
font-bold
">


Ready To Multiply Leaders?


</h2>



<p className="
mt-5
text-gray-300
">


Empower leaders. Equip people. Transform communities.


</p>




<Link

to="/contact"

className="
inline-block
mt-8
bg-yellow-600
px-10
py-4
rounded-full
font-semibold
hover:bg-yellow-700
transition
"

>


Contact Us


</Link>



</motion.div>



</section>






<Footer/>


</div>


)


}