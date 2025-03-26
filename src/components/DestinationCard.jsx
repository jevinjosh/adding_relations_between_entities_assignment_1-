const DestinationCard = ({ destination }) => {
    return (
    <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
        <img style={{width:'200px'}} src={destination.image} alt={destination.name} />
        <h2>{destination.name}</h2>
        <h4>{destination.location}</h4>
        <p>{destination.description}</p>
        <p><strong>Price:</strong> {destination.price}</p>
    </div>
    );
};

export default DestinationCard;