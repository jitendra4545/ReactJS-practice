import React, { useState } from 'react'

interface Image {
    url: string;
    desc: string;
    name: string;
  }
  
  const images: Image[] = [
    {
      url: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      name: "Slider 1"
    },
    {
      url: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      name: "Slider 2"
    },
    {
      url: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      name: "Slider 3"
    },
    {
      url: "https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=612x612&w=0&k=20&c=-53aSTGBGoOOqX5aoC3Hs1jhZ527v3Id_xOawHHVPpg=",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      name: "Slider 4"
    },
    {
      url: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      name: "Slider 5"
    }
  ];
export const Slider = () => {

    const [count, setCount] = useState<number>(0);
    const [active, setActive] = useState<boolean>(false);
  
    const handleNext = (): void => {
      if (count === images.length - 1) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    };
  
    const handleAutoPlay = (): void => {
      setActive(!active);
    };
  
    const handlePrevious = (): void => {
      if (count === 0) {
        setCount(images.length - 1);
      } else {
        setCount(count - 1);
      }
    };
  
    const handleChange = (current: number, previous: number): void => {
      setCount(current);
    };
  
  return (
    <div>Slider</div>
  )
}
