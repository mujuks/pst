import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function About(){


const differences = [

{
title:"Biblically Rooted",
text:"Training flows from Scripture and Ephesians 4 as our blueprint for leadership."
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
text:"We train leaders who equip and develop other leaders."
},

{
title:"Contextual",
text:"Built for Kenya and East Africa with practical solutions."
},

{
title:"Transformation Focused",
text:"Our goal is Christ-like maturity in church and workplace."
}


];




const fadeUp = {

hidden:{
opacity:0,
y:50
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
whileInView="show"
viewport={{once:true}}

className="
relative
max-w-7xl
mx-auto
px-6
py-32
text-center
"


>


<h1 className="
text-5xl
md:text-7xl
font-bold
tracking-tight
">

EMPOWER
<br/>

EQUIP
<br/>

TRANSFORM

</h1>




<p className="
mt-6
max-w-3xl
mx-auto
text-xl
text-gray-200
">

Preparing God's People for God's Work through
biblical leadership, discipleship and transformation.

</p>





<div className="
mt-10
flex
justify-center
gap-5
flex-wrap
">


<Link

to="/joincohort"

className="
bg-yellow-600
px-10
py-4
rounded-full
font-semibold
hover:scale-105
transition
"

>

Join Cohort

</Link>



<Link

to="/contact"

className="
border
border-white
px-10
py-4
rounded-full
hover:bg-white
hover:text-blue-950
transition
"

>

Contact Us

</Link>



</div>



</motion.div>


</section>








{/* WHO WE ARE */}



<section className="
max-w-7xl
mx-auto
px-6
py-20
">


<div className="
grid
md:grid-cols-2
gap-12
items-center
">


<motion.div

variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{once:true}}

>


<h2 className="
text-4xl
font-bold
text-blue-950
">

Who We Are

</h2>



<p className="
mt-6
text-gray-600
leading-relaxed
">

Empower Equip Transform exists to prepare God's people
for God's work.

We believe every believer is called into ministry and every leader
is called to equip others.

Our mission is building gospel-centered leaders who transform
churches, workplaces and communities.

</p>




<div className="
mt-8
bg-white
rounded-3xl
shadow-xl
p-8
border
">


<h3 className="
text-2xl
font-bold
text-yellow-600
">

Our Conviction

</h3>



<p className="
mt-4
text-gray-600
">

Every believer is called to ministry.

When leaders are grounded in Scripture and skilled in people
development, churches grow healthier and organizations lead
with integrity.

</p>


</div>


</motion.div>







<motion.div

initial={{
opacity:0,
scale:0.8
}}

whileInView={{
opacity:1,
scale:1
}}

transition={{
duration:0.8
}}

viewport={{once:true}}

className="
rounded-3xl
overflow-hidden
shadow-2xl
"


>


<img

src="/Pst1.jpeg"

alt="Leadership"

className="
w-full
h-130
object-cover
"

/>


<div className="
bg-white
p-8
text-center
">


<h3 className="
text-3xl
font-bold
text-blue-950
">

Leadership

</h3>


<p className="
text-yellow-600
font-semibold
mt-3
">

Equipping God's People For God's Work

</p>


</div>


</motion.div>



</div>


</section>








{/* VISION MISSION */}


<section className="
bg-white
py-20
">


<div className="
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-2
gap-10
">



<motion.div

whileInView={{
opacity:1,
x:0
}}

initial={{
opacity:0,
x:-50
}}

viewport={{once:true}}

className="
bg-blue-950
text-white
rounded-3xl
p-10
"


>


<h2 className="
text-3xl
font-bold
">

Vision

</h2>


<p className="
mt-5
text-gray-300
">

To see gospel-centered churches and leaders equipped
with knowledge and tools that help them become effective,
efficient and transformational.

</p>


</motion.div>






<motion.div

whileInView={{
opacity:1,
x:0
}}

initial={{
opacity:0,
x:50
}}

viewport={{once:true}}

className="
bg-yellow-600
text-white
rounded-3xl
p-10
"

>


<h2 className="
text-3xl
font-bold
">

Mission

</h2>


<p className="
mt-5
">

To train men and women empowered by God to equip
and disciple God's people.

</p>


</motion.div>



</div>


</section>








{/* SCRIPTURE */}


<section className="
py-20
bg-gray-100
">


<motion.div

variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{once:true}}

className="
max-w-5xl
mx-auto
px-6
text-center
"


>


<h2 className="
text-4xl
font-bold
text-blue-950
">

Our Anchor Scripture

</h2>



<div className="
mt-10
bg-white
shadow-xl
rounded-3xl
p-10
">


<h3 className="
text-2xl
font-bold
text-yellow-600
">

Ephesians 4:11-13

</h3>



<p className="
mt-5
italic
text-gray-600
leading-relaxed
">

"And He Himself gave some to be apostles,
some prophets, some evangelists, and some pastors
and teachers, for the equipping of the saints
for the work of ministry."

</p>



</div>


</motion.div>


</section>








{/* WHAT MAKES US DIFFERENT */}



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

What Makes Us Different

</h2>



<div className="
grid
md:grid-cols-3
gap-8
mt-12
">


{

differences.map((item,index)=>(


<motion.div

key={item.title}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.1
}}

viewport={{once:true}}

className="
bg-white
rounded-3xl
p-8
shadow-lg
hover:-translate-y-2
transition
"


>


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
">

{item.text}

</p>



</motion.div>


))


}


</div>


</section>








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

Ready To Multiply Leaders?

</h2>



<p className="
mt-5
text-gray-300
">

Join us in equipping God's people for God's work.

</p>




<Link

to="/joincohort"

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

Join Our Next Cohort

</Link>


</section>






<Footer/>


</div>


)

}