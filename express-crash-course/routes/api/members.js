const express = require('express');
const router = express.Router();
const uuid = require('uuid');

const members = require('../../Members');

// Gets all members
router.get('/', (req, res) => res.json(members));

// Gets a member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === +req.params.id);
    if (found) {
        res.json(members.filter(member => member.id === +req.params.id));
    } else {
        res.status(400).json({ message: `No member found with the id of ${req.params.id}` });
    }
});

// Creates a member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ message: 'Please enter a name and email' });
    }

    members.push(newMember);
    res.json(members);
    res.redirect('/');
})

// Updates a member
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === +req.params.id);
    if (found) {
        const updMember = req.body;
        members.forEach(member => {
            if (member.id === +req.params.id) {
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;

                res.json({ message: 'Member updated!', member });
            }
        })
    } else {
        res.status(400).json({ message: `No member found with the id of ${req.params.id}` });
    }
});

// Deletes a member
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === +req.params.id);
    if (found) {
        res.json({ message: 'Member deleted!', members: members.filter(member => member.id !== +req.params.id) });
    } else {
        res.status(400).json({ message: `No member found with the id of ${req.params.id}` });
    }
});

module.exports = router;