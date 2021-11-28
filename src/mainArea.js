import Card from './card';
import Controls from './controls';
import Loader from './loader';
import './mainArea.css';

const MainArea = ({getData, users}) => {
    return (
        <>
            <header className='header'>
                <h1>pagination</h1>
            </header>
            <section className='main-area'>
                <div className='content'>
                    <section className='cards'>
                        {(users.length === 0) && <Loader />}
                        {users.map((user)=>{
                            return <Card 
                                key={user.id} 
                                login={user.login} 
                                img={user.avatar_url} 
                                html_url={user.html_url}
                            />
                        })}
                    </section>
                </div>
                <Controls getData={getData}/>
            </section>
        </>
    );
}

export default MainArea;

