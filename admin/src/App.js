// import logo from './logo.svg';
import {  useEffect, useState } from 'react';
import './App.css';
// import { Button } from 'react-bootstrap';
import { requestFCMToken  } from './utils/firebase_utils';
import {onMessageListener} from './utils/firebase_utils';
import {ToastContainer} from 'react-toastify';
import { toast } from 'react-toastify';

function App() {

  const [fcmToken, setFcmToken] = useState(null);
  

  useEffect(()=>{
    const fetchFCMToken = async ()=>{
      try{
        const token = await  requestFCMToken();
        setFcmToken(token);
        console.log(token);

      }catch(err){
          console.error("Error getting fcm token:", err);
      }
    }
    fetchFCMToken();
  })

  onMessageListener().then(payload =>{
    toast(
      <div>
        <strong>{payload.notification.title}</strong>
        <div> {payload.notification.body}</div>
      </div>,
      {position:"top-right"}
    );
    console.log("Receieved foreground message", payload);

  })
  .catch(err => console.error("error", err));

  return (
    <>
    <ToastContainer/>
    <div className='container firebase-form p-4'>
      <div className='row'>
        <div className='col-md-12 mb-4'>
          <div className='alert alert-info'>
            <strong>FCM Token</strong> {fcmToken}
          </div>
        </div>
      </div>
      <div className='heading p-5'>
        <h1>Welcome Push Notification</h1>
      </div>
    </div>
    </>
  );
}

export default App;
