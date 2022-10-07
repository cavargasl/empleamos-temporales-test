import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { PostPreview } from "src/models"
import { addPostPreview, modifyPostPreview, selectListPostPreview } from "src/redux/slices/post"
import { Buttons, InputText, InputTextArea } from "src/styled-components"
import { createPost, updatePartialPost } from "./services"
import { FooterForm, FormControl, FormLabel, LayoutForm } from "./styled-components"

interface Props {
  data?: PostPreview
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
  isCreate?: boolean
}
export default function FormPost({ data, setOpen, isCreate }: Props) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<PostPreview>({ mode: "onSubmit" })
  const dispatch = useDispatch()
  const listPostPreview = useSelector(selectListPostPreview)

  useEffect(() => {
    if (data) {
      setValue("userId", data.userId)
      setValue("title", data.title)
      setValue("body", data.body)
    }
  }, [data])

  async function onSubmit(dataPartial: PostPreview) {
    try {
      if (isCreate) return await createPost(dataPartial).then(res => dispatch(addPostPreview(listPostPreview.concat(res.data))))
      return await updatePartialPost({ id: dataPartial.id, data: dataPartial }).then(res => dispatch(modifyPostPreview({ ...data, ...res.data })))
    } catch (error) {
      console.error(error)
    } finally {
      if (setOpen) setOpen(false)
    }
  }

  return (
    <LayoutForm onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>ID del usuario</FormLabel>
        <InputText type={"number"} disabled={!!data?.userId} {...register("userId", { required: "Campo obligatorio" })} isError={!!errors.userId} />
      </FormControl>
      <FormControl>
        <FormLabel>Titulo</FormLabel>
        <InputText {...register("title", { required: "Campo obligatorio" })} isError={!!errors.title} />
      </FormControl>
      <FormControl>
        <FormLabel>Cuerpo</FormLabel>
        <InputTextArea {...register("body", { required: "Campo obligatorio" })} isError={!!errors.body} />
      </FormControl>
      <FooterForm>
        <Buttons type="submit" variant={isCreate ? "create" : "edit"}>{isCreate ? "Crear" : "Editar"}</Buttons>
      </FooterForm>
    </LayoutForm>
  )
}
