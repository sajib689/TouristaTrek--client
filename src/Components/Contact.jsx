import Lottie from "lottie-react";
import contact from '../../public/contact.json'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Swal from "sweetalert2";
AOS.init();
const Contact = () => {
  const handleContact = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value 
    const email = form.email.value
    const message = form.message.value
    const contact = {name, email, message}
    fetch('http://localhost:3000/contact',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(contact)
    })
    .then(res => res.json())
    .then(data => {
      if(data) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Thanks for your feedback",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
      <div className="flex flex-col justify-between">
        <div data-aos="fade-down-right" className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let's talk!
          </h2>
          <div className="dark:text-gray-600">
            Vivamus in nisl metus? Phasellus.
          </div>
        </div>
        <Lottie animationData={contact} />
      </div>
      <form onSubmit={handleContact} data-aos="fade-down-left" noValidate="" className="space-y-6">
        <div>
          <label htmlFor="name" className="text-sm">
            Full name
          </label>
          <input
          name="name"
            id="name"
            type="text"
            placeholder=""
            className="w-full p-3 rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
          name="email"
            id="email"
            type="email"
            className="w-full p-3 rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
          name="message"
            id="message"
            rows="3"
            className="w-full p-3 rounded dark:bg-gray-100"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full btn bg-[#fc5a34] text-white  hover:bg-[#000] p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
