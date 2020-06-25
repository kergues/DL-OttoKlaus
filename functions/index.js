const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)
const express = require('express')
const cors = require('cors')
const router = express();
router.use(cors({origin: true}));

router.get("/toy/:id", async (req, res) => {
    const product = await admin
        .firestore()
        .collection("toys")
        .doc(req.params.id)
        .get().then((doc) => {
            if(doc.exists) {
                console.log("Document data:", doc.data());
                return { id: doc.id, data: doc.data() }
            } else {
                console.log("No such document!");
                return {}
            }
        });
    res.send(product);
});
router.get("/toys", async (req, res) => {
    const products = await admin
        .firestore()
        .collection("toys")
        .get();
    var lista = [];
    products.docs.forEach(doc => {
        lista.push({ id: doc.id, data: doc.data()});
    });
    res.send(lista);
});
router.post("/toy", async (req, res) => {
    const toy = await admin
        .firestore()
        .collection("toys")
        .add(req.body)
        .then(docRef => {
            return docRef.id
        });
    res.send(toy);
});
router.put("/toy/:id", async (req, res) => {
    const product = await admin
        .firestore()
        .collection("toys")
        .doc(req.params.id)
        .update(req.body);
    res.send(product);
});
router.delete("/toy/:id", async (req, res) => {
    const product = await admin
        .firestore()
        .collection("toys")
        .doc(req.params.id)
        .delete()
    res.send(product);
});
exports.toys = functions.https.onRequest(router);



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
