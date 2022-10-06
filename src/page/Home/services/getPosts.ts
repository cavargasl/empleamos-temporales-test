import axios from "axios";
import { PostPreview } from "src/models";
import { getPostAdapter } from "../adapter/getPost.adapter";

export default async function getListPost(): Promise<PostPreview[]> {
  return axios.get(`/posts`).then(res => getPostAdapter(res.data))
}