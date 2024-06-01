import 'bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router-dom";

interface Props {
    project: string;
}
function HomeCards({ project }: Props) {
    const cardStyle = {
        width: "96%",
        height: "25%",
        boxShadow: "0 0 1px rgba(255, 255, 255, 0.5)",
        margin: "2%",
        backgroundColor: "#292031"
    };

    const imageStyle = {
        display:"flex",
        justifyContent: "center",
        height:"auto",
        width: "80%",
        margin: "10%"
    }

    const titleStyle = {
        fontFamily: "Helvetica",
        fontSize: "6em",
        fontWeight: "bold",
        color: "#E8E8E8",
        justifyContent: "center"
    };

    const paragraphStyle = {
        fontFamily: "Helvetica",
        fontSize: "1.5em",
        color: "#E8E8E8",
        justifyContent: "center"
    };

    return (

        <div className="card mb-3" style={cardStyle}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="/test.gif" className="img-fluid rounded-start" alt="..." style = {imageStyle}></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title" style = {titleStyle}>Card title</h5>
                        <p className="card-text" style = {paragraphStyle}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <Link to={`/${project}`} className="btn btn-primary" style={{ backgroundColor: 'rgb(255, 99, 132)', borderColor: '#ff0000' }}>
                            Go to {project}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeCards;


