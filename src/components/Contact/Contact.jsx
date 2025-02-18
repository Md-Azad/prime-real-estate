import Swal from "sweetalert2";

// import { useState } from "react";
const Contact = () => {
  //   const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");

  //   const [submitted, setSubmitted] = useState(false);
  //   const [error, setError] = useState("");

  function submit(e) {
    // This will prevent page refresh
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const message = form.message.value;
    if (email && message) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your message has been received",
        showConfirmButton: false,
        timer: 1500,
      });
      form.reset();
    }

    // replace this with your own unique endpoint URL
    // fetch("https://formcarry.com/s/XXXXXXX", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify({ email: email, message: message }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (res.code === 200) {
    //       setSubmitted(true);
    //     } else {
    //       setError(res.message);
    //     }
    //   })
    //   .catch((error) => setError(error));
  }

  //   if (error) {
  //     return <p>{error}</p>;
  //   }

  //   if (submitted) {
  //     return <p>We've received your message, thank you for contacting us!</p>;
  //   }

  return (
    <div className="flex w-11/12 md:11/12 mx-auto flex-col-reverse md:flex-row gap-4  bg-gray-100 p-2 my-4">
      <div className="flex-1 flex items-center justify-center border-2 border-gray-200 rounded-lg">
        <div className="text-center text-xl font-bold">
          <h1 className=" text-2xl underline mt-12">Our Main Office</h1>
          <p>123, bracklyn road, dusseldorf</p>
          <p>NRW, Germany</p>
          <p>Phone: +492546125487</p>
          <p>Email: support@bilang.com</p>
        </div>
      </div>
      <form onSubmit={submit} className="card-body border border-gray-200">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered "
            required
          />
        </div>
        <label className="label">
          <span className="label-text">Your Message</span>
        </label>
        <textarea
          className="textarea textarea-lg "
          name="message"
          placeholder="Write Here..."
        ></textarea>
        <div className="form-control mt-6">
          <button type="submit" className="btn hover:bg-green-600 bg-green-400">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
