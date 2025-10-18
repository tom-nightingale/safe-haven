import React, { useState } from "react";
import type { Maybe } from "@/gql/sanity/codegen";

type Props = {
  formId: string | Maybe<string>;
};

type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

const Form = ({ formId }: Props) => {
  const handleChange =
    (setter: Setter<string>) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setter(e.target.value);
    };

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isFormValid = name && phoneNumber && email && message; // truthy if all filled

  return (
    <form
      className="mt-4 flex flex-col items-center gap-5"
      action={`https://formspree.io/f/${formId}`}
      method="POST"
    >
      <input
        name="Name"
        placeholder="Name *"
        type="text"
        required
        value={name}
        onChange={handleChange(setName)}
      />
      <input
        name="Phone Number"
        placeholder="Phone number *"
        type="number"
        required
        value={phoneNumber}
        onChange={handleChange(setPhoneNumber)}
      />
      <input
        name="email"
        placeholder="Email address *"
        type="email"
        required
        value={email}
        onChange={handleChange(setEmail)}
      />
      <textarea
        name="Message"
        placeholder="Your message *"
        required
        value={message}
        onChange={handleChange(setMessage)}
      />
      <input type="text" name="_gotcha" className="hidden" />
      <input
        type="submit"
        value="Submit Enquiry"
        className="button button-primary button-blue mx-auto disabled:pointer-events-none disabled:!opacity-50"
        disabled={!isFormValid}
      />
    </form>
  );
};

export default Form;
