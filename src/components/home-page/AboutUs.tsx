import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "../ui/Button";

export default function AboutUs() {
  return (
    <section className="flex w-full">
      <div className="container mx-auto">
        <div className="grid min-h-[450px] w-full grid-cols-1 md:grid-cols-7">
          {/* Left Image Section (Hidden on Mobile) */}
          <div className="col-span-2 hidden bg-tertiary md:block">
            <img
              src="/images/aboutus-img.png"
              alt="About us"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Content Section */}
          <div className="col-span-1 flex flex-col justify-center bg-secondary p-10 md:col-span-5 md:p-20">
            <h1 className="text-2xl font-bold leading-tight text-neutral sm:text-3xl lg:text-3xl">
              Our Story:
              <br /> Beauty That Feels Good, Inside and Out
            </h1>
            <p className="sm:text-md mt-8 text-sm text-gray-400">
              At our heart, we celebrate the beauty of naturally healthy skin.
              Our range—from soothing creams and revitalizing masks to gentle
              serums—is made to care for and enhance your everyday glow. At our
              heart, we celebrate the beauty of naturally healthy skin. Our
              range—from soothing creams and revitalizing masks to gentle
              serums—is made to care for and enhance your everyday glow.
            </p>

            {/* Call-to-Action Button */}
            <div className="mt-8">
              <Button
                href="/"
                size="md"
                color="primary"
                customClasses="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/90
                text-primary-content transition-all duration-300 ease-out focus:ring-primary focus:ring-offset-2 active:scale-95"
              >
                <span>More About Us</span>
                <div className="w-4">
                  <IoIosArrowRoundForward />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
