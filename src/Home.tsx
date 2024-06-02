import HomeCards from "./Components/HomeCards";
function Home() {

    return (
        <>
            <h1 style={{ fontFamily: "Courier New" }}>HOME</h1>
            <HomeCards project="Project1" />
            <HomeCards project="Project2" />
        </>

    );
}

export default Home;