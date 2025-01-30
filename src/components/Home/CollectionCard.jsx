/* eslint-disable react/prop-types */

function CollectionCard({ image, name, desc }) {
  return (
    <>
      <div className="collection-card-item">
        <img src={image} alt="Item Image" />
        <div className="collection-card-item-detail">
          <span className="collection-card-item-detail-title">{name}</span>
          <span className="collection-card-item-detail-desc">{desc}</span>
          <span className="collection-card-item-detail-collection">
            See Collection
          </span>
        </div>
      </div>
    </>
  );
}

export default CollectionCard;
