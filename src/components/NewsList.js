import React from 'react'
import NewsItem from './NewsItem'

const NewsList=({rows ,columns ,headers})=>{

    // const {rows , columns , headers} = table;
    console.log(columns);
    return (
        <div style={{display:'flex' , flexDirection:'column' , alignItems:'center', justifyContent:'center'}}>
            <div>
                <div style={{fontWeight:'bold',fontSize:'100px'}}>
                   Top headlines
                </div>
            </div>
            <div>
            {
            rows.map((row,index)=>{
                return <div style={{display:'flex' ,margin:'5vw 0', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                    <NewsItem key={index} row={row} columns={columns}/>
                </div>
            })
        }
            </div>
        
        </div>
    )
}

export default NewsList;