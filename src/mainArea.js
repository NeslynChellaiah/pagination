import Card from './card';
import Controls from './controls';
import './mainArea.css';

const MainArea = () => {
    return (
        <>
            <header className='header'>
                <h1>pagination</h1>
            </header>
            <section className='main-area'>
                <div className='content'>
                    <Card />
                </div>
                <Controls />
            </section>
        </>
    );
}

export default MainArea;

