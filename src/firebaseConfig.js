//Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-database.js";

// Firebase configuration
const appSettings = {
  // databaseURL needs to be added
  // databaseURL: "https://your-database-url.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(appSettings);
export const database = getDatabase(app); // Export database object