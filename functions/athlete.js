const cors = require('cors')({
  origin: true
})

exports.postAthlete = async (req, resp, db) => {
  await cors(req, resp, () => {
    db.collection('athletes')
      .add(req.body)
      .then((docRef) => {
        const athlete = req.body
        athlete.id = docRef.id
        resp.header('AccessAccess-Control-Allow-Origin', '*')
        resp.status(200).json(athlete)
      })
      .catch((err) => {
        if (err) {
          resp.status(400).json({
            message: 'Not working postAthlete api call',
            error: err
          })
        }
      })
  })
}

exports.getAthletes = async (req, resp, db) => {
  await cors(req, resp, () => {
    const athletes = []
    db.collection('athletes')
      .orderBy('lastName')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const athlete = doc.data()
          athlete.id = doc.id
          athletes.push(athlete)
        })
        resp.header('AccessAccess-Control-Allow-Origin', '*')
        resp.status(200).json(athletes)
      })
      .catch((err) => {
        if (err) {
          resp.status(400).json({ message: 'Not working getAthletes api call' })
        }
      })
  })
}

exports.getAthlete = async (req, resp, db) => {
  await cors(req, resp, () => {
    db.collection('athletes')
      .doc(req.query.id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const athlete = doc.data()
          athlete.id = doc.id
          resp.header('AccessAccess-Control-Allow-Origin', '*')
          resp.status(200).json(athlete)
        }
      })
      .catch((err) => {
        if (err) {
          resp.status(400).json({ message: 'Not working getAthlete api call' })
        }
      })
  })
}

exports.delAthlete = async (req, resp, db) => {
  await cors(req, resp, () => {
    db.collection('athletes')
      .doc(req.query.id)
      .delete()
      .then(() => {
        resp.header('AccessAccess-Control-Allow-Origin', '*')
        resp
          .status(200)
          .json(`Athlete with ${req.query.id} Id has been deleted`)
      })
      .catch((err) => {
        if (err) {
          resp
            .status(400)
            .json({ message: 'Not working deleteAthlete api call' })
        }
      })
  })
}

exports.putAthlete = async (req, resp, db) => {
  await cors(req, resp, () => {
    db.collection('athletes')
      .doc(req.query.id)
      .update(req.body)
      .then(() => {
        const athlete = req.body
        athlete.id = req.query.id
        resp.header('AccessAccess-Control-Allow-Origin', '*')
        resp.status(200).json(athlete)
      })
      .catch((err) => {
        if (err) {
          resp
            .status(400)
            .json({ message: 'Not working updateAthlete api call' })
        }
      })
  })
}
