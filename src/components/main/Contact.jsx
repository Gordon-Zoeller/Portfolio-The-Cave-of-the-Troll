import { handleForm } from "../../custom/handleForm";
export default function Contact() {
    return (
        <>
            <form action="" onSubmit={e => handleForm(e)}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" required/>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName"/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <textarea name="message" id="" cols="30" rows="10" placeholder="Write me a message..."></textarea>
                <button type="submit">Send</button>
            </form>
        </>
    );
};