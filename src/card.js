import './card.css'

const Card = ({login, img, html_url}) => {
    return (        
        <div className='card'>
            <div className='avatar-container'>
                <img alt={login+" avatar"} src={img} className='avatar'/>
            </div>
            <div className='login'>
                id: <a href={html_url} target="_blank" rel='noreferrer'>{login}</a>
            </div>
        </div>
    );
}

export default Card;