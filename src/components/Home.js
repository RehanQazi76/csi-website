import React from 'react'
import "../style/Home.css"
import team from  "./images/teamimg.jpeg"
export const Home = () => {
    return (
        <><div className ="container" >
        {/* <img className='img' src='https://media.istockphoto.com/photos/abstract-geometric-background-connecting-dots-as-plexus-in-blue-and-picture-id1187662232?b=1&k=20&m=1187662232&s=170667a&w=0&h=kQChoMTKqNjO2FNJVkV5ZuayKrIGLHQG96jDGfR9Eec=' className='img-fluid shadow-4' alt='bgimg' height='400px' width='1000px'></img> */}
      <div className='intro'>
      <img src='https://technoswift.in/assets/img/rh.jpeg' className='img-fluid shadow-4'alt='bgimg'></img>
        
      </div>
      <div className='about ' style={{justifyContent:"center"}}>
    <div style={{display:"inline-flex",textAlign:"center",margin:"0 auto 0 auto"}}>
    <div style={{width:"20px",boderBottom:"5px solid white"}}></div>
       <div >
       <h1 className='abt' style={{color: "white",fontFamily: "'Roboto Mono', monospace",fontSize:"70px",fontWeight:"bold"}}>
             ABOUT US 
        </h1>
       </div>
       <div style={{width:"20px",boderBottom:"5px solid",}}></div>
    </div>
     
       <div className='timg container text-center' style={{ textAlign:"center", margin:"0 auto 0 auto"}}>
       <div className='row'>
          <div  className='col-lg-6'>
          <img src={team} className='img-fluid shadow-4' style={{width:'600px', height:"350px", borderRadius:"15%", textAlign:"center"}}></img>
        
          </div>
         <div className='col-lg-6' style={{hieght:"600px",padding:"2rem"}}>
         <h3 className='abt' style={{color:'white',textAlign:"left",fontFamily: "'Ibarra Real Nova', serif"}}>
            <p style={{}}>
            “If everyone is moving forward together, then success takes care of itself.”</p>
            <p>
            Computer Society of India (CSI) Student Branch is one of the premier organizations working under the banner of VIT Pune
             to drive students attention towards a career in the field of Computer Science. 
            The seed of CSI Student Branch was sown at VIT Pune by a handful of IT enthusiasts who were interested in computer programming,
             web development, data science, machine learning, etc. and who wanted to exhibit their ideas related to this rapidly emerging sector to the world emerging in 2019.
              
            </p>
          </h3>
         </div>
         </div>
        </div>
      </div>
    <div style={{justifyContent:"center",marginBottom:"100px"}}>
      <h1 style={{color:"white" , justifyContent:"centre",fontSize:"70px",marginBottom:"15px"}}>
        Team and Values
      </h1>
      <h2 style={{color:"white" , textAlign:"left", fontSize:"x-large"}}>
        <p>
        “The strength of the team is each individual member. The strength of each member is the team.”
        </p>
        <p>
        We at <b>CSI, VIT Pune</b> firmly believe in the way a team plays as a whole determines its success. One may have the greatest bunch of individual stars in the world, 
        but if they don’t play together, the club won’t be worth a dime.
        </p>
        <p>
        It’s the ability to work together toward a common vision and to direct individual actions in a collaborative manner to achieve team goals. The committee has extensively contributed in 
        enlightening the masses about crucial concepts required in the field of Information Technology.
        </p>
      </h2>
      </div>       
    </div>
        </>
    )
}
