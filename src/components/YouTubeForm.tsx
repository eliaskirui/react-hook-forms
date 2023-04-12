import { useForm } from "react-hook-form"

const YouTubeForm = () => {
    const form = useForm()
    const { register } = form
  return (
    <div>
      <form>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' {...register('username')}/>

        <label htmlFor='email'>E-mail</label>
        <input type='email' id='email' {...register('email')} />

        <label>Channel</label>
        <input type='text' id='channel' {...register('channel')} />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default YouTubeForm
