var admin = require("firebase-admin");
const getDatabase = require('firebase-admin/database');

// import service account file (helps to know the firebase project details)
const serviceAccount = require("./service-account.json");
var db=admin.database();

var registrationToken = "c3-nABOQQVSbAugIM655pk:APA91bG81O4Si-blWCK94lA7oXrLUMA66Wzl4xDu1r_N0zU35QcaTBNw-ANWT0xWzov5KTngkI7fXiHQSBKdxP31f5S2PLEozprICiE010x3ZPbt0kLxOJ7aZMSsC4-kRiHuaCT22qcq";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://stalker-bb55d-default-rtdb.firebaseio.com/"
});
  
   var options = {
    priority: "high",
    timeToLive: 60 * 60 *24
  };
  exports.sendNotification = async (title, body)  => {
    console.log("hi")
    const dataObj = { title : title, body : body }

    var payload = {
        notification: {
          title: title,
          body: body
        },
        data: { //you can send only notification or only data(or include both)
            dataObj
        }
      };

      await admin.messaging().sendToDevice(registrationToken, payload, options)
      .then(function(response) {
        console.log("Successfully sent message:", response);
      })
      .catch(function(error) {
        console.log("Error sending message:", error);
      });
  }

  exports.insertFirebaseDb = async (title, link, date)  => {
    var userRef=db.ref(`/`);
    
    const obj = {
        title : title,
        link : link,
        date : date
    } 

    await userRef.push(obj,(err)=>{
        if (err) console.log(err)
        console.log("inserted firabase db..")
    }) 
}
