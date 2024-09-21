import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
// import { sendEmail } from "./api/email";
import toast from "react-hot-toast";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		senderEmail: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data, error } = await sendEmail(formData);
			if (error) {
				toast.error(error);
				return;
			}
			toast.success("Email sent successfully!");
			setFormData({ senderEmail: "", message: "" });
		} catch (error) {
			console.error("An error occurred:", error);
			toast.error("Failed to send email. Please try again later.");
		}
	};

	return (
		<div className="w-full md:w-2/4 mx-auto">
			<form
				onSubmit={handleSubmit}
				className="mt-10 flex flex-col dark:text-black">
				<input
					className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
					name="senderEmail"
					type="email"
					required
					maxLength={500}
					value={formData.senderEmail}
					onChange={handleChange}
					placeholder="Your email"
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
					name="message"
					placeholder="Your message"
					required
					maxLength={5000}
					value={formData.message}
					onChange={handleChange}
				/>
				<button
					type="submit"
					className="mx-auto group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65">
					Submit{" "}
					<FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
