// components/Footer.js
const Footer = () => {
  return (
    <footer className="text-black py-8 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {/* Contact */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Contact</h3>
          <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-500">
            <li>Email: info@example.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Street, City</li>
          </ul>
        </div>

        {/* Service */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Service</h3>
          <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-500">
           <li>Custom Furniture Design</li>
<li>Furniture Repair & Restoration</li>
<li>Delivery & Assembly</li>
<li>Interior Consultation</li>
          </ul>
        </div>

        {/* Event */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Event</h3>
          <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-500">
            <li>Workshops</li>
            <li>Webinars</li>
            <li>Meetups</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Follow Us</h3>
          <div className="flex flex-col gap-3 sm:gap-4 text-sm sm:text-base text-gray-500">
            <a href="#" className="hover:text-blue-500 transition">Facebook</a>
            <a href="#" className="hover:text-blue-400 transition">Twitter</a>
            <a href="#" className="hover:text-pink-500 transition">Instagram</a>
            <a href="#" className="hover:text-blue-600 transition">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 sm:mt-8 text-sm sm:text-base text-gray-500 px-4">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
