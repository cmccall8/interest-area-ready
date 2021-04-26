const express = require('express')
const cors = require('cors')
const admin = require('firebase-admin');
var bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))
app.use(express.json())

// var jsonParser = bodyParser.json()
var serviceAccount = require("./interest-area-ready.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://interest-area-ready-default-rtdb.firebaseio.com"
});

const db = admin.firestore();
const owlsRef = db.collection('classrooms').doc('owls');
const butterflyRef = db.collection('classrooms').doc('butterflies');
const beesRef = db.collection('classrooms').doc('bees');

// app.get("/classrooms/owls", (req,res) => {
// 	let owls = []
// 	owlsRef.get().then(snapshot => {
// 		snapshot.forEach((doc) => {
//   		console.log(doc.id, '=>', doc.data());
//   		owls.push(doc.data())
// 	});
// 		res.send(owls)
// }).catch(function (err) {
//       console.log(err);
//     })

// })

	
// app.get("/classrooms/owls", (req,res) => {
// 	owlsRef.get().then(doc => {
//     console.log("DOC DATA:", doc.data());
//     let owls = doc.data();
//   })
// 	console.log("OWLS", owls)
// 	res.send(owls)
// 	// .then((data) => {
//  //  	console.log(data)
//  //  	res.json(data)
//  //  })

// });

app.get("/classrooms/owls", async(req,res) => {
	const doc = await owlsRef.get();
	if (!doc.exists) {
	  console.log('No such document!');
	} else {
	  console.log('Document data:', doc.data());
	}
	res.json(doc.data())
	// res.sendStatus(200)
})

app.get("/classrooms/butterflies", async(req,res) => {
	const doc = await butterflyRef.get();
	if (!doc.exists) {
	  console.log('No such document!');
	} else {
	  console.log('Document data:', doc.data());
	}
	res.json(doc.data())
	// res.sendStatus(200)
})

app.get("/classrooms/bees", async(req,res) => {
	const doc = await beesRef.get();
	if (!doc.exists) {
	  console.log('No such document!');
	} else {
	  console.log('Document data:', doc.data());
	}
	res.json(doc.data())
	// res.sendStatus(200)
})

app.put("/classrooms/owls", (req,res) => {
	console.log("SERVER SIDE:", req.body)
	butterflyRef.set({
		scale_total: req.body.scale_total,
		finemtr_total: req.body.finemtr_total,
		finemtr_progress: req.body.finemtr_progress,
		finemtr_setup: req.body.finemtr_setup,
		finemtr_interaction: req.body.finemtr_interaction,
		finemtr_excel: req.body.finemtr_excel,
		art_total: req.body.art_total,
		art_progress: req.body.art_progress,
		art_setup: req.body.art_setup,
		art_interaction: req.body.art_interaction,
		art_excel: req.body.art_excel,
		music_total: req.body.music_total,
		music_progress: req.body.music_progress,
		music_setup: req.body.music_setup,
		music_interaction: req.body.music_interaction,
		music_excel: req.body.music_excel,
		blocks_total: req.body.blocks_total,
		blocks_progress: req.body.blocks_progress,
		blocks_setup: req.body.blocks_setup,
		blocks_interaction: req.body.blocks_interaction,
		blocks_excel: req.body.blocks_excel,
		drama_total: req.body.drama_total,
		drama_progress: req.body.drama_progress,
		drama_setup: req.body.drama_setup,
		drama_interaction: req.body.drama_interaction,
		drama_excel: req.body.drama_excel,
		math_total: req.body.math_total,
		math_progress: req.body.math_progress,
		math_setup: req.body.math_setup,
		math_interaction: req.body.math_interaction,
		math_excel: req.body.math_excel,
		grossmtr_total: req.body.grossmtr_total,
		grossmtr_progress: req.body.grossmtr_progress,
		grossmtr_setup: req.body.grossmtr_setup,
		grossmtr_excel: req.body.grossmtr_excel	
	}, { merge: true }).then((data) => {
		res.json(data)
	})

});

