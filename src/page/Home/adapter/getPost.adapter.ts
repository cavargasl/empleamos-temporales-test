import { ApiPostPreview, PostPreview } from "src/models";

export const getPostAdapter = (data: ApiPostPreview[]): PostPreview[] => {
  return data.map(item => (
    {
      userId: item.userId,
      id: item.id,
      body: item.body,
      title: item.title
    }
  ))
};