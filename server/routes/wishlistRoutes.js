const express = require("express")
const router = express.Router()

const { getWishList , addWishListItem , deleteWishListItem } = require("../controllers/wishlistController")
const authMiddleware = require("../middleware/authMiddleware")

router.get("/getWishList",authMiddleware,getWishList)
router.post("/addWishListItem",authMiddleware,addWishListItem)
router.delete("/deleteWishListItem/:productId",authMiddleware,deleteWishListItem)

module.exports = router