app.put("/classrooms/butterflies", (req,res) => {
	console.log("SERVER SIDE:", req.body)
	butterflyRef.set({
		scale_total: req.body.scale_total,
		finemtr_total: req.body.finemtr_total,
		finemtr_progress: req.body.finemtr_progress,
		finemtr_setup: req.body.finemtr_setup,
		finemtr_interaction: req.body.finemtr_interaction,
		finemtr_excel: req.body.finemtr_excel,
		art_total: req.body.art_total,
		art_progress: req.body.art_progress,
		art_setup: req.body.art_setup,
		art_interaction: req.body.art_interaction,
		art_excel: req.body.art_excel,
		music_total: req.body.music_total,
		music_progress: req.body.music_progress,
		music_setup: req.body.music_setup,
		music_interaction: req.body.music_interaction,
		music_excel: req.body.music_excel,
		blocks_total: req.body.blocks_total,
		blocks_progress: req.body.blocks_progress,
		blocks_setup: req.body.blocks_setup,
		blocks_interaction: req.body.blocks_interaction,
		blocks_excel: req.body.blocks_excel,
		drama_total: req.body.drama_total,
		drama_progress: req.body.drama_progress,
		drama_setup: req.body.drama_setup,
		drama_interaction: req.body.drama_interaction,
		drama_excel: req.body.drama_excel,
		math_total: req.body.math_total,
		math_progress: req.body.math_progress,
		math_setup: req.body.math_setup,
		math_interaction: req.body.math_interaction,
		math_excel: req.body.math_excel,
		grossmtr_total: req.body.grossmtr_total,
		grossmtr_progress: req.body.grossmtr_progress,
		grossmtr_setup: req.body.grossmtr_setup,
		grossmtr_excel: req.body.grossmtr_excel	
	}, { merge: true }).then((data) => {
		res.json(data)
	})

});

app.put("/classrooms/bees", (req,res) => {
	console.log("SERVER SIDE:", req.body)
	butterflyRef.set({
		scale_total: req.body.scale_total,
		finemtr_total: req.body.finemtr_total,
		finemtr_progress: req.body.finemtr_progress,
		finemtr_setup: req.body.finemtr_setup,
		finemtr_interaction: req.body.finemtr_interaction,
		finemtr_excel: req.body.finemtr_excel,
		art_total: req.body.art_total,
		art_progress: req.body.art_progress,
		art_setup: req.body.art_setup,
		art_interaction: req.body.art_interaction,
		art_excel: req.body.art_excel,
		music_total: req.body.music_total,
		music_progress: req.body.music_progress,
		music_setup: req.body.music_setup,
		music_interaction: req.body.music_interaction,
		music_excel: req.body.music_excel,
		blocks_total: req.body.blocks_total,
		blocks_progress: req.body.blocks_progress,
		blocks_setup: req.body.blocks_setup,
		blocks_interaction: req.body.blocks_interaction,
		blocks_excel: req.body.blocks_excel,
		drama_total: req.body.drama_total,
		drama_progress: req.body.drama_progress,
		drama_setup: req.body.drama_setup,
		drama_interaction: req.body.drama_interaction,
		drama_excel: req.body.drama_excel,
		math_total: req.body.math_total,
		math_progress: req.body.math_progress,
		math_setup: req.body.math_setup,
		math_interaction: req.body.math_interaction,
		math_excel: req.body.math_excel,
		grossmtr_total: req.body.grossmtr_total,
		grossmtr_progress: req.body.grossmtr_progress,
		grossmtr_setup: req.body.grossmtr_setup,
		grossmtr_excel: req.body.grossmtr_excel	
	}, { merge: true }).then((data) => {
		res.json(data)
	})

});

app.listen(port, () => {
	console.log(`app listening at ${port}`)
})