const functions = require('firebase-functions')
const admin = require('firebase-admin')

const athleteFunctions = require('./athlete')
const raceFunctions = require('./race')
const userFunctions = require('./user')

admin.initializeApp()
const fireDb = admin.firestore()

exports.postAthlete = functions.https.onRequest(async (req, resp) => {
  await athleteFunctions.postAthlete(req, resp, fireDb)
})

exports.getAthletes = functions.https.onRequest(async (req, resp) => {
  await athleteFunctions.getAthletes(req, resp, fireDb)
})

exports.getAthlete = functions.https.onRequest(async (req, resp) => {
  await athleteFunctions.getAthlete(req, resp, fireDb)
})

exports.delAthlete = functions.https.onRequest(async (req, resp) => {
  await athleteFunctions.delAthlete(req, resp, fireDb)
})

exports.putAthlete = functions.https.onRequest(async (req, resp) => {
  await athleteFunctions.putAthlete(req, resp, fireDb)
})

exports.postRace = functions.https.onRequest(async (req, resp) => {
  await raceFunctions.postRace(req, resp, fireDb)
})

exports.getRaces = functions.https.onRequest(async (req, resp) => {
  await raceFunctions.getRaces(req, resp, fireDb)
})

exports.getRace = functions.https.onRequest(async (req, resp) => {
  await raceFunctions.getRace(req, resp, fireDb)
})

exports.putRace = functions.https.onRequest(async (req, resp) => {
  await raceFunctions.putRace(req, resp, fireDb)
})

exports.delRace = functions.https.onRequest(async (req, resp) => {
  await raceFunctions.delRace(req, resp, fireDb)
})

exports.postUser = functions.https.onRequest(async (req, resp) => {
  await userFunctions.postUser(req, resp, fireDb)
})
