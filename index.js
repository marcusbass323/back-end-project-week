const express = require('express');
const knex = require('knex');
const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);

const server = express();
const PORT = 5000;

server.use(express.json());


//GET ENDPOINT
server.get('/', (req, res) => {
    res.send('Welcome, the server is running');
})

server.get('/notes', (req, res) => {
    db('notes').then(rows => {
        res.json(rows);
    }).catch(err => {
        res.status(500).json({err: "Can't get notes"})
    })
})

//GET BY ID ENDPOINTS
server.get('/notes/:id', (req, res) => {
    const { id } = req.params;
    db('notes').where('id', id)
        .then(rows => {
            res.json(rows);
        }).catch(err => {
        res.status(500).json({err: 'Failed to find note'})
    })
})

//POST ENDPOINTS
server.post('/create', (req, res) => {
    const note = req.body;
    console.log(req.body)
    db('notes').insert(note)
        .then(ids => {
            res.status(201).json(ids);
        }).catch(err => {
            res.status(500).json({err: 'Failed to create note'})
    });
});

server.put('/notes/:id', (req, res) => {
    const { id } = req.params;
    const note = req.body;
    console.log(req.body)
    db('notes').where('id', id).update(note)
        .then(rowCount => {
        res.json(rowCount)
        }).catch(err => {
        res.status(500).json({err: 'Failed to update note'})
    })
})

// DELETE ENDPOINT
server.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    const note = req.body;
    db('notes').where('id', id).delete(note)
        .then(rowCount => {
            res.json(notes);
        }).catch(err => {
        res.status(201).json({err: 'Failed to delete note'})
    })
})



server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})