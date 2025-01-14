import MaxWidthWrapper from "./max-width-wrapper";
import FooterLogo from "../assets/img/footer-logo.png";

const Footer = () => {
  return (
    <div className="w-full bg-red-200">
      <MaxWidthWrapper>
        <div className="w-full grid grid-cols-1 md:grid-cols-4 py-8">
          <div className="bg-purple-100 flex flex-col gap-6">
            <img src={FooterLogo} alt="footer-logo" className="aspect-square w-24" />
            <p className="text-base font-light text-gray-600">Copyright 2024 © Lenob. All Rights Reserved. Lenob - Your Trusted Partner for Growth with Google Ads, Meta Ads and SEO</p>
          </div>
          <div className="bg-purple-200 flex justify-center">
            <div className="text-black flex flex-col gap-3">
              <p className="font-bold uppercase tracking-wide	text-xl">Company</p>
              <a href="#" className="text-base font-normal">About Us</a>
              <a href="#" className="text-base font-normal">Our Services</a>
            </div>
          </div>
          <div className="bg-purple-300 flex justify-center">
            <div className="text-black flex flex-col gap-3">
              <p className="font-bold uppercase tracking-wide	text-xl">Resources</p>
              <a href="#" className="text-base font-normal">Book a Free Consultation</a>
              <a href="#" className="text-base font-normal">Request a Free Audit</a>
            </div>
          </div>
          <div className="bg-purple-400 space-y-5">
            <p className="font-bold uppercase tracking-wide	text-2xl">Newsletter</p>
            <input className="w-full px-2 py-3.5 text-base rounded-lg" placeholder="Enter your email address"/>
            <button className="rounded-xl border-[2.5px] border-black bg-black px-4 py-2 text-base font-semibold text-white transition-colors duration-200 hover:bg-transparent hover:text-black">
              Book a Discovery Call
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default Footer;