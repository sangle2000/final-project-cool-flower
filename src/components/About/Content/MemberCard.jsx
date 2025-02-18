import {Link} from "react-router-dom";

function MemberCard({ name, image, role, facebook, instagram }) {
    return (
        <>
            <div className="team-member-card-container">
                <img className="team-member-card-image" src={image} alt={name}/>

                <div className="team-member-card-information">
                    <h1 className="team-member-card-name">
                        {name}
                    </h1>

                    <p className="team-member-card-role">
                        {role}
                    </p>
                </div>

                <div className="blank"></div>

                <div className="team-member-card-social">
                    <Link to={facebook}>
                        <i className="bi bi-facebook"></i>
                    </Link>

                    <Link to={instagram}>
                        <i className="bi bi-instagram"></i>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MemberCard;