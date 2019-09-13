const cors = require('cors')({
  origin: true
})

exports.postRace = async (req, resp, db) => {
  await cors(req, resp, () => {
    db.collection('races')
      .add(req.body)
      .then((docRef) => {
        const race = req.body
        race.id = docRef.id
        resp.header('AccessAccess-Control-Allow-Origin', '*')
        resp.status(200).json(race)
      })
      .catch((err) => {
        if (err) {
          resp.status(400).json({
            message: 'Not working postRace api call',
            error: err
          })
        }
      })
  })
}

exports.getRaces = async (req, resp, db) => {
  await cors(req, resp, () => {
    const races = []
    db.collection('races')
      .orderBy('name')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const race = doc.data()
          race.id = doc.id
          races.push(race)
        })
        resp.header('AccessAccess-Control-Allow-Origin', '*')
        resp.status(200).json(races)
      })
      .catch((err) => {
        if (err) {
          resp.status(400).json({ message: 'Not working getRaces api call' })
        }
      })
  })
}

exports.getRace = async (req, resp, db) => {
  await cors(req, resp, () => {
    db.collection('races')
      .doc(req.query.id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const race = doc.data()
          race.id = doc.id
          resp.header('AccessAccess-Control-Allow-Origin', '*')
          resp.status(200).json(race)
        }
      })
      .catch((err) => {
        if (err) {
          resp.status(400).json({ message: 'Not working getRace api call' })
        }
      })
  })
}

exports.delRace = async (req, resp, db) => {
  await cors(req, resp, () => {
    db.collection('races')
      .doc(req.query.id)
      .delete()
      .then(() => {
        resp.header('AccessAccess-Control-Allow-Origin', '*')
        resp.status(200).json(`Race with ${req.query.id} Id has been deleted`)
      })
      .catch((err) => {
        if (err) {
          resp.status(400).json({ message: 'Not working delRace api call' })
        }
      })
  })
}

exports.putRace = async (req, resp, db) => {
  await cors(req, resp, () => {
    db.collection('races')
      .doc(req.query.id)
      .update(req.body)
      .then(() => {
        const race = req.body
        race.id = req.query.id
        resp.header('AccessAccess-Control-Allow-Origin', '*')
        resp.status(200).json(race)
      })
      .catch((err) => {
        if (err) {
          resp.status(400).json({ message: 'Not working putRace api call' })
        }
      })
  })
}
