// Initialize

$(function() {
  // on document ready
  imagesController = new ImagesController()
  imagesController.init()
  commentsController = new CommentsController()
  commentsController.init()
})

// class CommentsController {
//   constructor() {
//     this.$addCommentForm = $('.add-comment')
//   }

//   init() {
//     this.addCommentFormListener()
//   }

//   addCommentFormListener() {
//     var _this = this
//     // With my 2 months since my class was over I needed to google here a bunch. We didn't go over jquery in my course but it was easier to do here than vanilla.
//     this.$addCommentForm.each(function(index) {
//       $(this).on('submit', function(e) {
//         e.preventDefault()
//         let $imageId = $(`#image-${index}`).data('id')
//         let $comment = $(`#comment-description-${index}`).val()
//         if ($comment !== '') {
//           let newComment = new Comment($comment, $imageId)
//           _this.render(newComment)
//         }
//       })
//     })
//   }

//   render(comment) {
//     $(`ul#comments-${comment.imageId}`).append(comment.newComment())
//   }
// }

// const allComments = []
// class Comment {
//   constructor(comment, imageId) {
//     this.imageId = imageId
//     this.comment = comment
//     // console.log(this)
//     allComments.push(this)
//     this.findImage(imageId)
//   }

//   findImage(imageId) {
//     let picture = Image.all.find(img => {
//       if (img) {
//         return img.id === imageId
//       } else {
//         return null
//       }
//     })
//     picture.comments.push(this)
//     return picture
//   }

//   newComment() {
//     return `<li>${this.comment}</li>`
//   }

//   static all() {
//     return allComments
//   }
// }
