import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function Home(){


const fade = {

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



const vision = [

{
title:"Vision",
text:
"To prepare God’s people for God’s work. To see gospel-centered churches and gospel-centered leaders equipped with the knowledge and tools that would help them to be effective, efficient, and transformational in the world."
},

{
title:"Mission",
text:
"To train men and women empowered by God to equip and disciple God’s people."
},

{
title:"Our Conviction",
text:
"Every believer is called to ministry. When leaders are grounded in Scripture and skilled in people development, churches grow healthier and organizations lead with integrity."
}

];





const tools=[

"The Gospel",

"Biblical Understanding & Interpretation",

"Leadership Training",

"Public Speaking & Presentation"

];





const differences=[

{
title:"Biblically Rooted",
text:"All training flows from Scripture, not corporate fads. Ephesians 4 is our blueprint."
},

{
title:"Spirit Empowered",
text:"We provide tools, but only God empowers. Regeneration, calling, and gifting are His work."
},

{
title:"Gospel Centered",
text:"The gospel is taught, protected, and applied to all of life."
},

{
title:"Multiplication Focused",
text:"We train trainers. Every leader leaves ready to equip others."
},

{
title:"Sanctification as the Goal",
text:"Effective and efficient are means. Transformation into Christlikeness is the end."
},

{
title:"Contextual",
text:"Built for Kenya and East Africa — practical, affordable, and relevant."
}

];





return(


<div className="min-h-screen bg-gray-50">


<Header/>





{/* HERO */}



<section className="

relative

overflow-hidden

bg-linear-to-br

from-blue-950

via-blue-900

to-blue-800

text-white

py-32

">


<div className="

absolute

w-96

h-96

bg-yellow-500/20

rounded-full

blur-3xl

top-0

right-0

">


</div>




<motion.div

variants={fade}

initial="hidden"

animate="show"


className="

relative

max-w-6xl

mx-auto

px-6

text-center

"


>


<p className="

text-yellow-400

tracking-[8px]

font-bold

">

EPHESIANS 4:11-13

</p>



<h1 className="

mt-8

text-5xl

md:text-8xl

font-black

uppercase

leading-tight

">


EMPOWER

<span className="text-yellow-400">

&nbsp;|&nbsp;

</span>

EQUIP


<br/>


TRANSFORM


</h1>




<h2 className="

mt-8

text-2xl

md:text-3xl

font-bold

">


Preparing God’s People for God’s Work


</h2>




<p className="

mt-6

max-w-3xl

mx-auto

text-gray-200

text-lg

">


Training gospel-centered leaders who transform churches,
organizations, and communities through biblical leadership
and discipleship.


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

bg-yellow-500

text-blue-950

px-10

py-4

rounded-lg

font-bold

"


>

Join Our Cohort

</Link>



<Link

to="/contact"

className="

border

border-white

px-10

py-4

rounded-lg

font-bold

"


>

Contact Us

</Link>



</div>



</motion.div>


</section>







{/* VISION */}



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

vision.map(item=>(


<motion.div

variants={fade}

whileInView="show"

initial="hidden"

viewport={{once:true}}

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

leading-relaxed

">

{item.text}

</p>


</motion.div>


))


}


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

text-3xl

font-bold

text-yellow-400

">

OUR ANCHOR SCRIPTURE

</h2>



<p className="

mt-8

text-xl

italic

leading-relaxed

">


“And He Himself gave some to be apostles, some prophets,
some evangelists, and some pastors and teachers,
for the equipping of the saints for the work of ministry,
for the edifying of the body of Christ...”


</p>



<div className="

mt-10

bg-white/10

rounded-2xl

p-8

">


<h3 className="

text-2xl

font-bold

">

What This Text Means

</h3>


<p className="

mt-4

text-gray-200

">

Christ gives gifts to the church for the equipping and
edification of believers. Our role is to help leaders
effectively transform churches into gospel-centered,
disciple-making communities.

</p>


</div>



</div>


</section>









{/* WHAT WE DO */}



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

WHAT WE DO

</h2>




<div className="

grid

md:grid-cols-4

gap-6

mt-12

">


{

tools.map(tool=>(


<div className="

bg-white

shadow

rounded-2xl

p-6

text-center

">


<h3 className="

font-bold

text-yellow-600

">

{tool}

</h3>


<p className="

mt-3

text-gray-600

">

Practical biblical tools for ministry and leadership.

</p>


</div>


))


}



</div>


</section>








{/* TRAINING TRACKS */}



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

TRAINING TRACKS

</h2>



<div className="

grid

md:grid-cols-2

gap-10

mt-12

">



<div className="

bg-white

p-10

rounded-3xl

shadow

">


<h3 className="

text-2xl

font-bold

text-blue-950

">

Church Leadership Institute

</h3>


<p className="mt-5 text-gray-600">

Training pastors and ministry leaders through biblical foundations,
shepherding skills, disciple-making and leadership development.

</p>


</div>





<div className="

bg-white

p-10

rounded-3xl

shadow

">


<h3 className="

text-2xl

font-bold

text-blue-950

">

Marketplace Leadership Academy

</h3>


<p className="mt-5 text-gray-600">

Helping CEOs, managers, entrepreneurs and leaders lead with
biblical wisdom, excellence and integrity.

</p>


</div>



</div>


</div>


</section>









{/* DIFFERENT */}



<section className="

bg-blue-950

text-white

py-20

">


<div className="max-w-7xl mx-auto px-6">


<h2 className="

text-4xl

font-bold

text-center

">

WHAT MAKES US DIFFERENT

</h2>




<div className="

grid

md:grid-cols-3

gap-8

mt-12

">


{

differences.map(item=>(


<div className="

border

border-white/20

rounded-2xl

p-6

">


<h3 className="

text-yellow-400

font-bold

text-xl

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

bg-linear-to-r

from-blue-950

to-blue-800

text-white

">


<h2 className="

text-4xl

font-bold

">

READY TO MULTIPLY LEADERS?

</h2>


<p className="mt-5 text-gray-300">

Empower leaders. Equip people. Transform communities.

</p>



<Link

to="/contact"

className="

inline-block

mt-8

bg-yellow-500

text-blue-950

px-10

py-4

rounded-lg

font-bold

"

>

Contact Us

</Link>



</section>




<Footer/>


</div>


)

}