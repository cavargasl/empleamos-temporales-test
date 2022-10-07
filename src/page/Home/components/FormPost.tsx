import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { PostPreview } from "src/models"
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

  useEffect(() => {
    if (data) {
      setValue("userId", data.userId)
      setValue("title", data.title)
      setValue("body", data.body)
    }
  }, [data])

  async function onSubmit(data: PostPreview) {
    try {
      if (isCreate) return await createPost(data)
      return await updatePartialPost({ id: data.id, data })
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
        <InputText type={"number"} disabled={!!data} {...register("userId", { required: "Campo obligatorio" })} isError={!!errors.userId} />
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
