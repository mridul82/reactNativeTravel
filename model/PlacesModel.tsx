export type PlacesModel = {
    id: number;
    name: string;
    description: string;
    image: string;
    rating: number;
    reviews: number;
    location: {
      latitude: number;
      longitude: number;
    };
  };