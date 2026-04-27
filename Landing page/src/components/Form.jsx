import { useState } from "react";
import emailjs from "@emailjs/browser"; 

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    useremail: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  

  const validate = () => {
    const err = {};

    if (!form.name.trim()) {
      err.name = "Name is required";
    }

    if (!form.useremail.trim()) {
      err.useremail = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.useremail)) {
      err.useremail = "Invalid email format";
    }

    if (!form.subject.trim()) {
      err.subject = "Subject is required";
    }

    if (!form.message.trim()) {
      err.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      err.message = "Message must be at least 10 characters";
    }

    return err;
  };



  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  

  const sendEmail = async (e) => {
    e.preventDefault();

    const err = validate();
    setErrors(err);

    if (Object.keys(err).length > 0) return;

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

    
      setForm({
        name: "",
        useremail: "",
        subject: "",
        message: ""
      });

    } catch (error) {
        console.log("Submit error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="formparent">
      <form className="form" onSubmit={sendEmail}>
        <label htmlFor="name" className="formlabel">Name</label>
        <input className="forminput" id="name" name="name" placeholder="enter your name" value={form.name} onChange={handleChange} />
            {errors.name && <p className="error">{errors.name}</p>}

        <label htmlFor="email" className="formlabel">Email</label>
        <input className="forminput" id="email" name="useremail" placeholder="enter your email" value={form.useremail} onChange={handleChange} />
            {errors.useremail && <p className="error">{errors.useremail}</p>}

        <label htmlFor="subject" className="formlabel">Subject</label>
        <input className="forminput" id="subject" name="subject" placeholder="enter subject" value={form.subject} onChange={handleChange} />
            {errors.subject && <p className="error">{errors.subject}</p>}

        <label htmlFor="message" className="formlabel">Message</label>
        <textarea className="formtextarea" id="message" name="message" placeholder="enter your message" value={form.message} onChange={handleChange} />
            {errors.message && <p className="error">{errors.message}</p>} 
      <button className="submitbtn" type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
    </div>
  );
}
export default ContactForm;