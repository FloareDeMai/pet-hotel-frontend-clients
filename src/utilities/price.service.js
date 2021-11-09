const setPriceFormat = (price) => {
    
    if (price.length === 0) {
        
    price = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-6 text-red-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    );
    console.log(price);
  } else if (price.length === 1) {
    price = price[0];
  } else if (price.length >= 2) {
    price = `${price[0]}-${price[price.length - 1]}`;
  }
}

const PriceService = {
    setPriceFormat
}

export default PriceService;