import 'bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router-dom";

interface Props{
    project:string;
}
function HomeCards({project}:Props) {
    const cardStyle = {
        width: "18rem",
        height: "22rem",
        boxShadow: "0 0 1px rgba(255, 255, 255, 0.5)", 
        margin: "10px",
        backgroundColor: "#292031"
    };

    return (
        <div className="card" style={cardStyle}>
            <div className="card-body" >
                <Link to={`/${project}`}>Go to {project}</Link>
            </div>
        </div>
    );
}

export default HomeCards;


