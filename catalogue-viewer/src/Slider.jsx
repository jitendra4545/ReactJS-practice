import React, { useEffect, useRef, useState } from 'react'
import  "./slider.css"

import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseIcon from '@mui/icons-material/Pause';
import { Button } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


let images = [{
    url: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.",
    name:"Slider 1"
}, {
    url: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.",
    name:"Slider 2"
}, {
    url: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.",
    name:"Slider 3"
}, {
    url: "https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=612x612&w=0&k=20&c=-53aSTGBGoOOqX5aoC3Hs1jhZ527v3Id_xOawHHVPpg=",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.",
    name:"Slider 4"
}, {
    url: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.",
    name:"Slider 5"
}]


export const Slider = () => {

    const [Count, setCount] = useState(0)
    const [Active, setActive] = useState(false)
    const [sliderInt, setSliderInt] = useState(null);






const handleNext=()=>{
    setCount((prevIndex) => (prevIndex + 1) % images.length)
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

const handlePlay=()=>{
    setSliderInt(setInterval(handleNext, 3000));
   
}

const handlePause=()=>{
   
    clearInterval(sliderInt);
    setSliderInt(null);
}


console.log("abdbsdhghgds",Count,Active)

    return (

<div className='container' >
    <div>
       <div  >
        
       
            <img
           
            style={{borderRadius:"40px"}}
            src={images[Count].url} 
            width={"100%"}
            height={'500px'}
            />
         
       </div>
    </div>
    <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:'20px'}}  >
   <div>
    <div > <p style={{padding:"20px"}} >
                <span style={{fontSize:"35px", color:"grey",fontWeight:"bold"}} >{images[Count].name}</span>
                <br />
                <br />
            {images[Count].desc}
            
            
            </p>
           
            </div>
         
        </div>
    </div>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px"}} >
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
               <div>
                <Button onClick={handleNext}><ArrowCircleRightIcon style={{fontSize:'4rem'}}/></Button>
                </div> 
    </div>
    <div className='playpause' >
{Active ?   <Button style={{borderRadius:"20px",backgroundColor:"blue"}} onClick={handleAutoPlay}><PauseIcon onClick={handlePause}  style={{fontSize:'4rem',color:"white"}} /></Button> : <Button style={{borderRadius:"20px",backgroundColor:"blue"}} onClick={handleAutoPlay}><PlayCircleFilledIcon onClick={handlePlay} style={{fontSize:'4rem',color:'white'}}  /></Button>}

      
    </div>
</div>
        
    )
}






