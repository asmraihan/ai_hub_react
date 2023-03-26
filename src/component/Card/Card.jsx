import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import SingleData from '../SingleData/SingleData';

const Card = () => {
const [data, setData] = useState([])
const [showAll, setShowAll] = useState(false)

// const handleShowAll =() =>{ /* for nubs */
//     setShowAll(true)
// } 

useEffect(()=>{
    const loadData= async() =>{
        const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
        const data = await res.json()
        // console.log(data.data.tools)
        setData(data.data.tools)
    }
    loadData(); /* call to fetch */
},[])
    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-12 w-11/12 mx-auto'>
            {
                data.slice(0, showAll ? 12 : 6).map((singleData) =>(
             <SingleData singleData={singleData} key={singleData.id}></SingleData>

            ))}
        </div>
    {   
    !showAll&& <span
    onClick={()=>setShowAll(true)}>
    <Button>Show More</Button>
    </span>
    }       
        </>

    );
};

export default Card;