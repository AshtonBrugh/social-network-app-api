const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controllers');


//set up GET all and POST at api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

router
    .route('/:id/reactions')
    .post(addReaction)

router
    .route('/:id/reactions/:reactionId')
    .delete(deleteReaction)

module.exports = router;