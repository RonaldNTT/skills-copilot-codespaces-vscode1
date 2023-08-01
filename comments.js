// Create web server
// Create comment
// Get all comments
// Get comment by id
// Update comment
// Delete comment
// Delete all comments
// Delete comments by post id
// Delete comments by user id

// Import express
var express = require("express");

// Import comment controller
var commentController = require("../controllers/commentController");

// Create router
var router = express.Router();

// Create routes
// Create comment
router.post("/create", commentController.createComment);

// Get all comments
router.get("/all", commentController.getAllComments);

// Get comment by id
router.get("/:id", commentController.getCommentById);

// Update comment
router.put("/update", commentController.updateComment);

// Delete comment
router.delete("/delete/:id", commentController.deleteComment);

// Delete all comments
router.delete("/delete", commentController.deleteAllComments);

// Delete comments by post id
router.delete("/delete/post/:postId", commentController.deleteCommentsByPostId);

// Delete comments by user id
router.delete("/delete/user/:userId", commentController.deleteCommentsByUserId);

// Export module
module.exports = router;