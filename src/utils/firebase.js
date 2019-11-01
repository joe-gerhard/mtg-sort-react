import React, { createContext } from 'react';
import app from 'firebase/app';

const FirebaseContext = createContext(null)
export { FirebaseContext }

export default ({ children }) => {
  
  if(!app.apps.length) {
    app.initializeApp({
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID
    })
  };

  return (
    <FirebaseContext.Provider value={ app }>
      { children }
    </FirebaseContext.Provider>
  )

}