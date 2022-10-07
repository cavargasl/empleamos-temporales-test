export interface ApiPostPreview {
  userId: number
  id: number
  title: string
  body: string
}

export interface PostPreview {
  userId: number
  id: number
  title: string
  body: string
}

export const ListPostPreviewEmptyState: PostPreview[] = []