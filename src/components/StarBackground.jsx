import { useState,useEffect } from "react";


// the star has the f/f components and we want to keep track of them => id , size , x , y , opacity , animationDuration
// similar for the meteors id,size,x,y,delay,animationDuration
export const StarBackground = () => {
    // a state to hold the stars
    const [stars,setStars] = useState([]);
    // state for the meteors
    const [meteors,setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        };
        window.addEventListener("resize",handleResize);

        return () => {
            window.removeEventListener("resize",handleResize);
        };
    },[]); 
    // empty dependency array '[]' means this effect runs only once else it will run infinitely
    // or else it will keep generating stars infinitely and break the computer
    
    // for the stars ..generateStars function
    const generateStars = () => {
        const numberOfStars = Math.floor(
            window.innerWidth * window.innerHeight / 10000    
        );

        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, // size between 1 and 4 pixels
                // x,y is the position of the star
                x: Math.random() * 100, // percentage of the screen width, we're placing it in our viewport from 0 to 100%
                y: Math.random() *100, // percentage of the screen height
                opacity: Math.random() * 0.5 + 0.5, // opacity between 0.5 and 1 or from 50% to 100%
                animationDuration: Math.random() * 4 + 2,// duration between 2s and 6s- make the stars twinkle or pulsate
            });
        }
        setStars(newStars);
    };

    // genetate the meteors function
    const generateMeteors = () => {
        const numberOfMeteors = 4 ; // fixed number of meteors
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1, // size between 1 and 4 pixels
                // x,y is the position of the star
                x: Math.random() * 100, // percentage of the screen width, we're placing it in our viewport from 0 to 100%
                y: Math.random() * 20, // percentage of the screen height , we're placing it in our viewport from 0 to 20%
                delay: Math.random() * 15 , 
                animationDuration: Math.random() * 3 + 3,// make the stars twinkle or pulsate
            });
        }
        setMeteors(newMeteors);
    };

    return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* loop through the stars state*/}
        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse-subtle" style={{
                width: star.size + 'px',
                height: star.size + 'px',
                left: star.x + '%',
                top: star.y + '%',
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
            }}/>
        ))}
        {/* for the meteors state*/}
        {meteors.map((meteor) => (
            <div 
            key={meteor.id} 
            className="meteor animate-meteor" 
            style={{
                width: meteor.size*50 + 'px',
                height: meteor.size*2 + 'px',
                left: meteor.x + '%',
                top: meteor.y + '%',
                animationDelay : meteor.delay ,
                animationDuration: meteor.animationDuration + "s",
            }}/>
        ))}
    </div>
  )
}