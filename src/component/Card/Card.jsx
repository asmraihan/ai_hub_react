import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';

const Card = () => {
const [data, setData] = useState([])
const [singleData, setSingleData] =useState({})
const [showAll, setShowAll] = useState(false)
const [uniqueId, setUniqueId] = useState(null)

// console.log(singleData)
// const handleShowAll =() =>{ /* for nubs */
//     setShowAll(true)
// } 
const handelSort =() =>{
    const sortedData = data.sort((a,b)=>{
        return new Date(a.published_in) - new Date(b.published_in)
    })
    setData([...data, sortedData])
}


useEffect(()=>{
    // console.log('hlw frm useEfct')
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
    .then(res => res.json())
    .then(data => setSingleData(data.data))
},[uniqueId])

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
    <span onClick={handelSort}>
      <Button >Sort By Date</Button>
    </span>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-12 w-11/12 mx-auto'>
            {
                data.slice(0, showAll ? 12 : 6).map((singleData) =>(
             <SingleData 
                singleData={singleData} 
                key={singleData.id}
                setUniqueId={setUniqueId}> {/* singledatar kase set unique id pass korlam */}
    
                </SingleData>

            ))}
        </div>
    {   
    !showAll&& (<span
    onClick={()=>setShowAll(true)}>
    <Button>Show More</Button>
    </span>)
    }
    <Modal singleData={singleData} />   
        </>

    );
};

export default Card;