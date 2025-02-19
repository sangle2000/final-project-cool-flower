function ContactContent() {

    return (
        <>
            <div className="contact-content-container">
                <div className="contact-information-container">
                    <div className="contact-details-container">
                        <h3>
                            Contact Details
                        </h3>

                        <div className="contact-details">
                            <div className="contact-details__location">
                                <i className="bi bi-geo-alt-fill"></i>
                                <div className="contact-details__location-container">
                                    <p className="title">
                                        Our Location
                                    </p>

                                    <p className="description">
                                        1569 2nd Ave, New York, NY 10028, USA
                                    </p>
                                </div>
                            </div>

                            <div className="contact-details__telephone">
                                <i className="bi bi-telephone-fill"></i>
                                <div className="contact-details__telephone-container">
                                    <p className="title">
                                        Call Us
                                    </p>

                                    <div className="description">
                                        <span>
                                            +123 456 7890
                                        </span>

                                        <span>
                                            +123 456 7891
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-details__email">
                                <i className="bi bi-envelope-fill"></i>
                                <div className="contact-details__email-container">
                                    <p className="title">
                                        Our Email
                                    </p>

                                    <div className="description">
                                        <span>
                                            info@example.com
                                        </span>

                                        <span>
                                            support@example.com
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="send-message-container">
                        <h3>
                            Send Us a Message
                        </h3>

                        <input className="send-message-name" placeholder="Name" required/>
                        <input className="send-message-email" placeholder="Email" type="email" required/>
                        <input className="send-message-subject" placeholder="Subject" required/>
                        <textarea className="send-message-message" placeholder="Message" required></textarea>

                        <button className="send-message-button" type="submit">
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="map-container">
                    <h3>
                        Find Us
                    </h3>
                    <iframe
                        width="450"
                        height="600"
                        style={{border: "0"}}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed/v1/place?q=165+Linh+Trung,+Linh+Trung,+Thủ+Đức,+thành+phố+Hồ+Chí+Minh&key=AIzaSyAYNubLTf1tIzBlY9D6KEnwRWtDkkeslyk"
                    ></iframe>
                </div>
            </div>
        </>
    )
}

export default ContactContent;