const express = require("express")
const router = express.Router()

const { getReviews , addReview } = require("../controllers/reviewController")
const authMiddleware = require("../middleware/authMiddleware")

router.get("/getReview/:productId",authMiddleware,getReviews)
router.post("/addReview",authMiddleware,addReview)

module.exports = router