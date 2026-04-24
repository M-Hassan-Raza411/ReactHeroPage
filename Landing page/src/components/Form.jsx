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
  console.log(emailjs);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (loading) return; 

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
      console.log(error);
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="formparent">
      <form className="form" onSubmit={sendEmail}>
        <label htmlFor="name" className="formlabel">Name</label>
        <input className="forminput" id="name" name="name" placeholder="enter your name" value={form.name} onChange={handleChange} />

        <label htmlFor="email" className="formlabel">Email</label>
        <input className="forminput" id="email" name="useremail" placeholder="enter your email" value={form.useremail} onChange={handleChange} />

        <label htmlFor="subject" className="formlabel">Subject</label>
        <input className="forminput" id="subject" name="subject" placeholder="enter subject" value={form.subject} onChange={handleChange} />

        <label htmlFor="message" className="formlabel">Message</label>
        <textarea className="formtextarea" id="message" name="message" placeholder="enter your message" value={form.message} onChange={handleChange} />

      <button className="submitbtn" type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
    </div>
  );
}
export default ContactForm;