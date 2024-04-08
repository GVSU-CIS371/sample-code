import {
  addDoc,
  collection,
  CollectionReference,
  doc,
  DocumentReference,
  Firestore,
  setDoc,
} from "firebase/firestore";
import { StateType } from "./types";

const states: StateType[] = [
  {
    abbrev: "AL",
    name: "Alabama",
    capital: "Montgomery",
    population: 20_123_543,
  },
  {
    abbrev: "AZ",
    name: "Arizona",
    capital: "Phoenix",
    population: 13_220_000,
  },
  {
    abbrev: "CA",
    name: "California",
    capital: "Sacramento",
    population: 38_014_752,
  },
];

function addSingleDoc(db: Firestore) {
  // Use filesystem syntax for document path
  const il_doc: DocumentReference = doc(db, "states/IL");
  // Add a new document with our own id (IL)

  const illinoisDetail: StateType = {
    abbrev: "IL",
    name: "Illinois",
    capital: "Springfield",
    population: 11_281_321,
  };
  setDoc(il_doc, illinoisDetail).then(() => {
    console.log(`New document with ID ${il_doc.id} inserted`);
  });

  // Use arguments syntax for document path
  const mi_doc: DocumentReference = doc(db, "states", "MI");
  // Add a new document with our own id (MI)
  const michDetails: StateType = {
    abbrev: "MI",
    name: "Michigan",
    capital: "Lansing",
    population: 8_012_612,
  };
  setDoc(mi_doc, michDetails).then(() => {
    console.log("MI added");
  });

  const coll: CollectionReference = collection(db, "states");
  // Add a new document with autogenerated id
  const ohioDetails: StateType = {
    name: "Ohio",
    capital: "Columbus",
    abbrev: "OH",
    population: 22_123_734,
  };
  addDoc(coll, ohioDetails).then((newDoc: DocumentReference) => {
    console.log(`New document with ID ${newDoc.id} inserted`);
  });
}

function addMultipleDocsWithAwait(db: Firestore) {
  states.forEach(async (z: StateType) => {
    const d = doc(db, "states", z.abbrev);
    await setDoc(d, {
      name: z.name,
      capital: z.capital,
      population: z.population,
    });
  });
}
function addDocInSubCollection(db: Firestore) {
  const michCities = collection(db, "states", "MI", "cities");
  addDoc(michCities, {
    name: "Grand Rapids",
    lat: 42.963795,
    lon: -85.670006,
  });
  addDoc(michCities, {
    name: "Lansing",
    lat: 42.732536,
    lon: -84.555534,
  });
  addDoc(michCities, {
    name: "Detroit",
    lat: 42.331429,
    lon: -83.045753,
  });
  const GR = doc(db, "states", "MI", "cities", "GRR");
  setDoc(GR, { name: "Grand Rapids", lon: -85.670006, lat: 42.963795 });
}

export function run(db: Firestore) {
  addSingleDoc(db);
  addDocInSubCollection(db);
  //   addMultipleDocsWithAwait(db);
}