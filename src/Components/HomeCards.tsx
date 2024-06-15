import 'bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router-dom";

interface Props {
    project: string;
}
function HomeCards({ project }: Props) {
    const cardStyle = {
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
        width: "98%",
        margin: "1%",
        backgroundColor: "#344C64",
        borderWidth: ".4em",
        borderColor: "#240750",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };

    const imageStyle = {
        display: "flex",
        justifyContent: "center",
        height: "auto",
        width: "94%",
        margin: "3%",
        borderWidth: ".5em",
        borderColor: "#240750"
    }

    const titleStyle = {
        fontFamily: "Helvetica",
        fontSize: "6em",
        fontWeight: "bold",
        color: "#EEEDEB",
        justifyContent: "center"
    };

    const paragraphStyle = {
        fontFamily: "Helvetica",
        fontSize: "1.5em",
        color: "#EEEDEB",
        justifyContent: "center"
    };

    const buttonStyle =
    {
        backgroundColor: '#57A6A1',
        borderColor: '#240750',
        borderWidth: ".2em",
        width: "80%",
        height: "10%",
        marginLeft: "10%",
        marginRight: "10%"
    }

    return (

        <div className="card mb-3" style={cardStyle}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`/${project}.gif`} className="img-fluid rounded-start" alt={project} style={imageStyle}></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title" style={titleStyle}>Card title</h5>
                        <p className="card-text" style={paragraphStyle}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <Link to={`/${project}`} className="btn btn-primary" style={buttonStyle}>
                            Go to {project}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeCards;


