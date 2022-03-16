import React from 'react'

const NewsItem=({row,columns})=>{


    return (
        <div style={{width:'80%'}}>
            <div className="title" style={{fontWeight:'bold',fontSize:'40px',margin:'10px 0'}}>{row.title || ''}</div>
            <div className="image" style={{textAlign:'center'}}>
             {
              row.urlToImage && <img style={{objectFit:'cover'}} width="400" height="400" src={row.urlToImage}/>   
             }     
            </div>
            <div style={{fontSize:'20px',margin:'10px 0'}}>
                {
                    row.description || ""
                }
            </div>
            <div style={{fontSize:'20px',}}>
                {
                    row.content || ""
                }
            </div>

        </div>
    )
}

export default NewsItem;