export type CommentDTO = {
  id: number
  contentId: number
  userId: string
  comments_text: string
  comments_rating: number
  comments_likes: number
  created_at: Date
  User: {
    nickname: string
  }
}

export type CommentsData = {
  contentsId: number
  userId: string
  comments_text: string
  comments_rating: number
  comments_likes: number
}