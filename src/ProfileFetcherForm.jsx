import { useForm } from "react-hook-form"

export default function ProfileFetcherForm({searchData}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => searchData(data.name);

 
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="name" defaultValue="" {...register("name", { required: true })} />

      {errors.name && <span>Name is required</span>}

      <input type="submit" />
    </form>
  )
}