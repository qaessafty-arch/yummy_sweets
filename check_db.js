import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import fs from "fs";

const config = JSON.parse(fs.readFileSync("./firebase-applet-config.json", "utf-8"));
const app = initializeApp(config);
const db = getFirestore(app, config.firestoreDatabaseId);

async function check() {
  try {
    const d = await getDoc(doc(db, "config", "main"));
    if (d.exists()) {
      const data = d.data();
      console.log("Config exists!");
      console.log("Logo Mode:", data.logoMode);
      console.log("Logo Emoji:", data.logoEmoji);
      console.log("Has Logo Image?", !!data.logoImage, typeof data.logoImage === "string" ? data.logoImage.substring(0, 30) : "");
    } else {
      console.log("Config document DOES NOT EXIST in Firestore.");
    }
  } catch (e) {
    console.error("Error reading Firestore:", e);
  }
  process.exit(0);
}
check();
