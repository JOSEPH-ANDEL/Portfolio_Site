import HomeCards from "./Components/HomeCards";
import Background from "./../public/Background.mp4"

function Home() {

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <video className='videoTag' autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}>
                <source src={Background} type='video/mp4' />
            </video>
            
            <h1 style={{ fontFamily: "Courier New", zIndex: 1, position: 'relative' }}>HOME</h1>
            <HomeCards project="Project1" />
            <HomeCards project="Project2" />
        </div>
    );
}

export default Home;
