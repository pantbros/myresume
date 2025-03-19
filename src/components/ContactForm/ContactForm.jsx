import React, { useState } from "react";

function ContactForm({ inputFields, validate }) {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false); // ✅ Loading state

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

        if (validate && typeof validate === "function") {
            const error = validate(name, value);
            setErrors({ ...errors, [name]: error });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let newErrors = {};
        
        inputFields.forEach(({ name }) => {
            const error = validate ? validate(name, formData[name] || "") : "";
            if (error) newErrors[name] = error;
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true); // ✅ Disable button & show overlay

            try {
                const response = await fetch("https://your-vercel-app.vercel.app/api/send-email", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    alert("Email sent successfully!");
                    setFormData({}); // ✅ Form reset
                } else {
                    alert("Failed to send email.");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Something went wrong!");
            } finally {
                setIsSubmitting(false); // ✅ Re-enable button
            }
        }
    };

    return (
        <div className="relative">
            {/* Overlay */}
            {isSubmitting && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                    <p className="text-[#ffffff] text-lg">Please wait...</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="p-10 border rounded-[25px]">
                <div className="grid grid-cols-2 gap-4">
                    {inputFields.map(({ name, type, placeholder, icon }, index) => (
                        name === "message" ? null : (
                            <div key={index} className="flex items-center mb-4 relative">
                                {icon && <span className="me-2 absolute left-2">{icon}</span>}
                                <input
                                    type={type || "text"}
                                    name={name}
                                    placeholder={placeholder}
                                    value={formData[name] || ""}
                                    onChange={handleChange}
                                    className="border rounded p-2 w-full ps-10 bg-transparent focus:outline-none"
                                    disabled={isSubmitting} // ✅ Disable when submitting
                                />
                                {errors[name] && <span className="text-red-500 text-sm ms-2 absolute left-0 bottom-[-1.5rem] capitalize">{errors[name]}</span>}
                            </div>
                        )
                    ))}
                </div>
                <div className="mt-4">
                    {inputFields.map(({ name, placeholder, icon }) => (
                        name === "message" ? (
                            <div key={name} className="flex items-center w-full mb-4 relative">
                                {icon && <span className="me-2 absolute left-2 top-3">{icon}</span>}
                                <textarea
                                    name={name}
                                    placeholder={placeholder}
                                    value={formData[name] || ""}
                                    onChange={handleChange}
                                    className="border rounded p-2 w-full ps-10 bg-transparent focus:outline-none"
                                    disabled={isSubmitting} // ✅ Disable when submitting
                                />
                                {errors[name] && <span className="text-red-500 text-sm ms-2 absolute bottom-[-1.5rem] capitalize">{errors[name]}</span>}
                            </div>
                        ) : null
                    ))}
                </div>
                <button
                    type="submit"
                    className={`bg-primary-theme-clr text-[#ffffff] w-max border-2 border-primary-theme-clr py-3 px-6 rounded-full capitalize flex items-center mt-10 transition duration-200 ${
                        isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-white hover:text-black"
                    }`}
                    disabled={isSubmitting}  // ✅ Button disabled during submission
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
