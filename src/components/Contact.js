import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-6 sm:px-12 lg:px-24">
      <h1 className="text-4xl font-bold text-orange-600 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-6 max-w-2xl text-center">
        Have questions or feedback? We'd love to hear from you. Reach out to us via any of the methods below or fill out the contact form, and we'll get back to you as soon as possible.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-10">
        <div className="flex items-center space-x-3">
          <FaPhoneAlt className="text-orange-600 text-2xl" />
          <p className="text-lg text-gray-700">+918765435647</p>
        </div>
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-orange-600 text-2xl" />
          <p className="text-lg text-gray-700">support@snapbite.com</p>
        </div>
        <div className="flex items-center space-x-3">
          <FaMapMarkerAlt className="text-orange-600 text-2xl" />
          <p className="text-lg text-gray-700">Noida, India</p>
        </div>
      </div>

      <div className="w-full max-w-lg">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-indigo-700"
              type="button"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
