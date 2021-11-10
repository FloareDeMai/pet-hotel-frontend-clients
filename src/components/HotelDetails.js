function HotelDetails(props) {
  let hotel = props.location.state.hotel;
  return (
    <div className="flex" style={{ fontFamily: "Raleway" }}>
      <div className="mx-auto w-3/4">
        <h1 className="mt-4 text-2xl font-semibold">{hotel.hotelName}</h1>
        <div className="flex items-center py-2">
          <img src="../../images/star.png" alt="star" className="h-5 mr-1" />
          <span className="font-semibold text-lg mr-1">{hotel.rating}</span>
          <span className="text-gray-400 text-lg underline">
            {hotel.reviews.length === 0 ? (
              <span className="text-sm">(No reviews yet)</span>
            ) : (
              `(${hotel.reviews.length} reviews)`
            )}
          </span>
        </div>
        <img
          src={hotel.pictureLink}
          alt={hotel.hotelName}
          className="w-2/4 rounded-lg"
        />
        <div className="w-2/4 text-left">{hotel.description}</div>
        <div className="w-2/4 border-b-2 text-gray-400 my-4"></div>
      </div>
    </div>
  );
}

export default HotelDetails;
