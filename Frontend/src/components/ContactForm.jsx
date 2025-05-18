import zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = zod
    .object({
        name: zod.string().min(1, { message: "Name is required" }),
        email: zod.string().email({ message: "Invalid email address" }),
        number: zod.string().min(1, { message: "Phone number is required" }),
        message: zod.string().min(1, { message: "Message is required" }),
    })
    .refine((data) => data.message.length <= 500, {
        message: "Message must be less than 500 characters",
        path: ["message"],
    });

const formOptions = {
    resolver: zodResolver(formSchema),
    defaultValues: {
        name: "",
        email: "",
        number: "",
        message: "",
    },
};

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(formOptions);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-[85%] m-auto my-4 space-y-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            {...register("name")}
                            placeholder="Your Name"
                            className="border-2 border-gray-300 rounded-md p-2 shadow-sm outline-none "
                        />
                        {errors.name && (
                            <span className="text-red-500 text-sm">{errors.name.message}</span>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="number">Phone Number</label>
                        <input
                            type="number"
                            id="number"
                            {...register("number")}
                            placeholder="Your Phone Number"
                            className="border-2 border-gray-300 rounded-md p-2 shadow-sm outline-none "
                        />
                        {errors.number && (
                            <span className="text-red-500 text-sm">{errors.number.message}</span>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            {...register("email")}
                            placeholder="Your E-mail"
                            className="border-2 border-gray-300 rounded-md p-2 shadow-sm outline-none "
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">{errors.email.message}</span>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message">Message</label>
                        <textarea
                            rows="5"
                            id="message"
                            {...register("message")}
                            placeholder="Your Message"
                            className="border-2 border-gray-300 rounded-md p-2 shadow-sm outline-none "
                        />
                        {errors.message && (
                            <span className="text-red-500 text-sm">{errors.message.message}</span>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="bg-gray-900 w-full text-white py-4 rounded-xl cursor-pointer hover:bg-gray-700 transition-all duration-300 ease-in-out text-xl"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
