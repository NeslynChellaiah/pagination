import './controls.css';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { useState, useEffect } from 'react';

const Controls = ({getData}) => {

    const [pageNumber, setPageNumber] = useState(1)

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
        if (pageNumber < 5) {
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
                <li id="page1" onClick={()=>pageNumberChanged(1)} className='cur-page'>1</li>
                <li id="page2" onClick={()=>pageNumberChanged(2)}>2</li>
                <li id="page3" onClick={()=>pageNumberChanged(3)}>3</li>
                <li id="page4" onClick={()=>pageNumberChanged(4)}>4</li>
                <li id="page5" onClick={()=>pageNumberChanged(5)}>5</li>
            </ul>
            <AiOutlineRight className='icon' id='next' onClick={nextClicked}/>
        </div>
    )
}

export default Controls;