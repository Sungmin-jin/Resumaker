import React, { useState } from "react";
import api from "../../util/api";
interface Form {
  text: string;
  subject: string;
  email: string | undefined;
}

interface Props {
  email: string | undefined;
}

const Contact = ({ email }: Props): JSX.Element => {
  const [form, setForm] = useState<Form>({
    text: "",
    subject: "",
    email: email,
  });

  const { text, subject } = form;

  const onChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sendEmail = async (): Promise<void> => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        const res = await api.post("/mail", form, config);
        setForm({ ...form, text: "", subject: "" });
        alert("Successfully sent");
      } catch (error) {
        console.log(error);
        alert("Error occured");
      }
    };
    sendEmail();
  };
  return (
    <section className="template1-contact" id="contact">
      <h1 className="template1-contact-header">contact</h1>
      <form className="template1-contact-form" onSubmit={onSubmit}>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={subject}
          onChange={onChange}
          className="template1-contact-form-input"
        />
        <textarea
          className="template1-contact-form-input text-area"
          name="text"
          rows={8}
          placeholder="Your Message"
          value={text}
          onChange={onChange}
        />
        <button className="template1-contact-form-button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
