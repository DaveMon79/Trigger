const ManageListing = () => {
  return (
    <div className="listings-container">
      <article className="listing-item">
        <div className="listing-image">
            <p>pet image here</p>
        </div>
        <div className="listing-info">
          <p>Pet name</p>
          <p>Location</p>
          <p>Age</p>
          <p>Gender</p>
        </div>
      </article>
      <div className="listing-buttons">
          <button className="edit-btn" id="edit">EDIT</button>
          <button className="edit-btn" id="delete">DELETE</button>
      </div>
    </div>
  );
};

export default ManageListing;
