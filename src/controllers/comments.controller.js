class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    this.addCommentFormListener()
  }

  addCommentFormListener() {
    var _this = this
    // With my 2 months since my class was over I needed to google here a bunch. We didn't go over jquery in my course but it seemed easier to do here than vanilla.
    this.$addCommentForm.each(function(
      index // Not sure why but if I make this an arrow function it breaks.
    ) {
      $(this).on('submit', e => {
        e.preventDefault()
        let $imageId = $(`#image-${index}`).data('id')
        let $comment = $(`#comment-description-${index}`).val()
        //prevent blank comments
        if ($comment !== '') {
          let newComment = new Comment($comment, $imageId)
          _this.render(newComment)
        } else {
          console.log('this is empty')
        }
      })
    })
  }

  render(comment) {
    $(`ul#comments-${comment.imageId}`).append(comment.newComment())
  }
}
