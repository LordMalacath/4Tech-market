import { useForm } from 'react-hook-form';

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" placeholder="email" {...register("email", { min: 5 })} />
            <input type="undefined" placeholder="password" {...register} />

            <button type="submit" >Login</button>
        </form>
    )
};