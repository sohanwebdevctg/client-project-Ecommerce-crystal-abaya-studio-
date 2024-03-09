import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok  } from "react-icons/fa";
import amex from '../../../../public/bankCard/amex.png';
import masterCard from '../../../../public/bankCard/mastercard.png';
import pay from '../../../../public/bankCard/pay.png';
import paypal from '../../../../public/bankCard/paypal.png';
import visa from '../../../../public/bankCard/visa.png';
import { LuDot } from "react-icons/lu";


const Footer = () => {
  return (
    <div className="bg-[#2C332F] py-10">
      {/* container section start */}
      <div className="container mx-auto">
        {/* content section start */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 px-5">
          {/* item one start */}
          <div>
            <h3 className="text-2xl sm:text-xl md:text-2xl lg:text-2xl font-semibold mb-4 text-[#EFECECBF]">Main Menu</h3>
            <ul className="space-y-2">
              <li><Link className="text-lg sm:text-sm md:text-base lg:text-lg text-[#EFECECBF] hover:border-b-[1px] hover:border-b-[#EFECECBF]" to="/">CAS Reviews</Link></li>
              <li><Link className="text-lg sm:text-sm md:text-base lg:text-base text-[#EFECECBF] hover:border-b-[1px] hover:border-b-[#EFECECBF]" to="/">New In</Link></li>
              <li><Link className="text-lg sm:text-sm md:text-base lg:text-base text-[#EFECECBF] hover:border-b-[1px] hover:border-b-[#EFECECBF]" to="/">Ready to wear</Link></li>
              <li><Link className="text-lg sm:text-sm md:text-base lg:text-base text-[#EFECECBF] hover:border-b-[1px] hover:border-b-[#EFECECBF]" to="/">Black Abaya</Link></li>
              <li><Link className="text-lg sm:text-sm md:text-base lg:text-base text-[#EFECECBF] hover:border-b-[1px] hover:border-b-[#EFECECBF]" to="/">Coat Abaya</Link></li>
              <li><Link className="text-lg sm:text-sm md:text-base lg:text-base text-[#EFECECBF] hover:border-b-[1px] hover:border-b-[#EFECECBF]" to="/">Color Abaya</Link></li>
              <li><Link className="text-lg sm:text-sm md:text-base lg:text-base text-[#EFECECBF] hover:border-b-[1px] hover:border-b-[#EFECECBF]" to="/">White Abaya</Link></li>
              <li><Link className="text-lg sm:text-sm md:text-base lg:text-base text-[#EFECECBF] hover:border-b-[1px] hover:border-b-[#EFECECBF]" to="/">Luxury Abaya</Link></li>
              <li><Link className="text-lg sm:text-sm md:text-base lg:text-base text-[#EFECECBF] hover:border-b-[1px] hover:border-b-[#EFECECBF]" to="/">Abaya Sheila</Link></li>
              <li><Link className="text-lg sm:text-sm md:text-base lg:text-base text-[#EFECECBF] hover:border-b-[1px] hover:border-b-[#EFECECBF]" to="/">Blog</Link></li>
              <li><Link className="text-lg sm:text-sm md:text-base lg:text-base text-[#EFECECBF] border-b-[1px] border-b-[#EFECECBF] hover:border-b-[2px]" to="/">CAS Home Service</Link></li>
            </ul>
          </div>
          {/* item one end */}
          {/* item two start */}
          <div>
            <h3 className="text-2xl sm:text-xl md:text-2xl lg:text-2xl font-semibold mb-4 text-[#EFECECBF]">Quick links</h3>
            <ul className="space-y-2">
              <li><Link className="text-lg sm:text-sm md:text-base lg:text-lg text-[#EFECECBF] hover:border-b-[1px] hover:border-b-[#EFECECBF]" to="/">FAQs</Link></li>
              <li><Link className="text-lg sm:text-sm md:text-base lg:text-lg text-[#EFECECBF] hover:border-b-[1px] hover:border-b-[#EFECECBF]" to="/">Terms & Conditions</Link></li>
              <li><Link className="text-lg sm:text-sm md:text-base lg:text-lg text-[#EFECECBF] hover:border-b-[1px] hover:border-b-[#EFECECBF]" to="/">Shipping & Delivery</Link></li>
              <li><Link className="text-lg sm:text-sm md:text-base lg:text-lg text-[#EFECECBF] hover:border-b-[1px] hover:border-b-[#EFECECBF]" to="/">Privacy Policy</Link></li>
              <li><Link className="text-lg sm:text-sm md:text-base lg:text-lg text-[#EFECECBF] hover:border-b-[1px] hover:border-b-[#EFECECBF]" to="/">Terms of Service</Link></li>
              <li><Link className="text-lg sm:text-sm md:text-base lg:text-lg text-[#EFECECBF] hover:border-b-[1px] hover:border-b-[#EFECECBF]" to="/">Exchange policy</Link></li>
              <li><Link className="text-lg sm:text-sm md:text-base lg:text-lg text-[#EFECECBF] hover:border-b-[1px] hover:border-b-[#EFECECBF]" to="/">About Us</Link></li>
              <li><Link className="text-lg sm:text-sm md:text-base lg:text-lg text-[#EFECECBF] hover:border-b-[1px] hover:border-b-[#EFECECBF]" to="/"></Link></li>
            </ul>
          </div>
          {/* item two end */}
          {/* item three start */}
          <div>
            <h3 className="text-2xl sm:text-xl md:text-2xl lg:text-2xl font-semibold mb-4 text-[#EFECECBF]">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-lg sm:text-sm md:text-base lg:text-lg text-[#EFECECBF]">Fill out our contact form or email us at<br className="hidden sm:block"></br>info@casbasics.com</li>
              <li className="text-lg sm:text-sm md:text-base lg:text-lg text-[#EFECECBF]">Call us on +971 6 551 8372</li>
              <li className="text-lg sm:text-sm md:text-base lg:text-lg text-[#EFECECBF]"><Link  to="/">FAQs</Link></li>
              <li className="text-lg sm:text-sm md:text-base lg:text-base text-[#EFECECBF]">Or <Link className=" border-b-[1px] border-b-[#EFECECBF] hover:border-b-[2px]" to="/"> WhatsApp </Link>us between 9 am - 7 pm (Sat - Fri)</li>
              <li className="text-lg sm:text-sm md:text-base lg:text-base text-[#EFECECBF]">Visit CAS<Link className=" border-b-[1px] border-b-[#EFECECBF] hover:border-b-[2px]" to="/"> Outlet </Link>in Ajman,UAE</li>
            </ul>
          </div>
          {/* item three end */}
        </div>
        {/* content section end */}
        {/* social media section start */}
        <ul className="my-8 flex justify-center items-center gap-5">
          <li><Link to="/" className=" text-[#EFECECBF]"><FaFacebook className="text-2xl md:text-3xl lg:text-xl "></FaFacebook></Link></li>
          <li><Link to="/" className=" text-[#EFECECBF]"><FaInstagram className="text-2xl md:text-3xl lg:text-xl "></FaInstagram></Link></li>
          <li><Link to="/" className="text-[#EFECECBF]"><FaTiktok className="text-2xl md:text-3xl lg:text-xl"></FaTiktok></Link></li>
        </ul>
        {/* social media section end */}
      </div>
      <hr className="opacity-20"></hr>
      {/* bottom footer section start */}
      <div className="container mx-auto mt-16">
        <div className="sm:flex justify-between items-center px-2">
          {/* item one */}
          <div>
            <ul className="sm:flex sm:items-center gap-3">
              <li>
              <label className="form-control w-56 sm:w-40 md:w-full">
                  <div className="label">
                    <span className="label-text text-white">Country/region</span>
                  </div>
                  <select className="select text-white bg-[#2C332F] border-white border-[1px] w-56 sm:w-40 md:w-full">
                    <option className="text-sm sm:text-xs lg:text-lg" disabled selected>AED د.إ | Bangladesh</option>
                    <option className="text-sm sm:text-xs lg:text-lg">AED د.إ | Ascension Island</option>
                    <option className="text-sm sm:text-xs lg:text-lg">AED د.إ | Afghanistan</option>
                    <option className="text-sm sm:text-xs lg:text-lg">AED د.إ | Albania</option>
                    <option className="text-sm sm:text-xs lg:text-lg">AED د.إ | Algeria</option>
                    <option className="text-sm sm:text-xs lg:text-lg">AED د.إ | Andorra</option>
                  </select>
                </label>
              </li>
              <li>
              <label className="form-control w-56 sm:w-32 md:w-full mt-3 sm:mt-0">
                  <div className="label">
                    <span className="label-text text-white">Language</span>
                  </div>
                  <select className="select text-white bg-[#2C332F] border-white border-[1px] w-56 sm:w-32 md:w-full">
                    <option className="text-sm sm:text-xs lg:text-lg" disabled selected>English</option>
                    <option className="text-sm sm:text-xs lg:text-lg">العربية</option>
                    
                    
                  </select>
                </label>
              </li>
            </ul>
          </div>
          {/* item one */}
          {/* item two */}
          <div className="mt-5">
            <ul className="flex gap-3 items-center">
              <li><img className="h-6 w-12 sm:h-6 sm:w-9 md:h-5 md:w-9 rounded-sm" src={amex}></img></li>
              <li><img className="h-6 w-12 sm:h-6 sm:w-9 md:h-5 md:w-9 rounded-sm" src={pay}></img></li>
              <li><img className="h-6 w-12 sm:h-6 sm:w-9 md:h-5 md:w-9 rounded-sm" src={masterCard}></img></li>
              <li><img className="h-6 w-12 sm:h-6 sm:w-9 md:h-5 md:w-9 rounded-sm" src={paypal}></img></li>
              <li><img className="h-6 w-12 sm:h-6 sm:w-9 md:h-5 md:w-9 rounded-sm" src={visa}></img></li>
            </ul>
          </div>
          {/* item two */}
        </div>
        <div className="p-2 text-center lg:text-left mt-4">
          <p className="text-[#EFECECBF] text-base sm:text-lg md:text-sm lg:text-xs">© 2024, <Link className="hover:border-b-[1px] hover:border-b-slate-50" to="/">Crystal Abaya Studio </Link> <Link className="hover:border-b-[1px] hover:border-b-slate-50" to="/">Powered by Shopify</Link><span><LuDot className="inline-block"></LuDot></span><Link className="hover:border-b-[1px] hover:border-b-slate-50" to="/">Refund policy</Link><span><LuDot className="inline-block"></LuDot></span><Link className="hover:border-b-[1px] hover:border-b-slate-50" to="/">Privacy policy</Link><span><LuDot className="inline-block"></LuDot></span><Link className="hover:border-b-[1px] hover:border-b-slate-50" to="/">Terms of service</Link></p>
        </div>
      </div>
      {/* bottom footer section end */}
      {/* container section end */}
    </div>
  );
};

export default Footer;