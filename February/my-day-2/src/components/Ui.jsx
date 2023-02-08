import React from 'react'

export const Ui = ({names}) => {
    return (
        <div style={{ backgroundColor: "orange" }}>
 
            <h1 style={{color:'red'}}>Just For You </h1>
            <h1 style={{fontFamily:'monospace',color:'Highlight'}}>Hi ..... {names}</h1>
            <p style={{ padding: '10px',fontFamily: 'bold', color: 'blue', fontSize: '25px' }}>There are many love stories in this world, but ours is the sweetest.It is sweet because you are in this love story. Will you be with me forever ? I love you .......</p>
            {/* // <img  width={'20%'} src='https://t4.ftcdn.net/jpg/00/96/48/45/240_F_96484587_7lWZQz2UQKWLfiT0CMOyCnQ7OcwSmDzj.jpg' /> */}
   <img width={'70%'} src='https://static.toiimg.com/photo/89411037.cms' />
            <h1 style={{ color: 'red' }}>Happy Propose Day {names}</h1>
            <p style={{ padding: '10px', fontFamily: 'bold', color: 'blue', fontSize: '25px' }}>Today I promise a lifetime and neverending love and togetherness. Happy Propose Day, my love! </p>
            <img width={'70%'} src='https://static.toiimg.com/thumb/msid-89410599,imgsize-19748,width-800,height-600,resizemode-75/89410599.jpg' />
        </div>
    )
}
