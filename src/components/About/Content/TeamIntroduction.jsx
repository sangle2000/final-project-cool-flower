import {teamMembers} from "../../../utils/constant.js";
import MemberCard from "./MemberCard.jsx";

function TeamIntroduction() {
    return (
        <>
            <div className="team-intro-container">
                <h1 className="team-intro-title">
                    Our Team
                </h1>

                <p className="team-intro-content">
                    I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo, when an unknown printer took a galley.
                </p>

                <div className="team-members-container">
                    {
                        teamMembers.map((member) => {
                            return (
                                <MemberCard
                                    key={member.id}
                                    name={member.name}
                                    image={member.image}
                                    role={member.role}
                                    facebook={member.faceBook}
                                    instagram={member.instagram}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TeamIntroduction;