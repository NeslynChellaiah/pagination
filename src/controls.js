import './controls.css';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { useState, useEffect } from 'react';

const Controls = ({getData}) => {

    const [pageNumber, setPageNumber] = useState(1)
    const n = 5;

    const pageNumberChanged = (newPage) => {
        if(newPage !== pageNumber){
            document.getElementById("page"+pageNumber).classList.remove("cur-page")
            getData((newPage+2)*20)
            document.getElementById("page"+newPage).classList.add("cur-page")
            setPageNumber(newPage)
        }
    }

    const prevClicked = () => {
        if(pageNumber > 1) {
            pageNumberChanged(pageNumber - 1)
            setPageNumber(pageNumber - 1)
        }
    }
    const nextClicked = () => {
        if (pageNumber < n) {
            pageNumberChanged(pageNumber + 1)
            setPageNumber(pageNumber + 1)
        }
    }

    useEffect(()=>{
        if(pageNumber === 1) {
            document.getElementById('prev').style.color = 'grey'
            document.getElementById('prev').style.cursor = 'default'
            document.getElementById('next').style.color = '#396EB0'  
            document.getElementById('next').style.cursor = 'pointer' 
        } else if (pageNumber === 5) {
            document.getElementById('next').style.color = 'grey' 
            document.getElementById('next').style.cursor = 'default'
            document.getElementById('prev').style.color = '#396EB0'
            document.getElementById('prev').style.cursor = 'pointer'
        } else {
            document.getElementById('prev').style.color = '#396EB0'
            document.getElementById('next').style.color = '#396EB0' 
            document.getElementById('prev').style.cursor = 'pointer'
            document.getElementById('next').style.cursor = 'pointer'
        }
    },[pageNumber])
    
    return (
        <div className="controls">
            <AiOutlineLeft className='icon' id='prev' onClick={prevClicked}/>
            <ul>
                {
                    [...Array(n)].map((number, index) => {
                            return (
                                <li id={"page" + (index+1)} onClick={()=>pageNumberChanged(index+1)} className={index+1 === 1 ? 'cur-page' : ''} key={index+1}>{index+1}</li>
                            )
                        }
                    )
                }
            </ul>
            <AiOutlineRight className='icon' id='next' onClick={nextClicked}/>
        </div>
    )
}

export default Controls;