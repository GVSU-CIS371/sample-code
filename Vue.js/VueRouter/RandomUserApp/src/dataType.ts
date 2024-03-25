export type User = {
  id: string;
  name: {
    first: string;
    last: string;
  };
  location: {
    coordinates: { latitude: number; longitude: number };
  };
  dob: { date: string; age: number };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};
