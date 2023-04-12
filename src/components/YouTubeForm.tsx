import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

let renderCount = 0
type FormValues = {
    userName: string
    email: string
    channel: string
}

const YouTubeForm = () => {
    const form = useForm<FormValues>()
    const { register, control, handleSubmit, formState } = form
    const { errors } = formState

    const onSubmit = (data: FormValues) => {
        console.log('Form submitted', data)
    }



  return (
    <div>
    <h1>YouTube Form ({renderCount / 2})</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
       <div className="form-control">
       <label htmlFor='username'>Username</label>
        <input type='text' id='username' {...register('username', {
            required: 'Username is required',
        })}/>
        <p className="error">{errors.username?.message}</p>

       </div>

        <div className="form-control">
            <label htmlFor='email'>E-mail</label>
            <input type='email' id='email' {...register('email', {pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Invalid email address'
            }, required: 'Email is required',
            validate: {
            
            notAdmin: (fieldValue) => {
             return (
                fieldValue !== "admin@example.com" ||  "Enter a different email address"
             )},
             notBlacklisted: (fieldValue) => {
                return (
                    !fieldValue.endsWith('baddomain.com') || 'This domain is unsupported'
                )
             }
            },

            })} />
            <p className="error">{errors.email?.message}</p>
        </div>
        <div className="form-control">
            <label>Channel</label>
             <input type='text' id='channel' {...register('channel', {
                    required: 'Channel is required',
                })} />
            <p className="error">{errors.channel?.message}</p>     
        </div>
        <button>Submit</button>

      </form>
      <DevTool control={control}/>
    </div>
  )
}

export default YouTubeForm
