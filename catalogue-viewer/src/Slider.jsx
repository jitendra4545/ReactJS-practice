import React, { useState } from 'react'



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







    return (


        <div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }} >
                {/* Slider {images.length} {Count}  {Active ? "Active" : "Deactive"} */}

   

                <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)" }} >
                    <button></button>
                    {images.map((el, i) => {
                        return <img
                            key={i}
                            style={{
                                width: "120px",
                                height: "80px",
                                borderRadius: "20px",
                                padding: '3px'
                            }}
                            src={el.url} />
                    })
                    }
                    <button></button>
                </div>

              
   

        


                <div>

                </div>


            </div>

        </div>
    )
}
