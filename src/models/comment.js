const allComments = []
class Comment {
  constructor(comment, imageId) {
    this.imageId = imageId
    this.comment = comment
    // console.log(this)
    allComments.push(this)
    this.findImage(imageId)
  }

  findImage(imageId) {
    let picture = Image.all.find(img => {
      if (img) {
        return img.id === imageId
      } else {
        return null
      }
    })
    picture.comments.push(this)
    return picture
  }

  newComment() {
    return `<li>${this.comment}</li>`
  }

  static all() {
    return allComments
  }
}
