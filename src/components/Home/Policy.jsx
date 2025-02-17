function Policy() {
    return (
        <div className="policy-container">
            <div className="policy-detail">
                <i className="policy-detail-icon bi bi-flower2"></i>
                <div className="policy-detail-content">
            <span className="policy-detail-content-title">
              Plants Collection
            </span>
                    <span className="policy-detail-content-desc">
              Any plants for your space
            </span>
                </div>
            </div>
            <div className="policy-detail">
                <i className="policy-detail-icon bi bi-box2-fill"></i>
                <div className="policy-detail-content">
                    <span className="policy-detail-content-title">Free Shipping</span>
                    <span className="policy-detail-content-desc">
              Free shipping on order
            </span>
                </div>
            </div>
            <div className="policy-detail">
                <i className="policy-detail-icon bi bi-arrow-repeat"></i>
                <div className="policy-detail-content">
                    <span className="policy-detail-content-title">100% Money Back</span>
                    <span className="policy-detail-content-desc">
              {`If the item didn't suit you`}
            </span>
                </div>
            </div>
        </div>
    )
}

export default Policy