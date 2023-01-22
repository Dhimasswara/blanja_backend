const express = require('express');
const router  = express.Router();
const sellerController = require('../controller/seller');
const {validateSeller} = require('../middleware/common');
const {protect} = require('../middleware/Auth');


router.get("/", sellerController.getAllSeller);
router.get("/:id", sellerController.getDetailSeller);
router.put("/:id", protect, validateSeller, sellerController.updateSeller);
router.delete("/:id", protect, sellerController.deleteSeller);

// Authenticated

router.post('/serv/register', validateSeller, sellerController.registerSeller);
router.post('/serv/login', sellerController.loginSeller);
router.post('/serv/refreshtoken', sellerController.refreshToken);
router.get('/serv/profile', protect, sellerController.profileSeller);


module.exports = router;