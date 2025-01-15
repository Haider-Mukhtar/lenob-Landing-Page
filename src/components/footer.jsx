import MaxWidthWrapper from "./max-width-wrapper";
import FooterLogo from "../assets/img/footer-logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white/50">
      <MaxWidthWrapper>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 py-12 gap-10 lg:gap-6 xl:gap-20">
          <div className="flex flex-col gap-6">
            <img src={FooterLogo} alt="footer-logo" className="aspect-square w-24 object-fill" />
            <p className="text-base font-light text-gray-600">Copyright 2024 © Lenob. All Rights Reserved. Lenob - Your Trusted Partner for Growth with Google Ads, Meta Ads and SEO</p>
          </div>
          <div className="flex justify-between sm:px-10 md:px-14 lg:px-0">
            <div className="text-black flex flex-col gap-3">
              <p className="font-bold uppercase tracking-wide	text-lg">Company</p>
              <a href="#" className="text-base font-normal text-gray-700 hover:text-black transition-colors duration-200">About Us</a>
              <a href="#" className="text-base font-normal text-gray-700 hover:text-black transition-colors duration-200">Our Services</a>
            </div>
            <div className="text-black flex flex-col gap-3">
              <p className="font-bold uppercase tracking-wide	text-lg">Resources</p>
              <a href="#" className="text-base font-normal text-gray-700 hover:text-black transition-colors duration-200">Book a Free Consultation</a>
              <a href="#" className="text-base font-normal text-gray-700 hover:text-black transition-colors duration-200">Request a Free Audit</a>
            </div>
          </div>
          <div className="space-y-5">
            <p className="font-bold uppercase tracking-wide	text-xl">Newsletter</p>
            <input className="w-full px-2 py-3.5 text-base rounded-lg drop-shadow-md" placeholder="Enter your email address"/>
            <button className="rounded-xl border-[2.5px] border-black bg-black px-4 py-2 text-base font-semibold text-white transition-colors duration-200 hover:bg-transparent hover:text-black drop-shadow-md">
              Book a Discovery Call
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer;