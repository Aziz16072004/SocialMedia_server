// /config/firebaseConfig.js
const admin = require('firebase-admin');
const serviceAccount = {
  type: "service_account",
  project_id: process.env.project_id,
  private_key: process.env.private_key_id,  
  client_email: process.env.private_key,
 client_id: "110682445753243770885",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-nrbk0%40socialmedia-8f7cb.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
};
// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://socialmedia-8f7cb.appspot.com',  // Your Firebase Storage bucket
});

const bucket = admin.storage().bucket();  // Get the storage bucket
module.exports = bucket;  // Export the bucket for use in other files
