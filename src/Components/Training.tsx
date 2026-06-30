import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function Training(){


const modules=[

"Gospel Foundations",
"Biblical Interpretation",
"Leadership Training",
"Public Speaking",
"Counselling",
"Conflict Resolution",
"People Development",
"Strategic Leadership"

];



const phases=[

{
title:"Assess",
text:"A consultation to identify leadership gaps and understand team goals."
},

{
title:"Align",
text:"Customized workshops built around your values and biblical principles."
},

{
title:"Activate",
text:"Interactive training using discussions, role plays and practical action plans."
},

{
title:"Advance",
text:"Continuous coaching to help leaders implement and multiply the training."
}

];





const fade={

hidden:{
opacity:0,
y:40
},

show:{
opacity:1,
y:0,
transition:{
duration:.7
}

}

};





return(


<div className="min-h-screen bg-gray-50">


<Header/>








{/* HERO */}



<section className="

bg-linear-to-br

from-blue-950

via-blue-900

to-blue-800

text-white

py-32

">


<motion.div

variants={fade}

initial="hidden"

animate="show"

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

tracking-[6px]

">

EMPOWER | EQUIP | TRANSFORM

</p>



<h1 className="

mt-6

text-5xl

md:text-7xl

font-black

">

Leadership Training

</h1>



<p className="

mt-6

text-xl

max-w-3xl

mx-auto

text-gray-200

">

Equipping church and marketplace leaders with
biblical wisdom, practical skills and transformational
leadership tools.

</p>


<Link

to="/joincohort"

className="

inline-block

mt-10

bg-yellow-500

text-blue-950

px-10

py-4

rounded-full

font-bold

"

>

Join Training

</Link>


</motion.div>


</section>









{/* WHAT WE DO */}



<section className="

max-w-7xl

mx-auto

px-6

py-24

">


<div className="

grid

md:grid-cols-2

gap-14

items-center

">



<motion.div

variants={fade}

initial="hidden"

whileInView="show"

viewport={{once:true}}

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

leading-relaxed

">


Our aim is to equip pastors, ministry leaders,
corporate leaders and entrepreneurs with tools
to build healthy organizations and gospel-centered
communities.


</p>


<p className="

mt-5

text-gray-600

">


Whether in the pulpit or boardroom, we provide
biblically grounded practical tools so leaders can
equip others and create lasting transformation.

</p>


</motion.div>







<motion.div

initial={{opacity:0,scale:.8}}

whileInView={{opacity:1,scale:1}}

viewport={{once:true}}

className="relative"

>


<div className="

absolute

inset-0

bg-yellow-500

rounded-3xl

rotate-6

">

</div>



<img

src="/pst2.jpeg"

alt="Training"

className="

relative

rounded-3xl

shadow-xl

h-112.5

w-full

object-cover

"

/>



</motion.div>



</div>


</section>









{/* TRAINING TRACKS */}



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

Training Tracks

</h2>





<div className="

grid

md:grid-cols-2

gap-10

mt-12

">





<div className="

bg-blue-950

text-white

rounded-3xl

p-10

">


<h3 className="text-3xl font-bold">

Church Leadership Institute

</h3>


<p className="mt-5 text-gray-300">

Training pastors and ministry leaders to shepherd,
disciple and multiply God's people.

</p>



<ul className="mt-6 space-y-3">


<li>✓ Doctrine & Biblical Foundations</li>

<li>✓ Hermeneutics & Teaching Scripture</li>

<li>✓ Counselling & Pastoral Care</li>

<li>✓ Conflict Resolution</li>

<li>✓ Disciple Making</li>

<li>✓ Church Leadership</li>


</ul>


</div>








<div className="

bg-yellow-500

rounded-3xl

p-10

text-blue-950

">


<h3 className="text-3xl font-bold">

Marketplace Leadership Academy

</h3>



<p className="mt-5">

Helping leaders manage people and organizations
with biblical wisdom and excellence.

</p>



<ul className="mt-6 space-y-3">


<li>✓ Character-Based Leadership</li>

<li>✓ People Management</li>

<li>✓ Coaching & Feedback</li>

<li>✓ Team Building</li>

<li>✓ Ethical Decision Making</li>


</ul>



</div>



</div>


</div>


</section>









{/* BRIDGE */}



<section className="

py-20

bg-gray-100

">


<div className="

max-w-5xl

mx-auto

px-6

text-center

">


<h2 className="

text-4xl

font-bold

text-blue-950

">

The Bridge

</h2>


<p className="

mt-6

text-gray-600

leading-relaxed

">


Ephesians 4 is the foundation for both tracks.

A pastor and a CEO both need to know how to shepherd
people, handle truth and stay faithful under pressure.

The work of ministry happens in the pulpit and the
boardroom.

</p>


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

modules.map(item=>(


<div

key={item}

className="

bg-white

shadow

rounded-2xl

p-6

text-center

font-bold

text-blue-900

"


>

{item}


</div>


))


}



</div>


</section>









{/* CORPORATE MODEL */}



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

Corporate Training Model

</h2>



<div className="

grid

md:grid-cols-4

gap-8

mt-12

">


{

phases.map(item=>(


<div

key={item.title}

className="

bg-white/10

rounded-2xl

p-8

"


>


<h3 className="

text-2xl

font-bold

text-yellow-400

">

{item.title}

</h3>


<p className="mt-4 text-gray-300">

{item.text}

</p>


</div>


))


}



</div>


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



<p className="mt-5 text-gray-600">

Join our next leadership training cohort.

</p>



<Link

to="/joincohort"

className="

inline-block

mt-8

bg-yellow-500

px-10

py-4

rounded-full

font-bold

text-blue-950

"

>

Start Training

</Link>


</section>







<Footer/>


</div>


)

}