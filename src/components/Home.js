import React,{useEffect, useState , useCallback} from 'react'
import axios from 'axios'
import NewsList from './NewsList'

const API_KEY = "7295c506528f4c01bc85126a84b07edc";

function Home(){


    const [inputValue , setInputValue] = useState('');
    const [newsData , setNewsData] = useState([]);
    const [searchQuery , setSearchQuery] = useState(null);

    useEffect(() => {
    
        function getTopHeadLines(){
            return axios.request({
                url :`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`,
                method:'get'
            })
        }

        getTopHeadLines().then(res=>{
            setNewsData(res.data.articles);
        }).catch((err)=>{
            console.log(err);
        })

    }, [])
    

    async function searchData(input){
        try{
            const res = await axios.request({
                url :`https://newsapi.org/v2/everything?q=${input}&apiKey=${API_KEY}`,
                method:'get'
            })
            console.log(res);
        }
        catch(err){
            console.log(err);
        }
    }

    function debounce(fn, timeout = 600){
        let timer ;
        return function(...args){
            clearTimeout(timer);
            timer = setTimeout(()=>{
                fn.apply(this ,args);
            },timeout);
        }
    }

    const debounceSearch  = useCallback(debounce(searchData , 500),[]);

    const headers = ["title" , "description" , "content", "urlToImage"];
    const columns = ["title" , "description","content", "urlToImage"];
    


    return (

        <div>
            <input  onChange={(e)=>debounceSearch(e.target.value)} />
            <NewsList rows={newsData} columns={columns} headers={headers}/>
        </div>
    )
}

export default Home;

