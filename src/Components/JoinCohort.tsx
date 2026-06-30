import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function JoinCohort(){


const benefits=[

{
title:"Biblical Foundation",
text:"Develop a strong understanding of Scripture, the gospel and biblical leadership rooted in Ephesians 4."
},

{
title:"Practical Leadership Tools",
text:"Gain skills in leadership, communication, counselling, people development and ministry effectiveness."
},

{
title:"Multiply Leaders",
text:"Become equipped to develop others and build healthy churches, organizations and communities."
},

{
title:"Church & Marketplace Impact",
text:"Apply biblical leadership principles whether serving in ministry, business or the workplace."
}

];




const tracks=[

{
title:"Church Leadership Institute",

text:
"Train pastors and ministry leaders to shepherd well, disciple believers and multiply leaders.",

points:[

"Biblical foundations & doctrine",

"Scripture interpretation",

"Pastoral care & counselling",

"Conflict resolution",

"Disciple-making strategies"

]

},



{
title:"Marketplace Leadership Academy",

text:
"Equip CEOs, managers and entrepreneurs to lead with biblical wisdom and excellence.",

points:[

"Character-based leadership",

"People management",

"Team development",

"Ethical decision making",

"Purpose-driven performance"

]

}


];






const phases=[

{
title:"Assess",
text:"Identify leadership gaps and understand your growth areas."
},

{
title:"Align",
text:"Create a training journey based on your values and leadership goals."
},

{
title:"Activate",
text:"Experience practical sessions, discussions, role plays and action plans."
},

{
title:"Advance",
text:"Receive follow-up coaching to apply and multiply what you learn."
}

];






const people=[

"Pastors",

"Elders",

"Ministry Leaders",

"Church Planters",

"CEOs",

"Managers",

"Entrepreneurs",

"HR Leaders"

];







return(


<div className="min-h-screen bg-gray-50">


<Header/>





{/* HERO */}


<section className="
bg-linear-to-br
from-blue-950
via-blue-900
to-gray-900
text-white
py-32
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
duration:.8
}}

className="
max-w-6xl
mx-auto
px-6
text-center
"


>


<p className="
text-yellow-400
font-bold
tracking-widest
">

EPHESIANS 4:11-13

</p>



<h1 className="
mt-6
text-5xl
md:text-7xl
font-black
">

JOIN THE

<br/>

<span className="text-yellow-400">

LEADERSHIP COHORT

</span>


</h1>



<p className="
mt-8
text-xl
text-gray-300
max-w-3xl
mx-auto
">

Be empowered, equipped and transformed to become
a leader who equips others for God's work.

</p>


<Link

to="/contact"

className="
inline-block
mt-10
bg-yellow-500
text-blue-950
px-10
py-4
rounded-xl
font-bold
hover:scale-105
transition
"

>

Apply Now

</Link>



</motion.div>


</section>








{/* INTRO */}



<section className="
max-w-5xl
mx-auto
px-6
py-20
text-center
">


<h2 className="
text-4xl
font-bold
text-blue-950
">

Preparing God's People For God's Work

</h2>



<p className="
mt-6
text-gray-600
leading-relaxed
">


Our leadership cohort exists to equip pastors,
ministry leaders and marketplace leaders with
biblical knowledge and practical tools that help
them become effective, efficient and transformational.


</p>


</section>








{/* WHY JOIN */}



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

Why Join The Cohort?

</h2>



<div className="
grid
md:grid-cols-4
gap-8
mt-12
">


{

benefits.map(item=>(


<motion.div

whileHover={{
y:-10
}}

className="
bg-gray-50
rounded-3xl
p-8
shadow
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


</div>


</section>










{/* TRACKS */}



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

Choose Your Leadership Track

</h2>



<div className="
grid
md:grid-cols-2
gap-10
mt-12
">


{

tracks.map(track=>(


<div

className="
bg-blue-950
text-white
rounded-3xl
p-10
"

>


<h3 className="
text-3xl
font-bold
text-yellow-400
">

{track.title}

</h3>


<p className="
mt-5
text-gray-300
">

{track.text}

</p>



<ul className="
mt-6
space-y-3
">


{

track.points.map(point=>(

<li key={point}>

✓ {point}

</li>

))

}


</ul>



</div>


))


}


</div>


</section>









{/* PROCESS */}



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

Our 4 Phase Model

</h2>



<div className="
grid
md:grid-cols-4
gap-8
mt-12
">


{

phases.map((phase,index)=>(


<div

className="
bg-white
rounded-3xl
p-8
shadow
"

>


<div className="
text-4xl
font-bold
text-yellow-500
">

0{index+1}

</div>


<h3 className="
text-xl
font-bold
mt-4
text-blue-950
">

{phase.title}

</h3>


<p className="
mt-4
text-gray-600
">

{phase.text}

</p>



</div>


))


}


</div>


</div>


</section>









{/* WHO */}



<section className="
py-20
text-center
">


<h2 className="
text-4xl
font-bold
text-blue-950
">

Who Is This For?

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


</section>









{/* SCRIPTURE */}



<section className="
bg-blue-950
text-white
py-20
text-center
">


<div className="
max-w-4xl
mx-auto
px-6
">


<h2 className="
text-4xl
font-bold
text-yellow-400
">

Our Foundation

</h2>


<p className="
mt-8
italic
text-lg
text-gray-300
">


"Equipping the saints for the work of ministry,
for the edifying of the body of Christ."

<br/>

Ephesians 4:11-13


</p>


</div>


</section>








{/* CTA */}



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

Empower leaders. Equip people. Transform communities.

</p>



<Link

to="/contact"

className="
inline-block
mt-8
bg-yellow-500
px-10
py-4
rounded-xl
font-bold
text-blue-950
"

>

Join Our Next Cohort

</Link>


</section>







<Footer/>


</div>


)


}