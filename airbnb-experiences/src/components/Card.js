import thumbnail from "../images/katie-zaferes.png";
import star from "../images/star.png";

export default function Card() {
    return (
        <div className="card">
            <img src={thumbnail} alt="Katie Zaferes" className="card--image"/>
            <div className="card--stats">
                <img src={star} alt="Star" className="card--star" />
                <span>5.0 </span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p className="card--description">Life lessons with Katie Zaferes</p>
            <p className="card--price">
                <span className="bold">From $136</span> / person
            </p>
        </div>
    )
}