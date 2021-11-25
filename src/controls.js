import './controls.css';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

const Controls = () => {
    return (
        <div className="controls">
            <AiOutlineLeft className='icon'/>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
            <AiOutlineRight className='icon'/>
        </div>
    )
}

export default Controls;