import React from "react";


function Contact () {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    
    function encode(data) {
        return Object.keys(data)
        .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
        }

        function handleSubmit(e) {
            e.preventDefault();
            fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "test", name, email, message }),
            })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error));
        }
return (

<div className="contact-input-field">

<section id="contact" className="contact-input">

<form netlify name="test" onSubmit={handleSubmit} className="name-input-form">
<div className="contact-form">
<h2>Contact Me</h2>
<div className="name-input">
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" className="input-field-name" onChange={(e) => setName(e.target.value)}/>

</div>
<div className="email-input">
    <label htmlFor="email" className="email-input-field">Email</label>

    <input type="email" id="email" name="email" className="input-field-email" onChange={(e) => setEmail(e.target.value)}/>
</div>

<div className="message">
    <label htmlFor="message" className="message-input">Message</label>
    <textarea placeholder="Send a Message" className="message-input-field" onChange={(e) => setMessage(e.target.value)}/>
</div>
<button type="submit" className="submit-btn">Submit</button>


</div>


</form>
</section>

    </div>
)};

export default Contact;