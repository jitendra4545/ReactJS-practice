import React, { useState } from 'react'
import  "./slider.css"
import Carousel from 'react-material-ui-carousel'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseIcon from '@mui/icons-material/Pause';
import { Button } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


let images = [{
    url: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    desc: ""
}, {
    url: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
    desc: ""
}, {
    url: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    desc: ""
}, {
    url: "https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=612x612&w=0&k=20&c=-53aSTGBGoOOqX5aoC3Hs1jhZ527v3Id_xOawHHVPpg=",
    desc: ""
}, {
    url: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
    desc: ""
}]


export const Slider = () => {

    const [Count, setCount] = useState(0)
    const [Active, setActive] = useState(false)


const handleNext=()=>{
    if(Count==images.length-1){
        setCount(0)

    }else{
        setCount(Count+1)
    }
}


const handleAutoPlay=()=>{
    setActive(!Active)
}



const handlePrevious=()=>{
    if(Count==0){
        setCount(images.length-1)
    }else{
        setCount(Count-1)
    }
}


const handleChange=(curr,prev)=>{
   setCount(curr)
   console.log(curr,"22552356723")
}


console.log(Count,Active)


    return (

<div className='container' >
    <div>
       <div>
        <Carousel
         index={Count}
         onChange={handleChange}
         interval={3000}
         duration={500}
         autoPlay={Active} 
         animation="slide"
         indicators={false}
         navButtonsAlwaysInvisible={true}
         stopAutoPlayOnHover
         swipe={false}
        
        >
         { images.map((el,i)=>{
            return   <img
            key={i}
           height={'500px'}
           width={'600px'}
          style={{borderRadius:"40px"}}
            src={el.url} 
            />
          })}
        </Carousel>
       </div>
    </div>
    <div>
    <div>
        <Carousel
         index={Count}
         onChange={handleChange}
         interval={3000}
         duration={500}
         autoPlay={Active} 
         animation="slide"
         indicators={false}
         navButtonsAlwaysInvisible={true}
         stopAutoPlayOnHover
         swipe={false}
        >
         { images.map((el,i)=>{
            return <p>
            key={i}
            src={el.name}
            </p>
          })}
        </Carousel>
       </div>
    </div>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
   <div>
    <Button onClick={handlePrevious} ><ArrowCircleLeftIcon style={{fontSize:'4rem'}}/></Button>
    </div> 
                 <div className='allimages'  >
                    
                     {images.map((el, i) => {
                         return <img
                             key={i}
                             onClick={()=>setCount(i)}
                             style={{
                                width: "120px",
                               height: "80px",
                                borderRadius: "20px",
                                padding: '3px',
                                filter:i===Count ? "grayscale(0%)":"grayscale(200%)"
                             }}
                            src={el.url} />
                     })
                    }
                   
                </div>
               <div style={{display:'flex',justifyContent:"center",alignItems:'center'}} >
                <Button onClick={handleNext}><ArrowCircleRightIcon style={{fontSize:'4rem'}}/></Button>
                </div> 
    </div>
    <div>
        <Button style={{borderRadius:"20px",backgroundColor:"blue"}} onClick={handleAutoPlay}>{Active?<PauseIcon style={{fontSize:'4rem',color:'white'}}  />:<PlayCircleFilledIcon style={{fontSize:'4rem',color:"white"}} />}</Button>
    </div>
</div>
        
    )
}







// <div>
// <button onClick={handleAutoPlay}>Play</button>
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }} >
//                 {/* Slider {images.length} {Count}  {Active ? "Active" : "Deactive"} */}

   


              
   

        


//                 <div>

//                 </div>


//             </div>

//         </div>