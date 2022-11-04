import { addItemIntoStock } from 'api/firebase/addItemIntoStock';
import { useForm } from 'react-hook-form';
import './addItem.scss'

export default function AddItem() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onBlur' });
    const onSubmit = data => {
        addItemIntoStock(data);
        reset()
    };

    return (
        <div className='addItem' style={{ flex: 5 }}>
            <div className='container'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder="name"
                        type="text"
                        {...register("name", {
                            required: "This field is required",
                            minLength: {
                                value: 2,
                                message: "Name is too short.",
                            }
                        })}
                    />
                    {errors?.name && <p>{errors.name.message}</p>}

                    <textarea
                        placeholder="description"
                        style={{ resize: "none" }}
                        {...register("description", {
                            required: true,
                            minLength: 2,
                            message: "Name is too short.",
                        })}
                    />

                    <input
                        placeholder="price"
                        type="number"
                        {...register("price", {
                            required: true,
                            minLength: 2,
                            message: "Name is too short.",
                        })}
                    />

                    <input
                        placeholder="stock"
                        type="number"
                        {...register("stock", {
                            required: true,
                            minLength: 1,
                            message: "Name is too short.",
                        })}
                    />

                    <select
                        {...register("category", {
                            required: true,
                        })}
                    >
                        <option value="Smartphones">Smartphone</option>
                        <option value="Laptops">Laptop</option>
                        <option value="Tablets">Tablet</option>
                        <option value="Headphones">Headphones</option>
                    </select>

                    <input
                        type="file"
                        multiple
                        accept="image/png, image/jpeg"
                        placeholder="img"
                        {...register("image", {
                            required: true,
                        })}
                    />

                    <button type="submit" >Add</button>
                </form>
            </div>
        </div>
    )
};