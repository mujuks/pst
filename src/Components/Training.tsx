import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function Training(){



const modules = [

"Gospel Foundations",
"Biblical Leadership",
"Public Speaking",
"Counselling Skills",
"Conflict Management",
"Team Development",
"Discipleship",
"Strategic Leadership"

];



const phases=[

{
title:"Assess",
text:"Identify leadership gaps and understand areas for growth."
},

{
title:"Align",
text:"Create customized training based on values and goals."
},

{
title:"Activate",
text:"Practical learning through discussions, activities and action plans."
},

{
title:"Advance",
text:"Continuous coaching and leadership development."
}

];



const people=[

"Pastors",
"Elders",
"Ministry Leaders",
"CEOs",
"Managers",
"Entrepreneurs",
"HR Leaders",
"Team Leaders"

];



const fadeUp={

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


<div className="
min-h-screen
bg-gray-50
">


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

backgroundImage:"url('/pst2.jpeg')"

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
py-28
text-center
"


>


<h1 className="
text-5xl
md:text-7xl
font-bold
">

Leadership Training

</h1>



<p className="
mt-6
max-w-3xl
mx-auto
text-xl
text-gray-200
">

Equipping leaders in the church and marketplace
with biblical wisdom, practical skills and
transformational leadership tools.

</p>




<div className="
mt-10
">


<Link

to="/joincohort"

className="
bg-yellow-600
px-10
py-4
rounded-full
font-semibold
hover:bg-yellow-700
transition
"

>

Join Training

</Link>


</div>



</motion.div>


</section>









{/* INTRO */}



<section className="
py-20
max-w-7xl
mx-auto
px-6
">



<motion.div

variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{once:true}}

className="
text-center
max-w-4xl
mx-auto
"

>


<h2 className="
text-4xl
font-bold
text-blue-950
">

What We Do

</h2>



<p className="
mt-6
text-gray-600
text-lg
leading-relaxed
">

Our aim is to equip pastors, ministry leaders,
corporate leaders and entrepreneurs with tools
to build healthy organizations and gospel-centered
communities.

</p>


</motion.div>



</section>










{/* EQUIPPING */}



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
gap-12
items-center
">



<motion.div

initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{once:true}}

>


<h2 className="
text-4xl
font-bold
text-blue-950
">

Equipping Leaders

</h2>



<p className="
mt-6
text-gray-600
leading-relaxed
">

Our leadership training is built on biblical foundations,
practical experience and a passion to develop leaders
who influence churches, organizations and communities.

</p>



<p className="
mt-4
text-gray-600
">

Leaders are not only called to lead,
but also to multiply and equip others.

</p>


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

src="/pst2.jpeg"

alt="Training"

className="
w-full
h-125
object-cover
"

/>


</motion.div>



</div>



</section>









{/* TRACKS */}



<section className="
py-20
bg-gray-100
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

Training Tracks

</h2>





<div className="
grid
md:grid-cols-2
gap-10
mt-12
">





<motion.div

whileInView={{
opacity:1,
y:0
}}

initial={{
opacity:0,
y:50
}}

viewport={{once:true}}

className="
bg-blue-950
text-white
rounded-3xl
p-10
shadow-xl
"


>


<h3 className="
text-3xl
font-bold
">

Church Leadership Institute

</h3>


<p className="
mt-5
text-gray-300
">

Training pastors and ministry leaders to shepherd,
disciple and multiply God's people.

</p>



<ul className="
mt-6
space-y-3
">


<li>✓ Biblical Foundations</li>

<li>✓ Scripture Interpretation</li>

<li>✓ Pastoral Care</li>

<li>✓ Conflict Resolution</li>

<li>✓ Disciple Making</li>


</ul>



</motion.div>









<motion.div

whileInView={{
opacity:1,
y:0
}}

initial={{
opacity:0,
y:50
}}

viewport={{once:true}}

className="
bg-yellow-600
text-white
rounded-3xl
p-10
shadow-xl
"


>


<h3 className="
text-3xl
font-bold
">

Marketplace Leadership Academy

</h3>



<p className="
mt-5
">

Helping business leaders lead with integrity,
wisdom and servant leadership.

</p>



<ul className="
mt-6
space-y-3
">


<li>✓ Character Leadership</li>

<li>✓ People Management</li>

<li>✓ Team Building</li>

<li>✓ Ethical Decisions</li>

<li>✓ Workplace Transformation</li>


</ul>



</motion.div>



</div>



</div>


</section>









{/* MODULES */}



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

Training Modules

</h2>




<div className="
grid
md:grid-cols-4
gap-6
mt-12
">


{

modules.map((item,index)=>(


<motion.div

key={item}

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
rounded-2xl
shadow
p-6
text-center
hover:-translate-y-2
transition
"

>


<h3 className="
font-bold
text-blue-900
">

{item}

</h3>



</motion.div>


))


}



</div>


</section>









{/* FOUR PHASE MODEL */}



<section className="
bg-blue-950
text-white
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
">

Our 4 Phase Training Model

</h2>



<div className="
grid
md:grid-cols-4
gap-8
mt-12
">


{

phases.map((phase,index)=>(


<motion.div

key={phase.title}

whileInView={{
opacity:1,
y:0
}}

initial={{
opacity:0,
y:40
}}

transition={{
delay:index*0.1
}}

viewport={{once:true}}

className="
bg-white/10
rounded-2xl
p-8
"


>


<h3 className="
text-2xl
font-bold
text-yellow-500
">

{phase.title}

</h3>



<p className="
mt-4
text-gray-300
">

{phase.text}

</p>


</motion.div>



))


}



</div>


</div>


</section>









{/* WHO WE TRAIN */}



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

Who We Train

</h2>



<div className="
flex
flex-wrap
justify-center
gap-5
mt-10
">


{

people.map(person=>(


<span

key={person}

className="
bg-blue-950
text-white
px-6
py-3
rounded-full
hover:bg-yellow-600
transition
"

>

{person}

</span>


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

Equip. Empower. Transform.

</h2>


<p className="
mt-5
text-gray-300
">

Start your leadership journey today.

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
font-bold
hover:bg-yellow-700
transition
"

>

Join Training

</Link>



</section>







<Footer/>


</div>


)

}