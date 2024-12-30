const {initializeApp} = require("firebase/app");
const {getMessaging} = require("firebase/messaging");
const {getToken} = require("firebase/messaging");
const {onMessage} = require("firebase/messaging");


const firebaseConfig = {
    apiKey: "AIzaSyDXPWXDzhUIizJXbJqmD1unfrlWZzEnmSs",
    authDomain: "push-notification02-d217e.firebaseapp.com",
    projectId: "push-notification02-d217e",
    storageBucket: "push-notification02-d217e.firebasestorage.app",
    messagingSenderId: "670515617751",
    appId: "1:670515617751:web:80aa94512ae2a163beb592",
    measurementId: "G-KE6LQSJFQG"
  };

  const vapidkey = "BHt4kiYLD9_N7XuuhnEvqEqNnWBFx9H-GdfDudjlku5BJU_69Od-aaq9PdtIZkSUMJ4UET4jw_DGvD4TUbb09fA";

  const app = initializeApp(firebaseConfig);

  const messaging = getMessaging(app);

  export const requestFCMToken = async () =>{
        return Notification.requestPermission()
        .then((permission)=>{
            if(permission === "granted"){
                return getToken(messaging,{vapidkey})
            }
            else{
                throw new Error("Notification not graynted");
            }
        })
        .catch((err)=>{
            console.error("Error getting FCM Token: ", err)
            throw err;
        })
  }

  export const onMessageListener = () =>{
   return new Promise((resolve)=>{
        onMessage(messaging,(payload)=>{
            resolve(payload);
        })    
    })
  }