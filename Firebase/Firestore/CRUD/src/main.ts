import { FirebaseApp, initializeApp } from "firebase/app";

import {
  Firestore,
  getFirestore,
  terminate,
  waitForPendingWrites,
} from "firebase/firestore";
import { firebaseConfig } from "./myconfig";
import { run as createOp } from "./createFuncs";
import { run as readOp } from "./readFuncs";
import { run as updateOp } from "./updateFuncs";
import { run as deleteOp } from "./deleteFuncs";
import { listen } from "./listenerFuncs";
const app: FirebaseApp = initializeApp(firebaseConfig, "Firestore sample code");
const db: Firestore = getFirestore(app);

// createOp(db);

readOp(db);

// updateOp(db);
// deleteOp(db);
// listen(db);

/* Comment out the following three lines
 * when there is not write operations to Firestore
 */
waitForPendingWrites(db).then(async () => {
  await terminate(db);
});
