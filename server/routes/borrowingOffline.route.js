var express = require("express");
var router = express.Router();
let borrowingOfflineController = require("../controllers/borrowingOffController");
const authenticate = require("../middlewares/authenticate");

router.post(
  "/borrowing-offline",
  authenticate.authenticate,
  borrowingOfflineController.createNewBorrowingOff
);
router.post(
  "/return-book",
  authenticate.authenticate,
  borrowingOfflineController.returnBookOffline
);
router.get(
  "/get-book-borrowed-offline",
  authenticate.authenticate,
  borrowingOfflineController.getAllBookBorrowed
);

router.put(
  "/borrowingOff/:borrowing_id",
  borrowingOfflineController.updateBorrowingOff
);
router.get(
  "/borrowOffCount/date",
  borrowingOfflineController.getBorrowOffCountByDateRange
);
/*router.get(
  "/infoBorrowOff/:borrowing_id",
  borrowingOfflineController.getInfoBorrowsOff
);*/
router.get(
  "/infoBorrowOff",
  borrowingOfflineController.getInfoBorrowsOff
);
router.post(
  "/createBorrowing-offline",
  borrowingOfflineController.newBorrowingOff
);

router.post(
    "/createBorrowing-offline",
    borrowingOfflineController.newBorrowingOff
  );

module.exports = router;
