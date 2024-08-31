import PropertyCard from "./PropertyCard"; // Import the PropertyCard component

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      imgSrc:
        "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
      name: "Aparthotel Stare Miasto",
      city: "Madrid",
      price: "Starting from $120",
      rating: 8.9,
      ratingText: "Excellent",
    },
    {
      id: 2,
      imgSrc:
        "https://cf.bstatic.com/xdata/images/hotel/square600/579099936.webp?k=e04cc7f7fe864ce09b7d7d978dbb7db3e558038a2151eb7c4c11e895bafbd8c0&o=",
      name: "Comfort Suites Airport",
      city: "Austin",
      price: "Starting from $140",
      rating: 9.3,
      ratingText: "Exceptional",
    },
    {
      id: 3,
      imgSrc:
        "https://cf.bstatic.com/xdata/images/hotel/square600/87375132.webp?k=a3eff4ea2475f3a4de01f017463acd719bddada5e63f87f6c0952f8590498865&o=",
      name: "Four Seasons Hotel",
      city: "Lisbon",
      price: "Starting from $99",
      rating: 8.8,
      ratingText: "Excellent",
    },
    {
      id: 4,
      imgSrc:
        "https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o=",
      name: "Hilton Garden Inn",
      city: "Berlin",
      price: "Starting from $105",
      rating: 8.9,
      ratingText: "Excellent",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-[1024px]">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          imgSrc={property.imgSrc}
          name={property.name}
          city={property.city}
          price={property.price}
          rating={property.rating}
          ratingText={property.ratingText}
        />
      ))}
    </div>
  );
};

export default FeaturedProperties;
