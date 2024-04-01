type User = {
  name: {
    first: string;
    last: string;
    title: string;
  };
  email: string;
  location: {
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: { latitude: number; longitude: number };
  };
  dob: { date: string; age: number };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};
type RandomUsers = {
  results: Array<User>;
};
export type { User, RandomUsers };
