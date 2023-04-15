import React from 'react'
import axios from 'axios'

function CourseLinks(props) {
    const videos = props.data
    const courseArr = props.data[props.day]
    //console.log(props.id)
    //console.log(props.day,courseArr)

    async function handleClick(key,value){
        let ticks = await axios.post('https://docwebsite.adityasurve1.repl.co/user/getticks',{
            courseId:props.id
        },{headers:{"token":localStorage.getItem('token')},auth:{"user":{"_id":localStorage.getItem('token')}}})
        ticks=ticks.data
        //console.log(props.data)
        console.log(ticks)
        if(!((ticks).includes(value))){
            axios.post('https://docwebsite.adityasurve1.repl.co/user/updatecourseprogress',{
                userId:localStorage.getItem('token'),
                courseId:props.id,
                link:value
            },{headers:{"token":localStorage.getItem('token')},auth:{"user":{"_id":localStorage.getItem('token')}}})  
            .then(response=>{
                console.log("Progress updated")
            })
            .catch(error=>{console.log(error)})
        }
        else{
            console.log("Video already watched")
        }
    }
  return (
    <div className='linksWrapper'>
    {
        courseArr?.map((value,key)=>{
            const split = value.split('/')
            //console.log(split[split.length-1])
            const imgLink = `https://img.youtube.com/vi/${split[split.length-1]}/hqdefault.jpg`
           

            return(
                <div className='videoWrapper'>
                    <a href={value} target="_blank" onClick={()=>handleClick(key,value)}>
                    <img src={imgLink}/>
                        WORKOUT {key+1}
                    </a>
                </div>
            )
        })
    }
    </div>
  )
}

export default CourseLinks