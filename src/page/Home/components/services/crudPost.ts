import axios from "axios";
import { PostPreview } from "src/models";
import { getPostAdapter } from "../adapter/getPost.adapter";

export async function getListPost(): Promise<PostPreview[]> {
  return axios.get(`/posts`).then(res => getPostAdapter(res.data))
}

export async function deletePost(id: PostPreview["id"]) {
  return axios.delete(`/posts/${id}`)
}

interface UpdatePost {
  data: Omit<PostPreview, "id" | "userId">
  id: PostPreview["id"]
}
export async function updatePost({ id, data }: UpdatePost) {
  return axios.patch(`/posts/${id}`, { ...data })
}