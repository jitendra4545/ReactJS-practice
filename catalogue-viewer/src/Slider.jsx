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
       <div  >
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
            return  <div>
            
            <img
            key={i}
            style={{borderRadius:"40px"}}
            src={el.url} 
            width={"100%"}
            height={'500px'}
            />
            </div>
          })}
        </Carousel>
       </div>
    </div>
    <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:'20px'}}  >
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
            return<div > <p style={{padding:"20px"}}  key={i}>
                <span style={{fontSize:"35px", color:"grey",fontWeight:"bold"}} >{el.name}</span>
                <br />
                <br />
            {el.desc}
            
            
            </p>
           
            </div>
          })}
        </Carousel> 
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
        <Button style={{borderRadius:"20px",backgroundColor:"blue"}} onClick={handleAutoPlay}>{Active?<PauseIcon style={{fontSize:'4rem',color:'white'}}  />:<PlayCircleFilledIcon style={{fontSize:'4rem',color:"white"}} />}</Button>
    </div>
</div>
        
    )
}






