import { ref } from "vue";
import { User } from "../dataType";

export const randomUsers = ref<Array<User>>([
  {
    id: "1",
    name: { first: "Arianna", last: "Gibson" },
    location: { coordinates: { latitude: -88.6967, longitude: 129.668 } },
    dob: { date: "1957-10-24T19:05:48.706Z", age: 65 },
    picture: {
      large: "https://randomuser.me/api/portraits/women/28.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/28.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/28.jpg",
    },
  },
  {
    id: "2",
    name: { first: "Meral", last: "Karadaş" },
    location: { coordinates: { latitude: 64.6777, longitude: 165.7105 } },
    dob: { date: "1951-09-29T13:44:34.615Z", age: 72 },
    picture: {
      large: "https://randomuser.me/api/portraits/women/82.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/82.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/82.jpg",
    },
  },
  {
    id: "3",
    name: { first: "Victoire", last: "Durand" },
    location: { coordinates: { latitude: -20.5987, longitude: 74.2199 } },
    dob: { date: "1985-12-11T06:04:05.764Z", age: 37 },
    picture: {
      large: "https://randomuser.me/api/portraits/women/41.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/41.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/41.jpg",
    },
  },
  {
    id: "4",
    name: { first: "Charles", last: "Slawa" },
    location: { coordinates: { latitude: -69.0082, longitude: -28.6795 } },
    dob: { date: "1983-02-25T11:34:25.258Z", age: 40 },
    picture: {
      large: "https://randomuser.me/api/portraits/men/3.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/3.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
    },
  },
]);
