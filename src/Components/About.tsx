import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function About(){


const differences=[

{
title:"Biblically Rooted",
text:"All training flows from Scripture, not corporate trends. Ephesians 4 is our blueprint for leadership and ministry."
},

{
title:"Spirit Empowered",
text:"We provide tools, but God is the one who empowers believers through His Spirit."
},

{
title:"Gospel Centered",
text:"The gospel is taught, protected and applied to every area of life."
},

{
title:"Multiplication Focused",
text:"We train leaders who equip and develop other leaders."
},

{
title:"Transformation Focused",
text:"Our goal is Christ-like maturity in the church and workplace."
},

{
title:"Contextual",
text:"Built for Kenya and East Africa with practical, affordable and relevant solutions."
}

];




const fadeUp={

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

relative

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

variants={fadeUp}

initial="hidden"

animate="show"

className="

max-w-6xl

mx-auto

px-6

text-center

relative

"

>


<p className="

text-yellow-400

font-bold

tracking-[8px]

">

EPHESIANS 4:11-13

</p>




<h1 className="

mt-8

text-5xl

md:text-7xl

font-black

">


EMPOWER

<br/>


<span className="text-yellow-400">

EQUIP

</span>


<br/>

TRANSFORM


</h1>



<p className="

mt-8

text-xl

text-gray-200

max-w-3xl

mx-auto

">


Preparing God’s People for God’s Work through biblical
leadership, discipleship and transformation.


</p>



</motion.div>



</section>









{/* WHO WE ARE */}



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

variants={fadeUp}

initial="hidden"

whileInView="show"

viewport={{once:true}}

>


<p className="

text-yellow-600

font-bold

tracking-widest

uppercase

">

About Us

</p>



<h2 className="

mt-4

text-4xl

md:text-5xl

font-bold

text-blue-950

">

Preparing God's People

For God's Work

</h2>




<p className="

mt-6

text-gray-600

leading-relaxed

">


Empower Equip Transform exists to prepare God's people
for God's work.

We believe every believer is called into ministry and every
leader is called to equip others.


</p>




<p className="

mt-5

text-gray-600

leading-relaxed

">


We exist to close the gap between Sunday faith and Monday
leadership by developing gospel-centered leaders who
transform churches, workplaces and communities.


</p>







<div className="

mt-8

bg-white

rounded-3xl

shadow-xl

p-8

border-l-4

border-yellow-500

">


<h3 className="

text-2xl

font-bold

text-blue-950

">

Our Conviction

</h3>



<p className="

mt-4

text-gray-600

">


Every believer is called to ministry.

When leaders are grounded in Scripture and skilled in
people development, churches grow healthier and
organizations lead with integrity.


</p>


</div>




</motion.div>









<motion.div

initial={{

opacity:0,

x:50

}}

whileInView={{

opacity:1,

x:0

}}

transition={{

duration:.8

}}

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

alt="Leadership"

className="

relative

rounded-3xl

shadow-2xl

h-130

w-full

object-cover

"

/>





<div className="

absolute

bottom-8

left-8

right-8

bg-white/90

backdrop-blur

rounded-2xl

p-6

">


<h3 className="

text-2xl

font-bold

text-blue-950

">

Empower | Equip | Transform

</h3>


<p className="

text-yellow-600

font-semibold

mt-2

">

Preparing Leaders For Kingdom Impact

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

md:grid-cols-3

gap-8

">



<div className="

bg-blue-950

text-white

rounded-3xl

p-10

">


<h2 className="text-3xl font-bold">

Vision

</h2>


<p className="mt-5 text-gray-300">


To prepare God’s people for God’s work.

To see gospel-centered churches and leaders equipped
with knowledge and tools that make them effective,
efficient and transformational.


</p>


</div>






<div className="

bg-yellow-500

rounded-3xl

p-10

text-blue-950

">


<h2 className="text-3xl font-bold">

Mission

</h2>


<p className="mt-5">


To train men and women empowered by God to equip
and disciple God's people.


</p>


</div>







<div className="

bg-gray-100

rounded-3xl

p-10

">


<h2 className="text-3xl font-bold text-blue-950">

Purpose

</h2>


<p className="mt-5 text-gray-600">


To equip leaders for ministry, workplaces and communities
so that God's people mature and multiply.


</p>


</div>



</div>


</section>









{/* SCRIPTURE */}



<section className="

bg-blue-950

text-white

py-20

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

text-yellow-400

">

OUR ANCHOR SCRIPTURE

</h2>



<h3 className="mt-6 text-2xl font-bold">

Ephesians 4:11-13

</h3>



<p className="

mt-6

italic

text-gray-200

leading-relaxed

">


“And He Himself gave some to be apostles, some prophets,
some evangelists, and some pastors and teachers, for the
equipping of the saints for the work of ministry, for the
edifying of the body of Christ...”


</p>


</div>


</section>









{/* DIFFERENT */}



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

What Makes Us Different

</h2>




<div className="

grid

md:grid-cols-3

gap-8

mt-12

">


{

differences.map(item=>(


<motion.div

whileHover={{scale:1.03}}

className="

bg-white

rounded-3xl

shadow

p-8

"

key={item.title}

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









{/* STATEMENT */}



<section className="

py-20

bg-white

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

Statement of Faith

</h2>



<p className="

mt-6

text-gray-600

leading-relaxed

">


We hold to the biblical Christian faith:

Scripture as God's Word, salvation by grace through faith
in Christ, and the Church as God's agent in the world.

We affirm that the Holy Spirit regenerates, calls and
empowers believers for ministry.


</p>


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



<p className="mt-5 text-gray-300">

Empower leaders. Equip people. Transform communities.

</p>



<Link

to="/joincohort"

className="

inline-block

mt-8

bg-yellow-500

text-blue-950

px-10

py-4

rounded-full

font-bold

"

>


Join Our Next Cohort


</Link>


</section>






<Footer/>


</div>


)


}