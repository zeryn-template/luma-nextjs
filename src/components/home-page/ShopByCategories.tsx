import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "../ui/Button";

export default function ShopByCategories() {
  return (
    <section className="flex w-full px-6 md:px-12">
      <div className="container mx-auto">
        <div className="hidden w-full md:h-[650px] md:grid-flow-col md:grid-rows-6 md:gap-4 lg:grid">
          <div
            className="flex items-end justify-center rounded-3xl bg-cover p-8 md:col-span-1 md:row-span-6"
            style={{ backgroundImage: "url(/images/product-category1.webp)" }}
          >
            <Button
              href="/"
              size="md"
              color="primary"
              customClasses="group relative  overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/90
                       text-primary-content
                       transition-all
                       duration-300 ease-out
                       focus:ring-primary focus:ring-offset-2 active:scale-95 w-32"
            >
              <span>CREAM</span>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center rounded-3xl md:col-span-1 md:row-span-3">
            <h1 className="text-center text-2xl font-bold leading-tight text-neutral sm:text-3xl lg:text-3xl">
              Shop by Category
            </h1>
            <div className="mt-8">
              <Button
                href="/"
                size="md"
                color="primary"
                customClasses="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/90
                       text-primary-content
                       transition-all
                       duration-300 ease-out
                       focus:ring-primary focus:ring-offset-2 active:scale-95"
              >
                <span>All Categories</span>
                <div className="w-4">
                  <IoIosArrowRoundForward />
                </div>
              </Button>
            </div>
          </div>
          <div
            className="flex items-end justify-center rounded-3xl bg-cover p-8 md:col-span-1 md:row-span-3"
            style={{ backgroundImage: "url(/images/product-category3.webp)" }}
          >
            <Button
              href="/"
              size="md"
              color="primary"
              customClasses="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/90
                       text-primary-content
                       transition-all
                       duration-300 ease-out
                       focus:ring-primary focus:ring-offset-2 active:scale-95 w-32"
            >
              <span>SERUM</span>
            </Button>
          </div>
          <div
            className="flex items-end justify-center rounded-3xl bg-cover p-8 md:col-span-1 md:row-span-3"
            style={{ backgroundImage: "url(/images/product-category4.webp)" }}
          >
            <Button
              href="/"
              size="md"
              color="primary"
              customClasses="group relative  overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/90
                       text-primary-content
                       transition-all
                       duration-300 ease-out
                       focus:ring-primary focus:ring-offset-2 active:scale-95 w-32"
            >
              <span>CLEANSE</span>
            </Button>
          </div>
          <div
            className="flex items-end justify-center rounded-3xl bg-cover p-8 md:col-span-1 md:row-span-3"
            style={{ backgroundImage: "url(/images/product-category2.webp)" }}
          >
            <Button
              href="/"
              size="md"
              color="primary"
              customClasses="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/90
                       text-primary-content
                       transition-all
                       duration-300 ease-out
                       focus:ring-primary focus:ring-offset-2 active:scale-95 w-32"
            >
              <span>MASK</span>
            </Button>
          </div>
        </div>
        <div className="w-full lg:hidden">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-2xl font-bold leading-tight text-neutral sm:text-3xl lg:text-3xl">
              Shop by Category
            </h1>
            <p className="sm:text-md mt-8 px-8 text-center text-sm text-gray-400">
              Unleash your skin’s true brilliance with the ultimate in luxurious
              skincare. The Flawless Radiance Serum is a lightweight.
            </p>
            <div className="mt-8">
              <Button
                href="/"
                size="md"
                color="primary"
                customClasses="group relative  overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/90
                       text-primary-content
                       transition-all
                       duration-300 ease-out
                       focus:ring-primary focus:ring-offset-2 active:scale-95"
              >
                <span>All Categories</span>
                <div className="w-4">
                  <IoIosArrowRoundForward />
                </div>
              </Button>
            </div>
          </div>

          <div className="mt-10 grid h-96 grid-cols-2 gap-2">
            <div
              className="flex w-full items-center justify-center rounded-3xl bg-red-400 bg-cover p-8 md:col-span-1 md:row-span-6"
              style={{ backgroundImage: "url(/images/product-category1.webp)" }}
            >
              <Button
                href="/"
                size="md"
                color="primary"
                customClasses="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/90
                       text-primary-content
                       transition-all
                       duration-300 ease-out
                       focus:ring-primary focus:ring-offset-2 active:scale-95 w-32"
              >
                <span>CREAM</span>
              </Button>
            </div>
            <div
              className="flex w-full items-center justify-center rounded-3xl bg-red-400 bg-cover p-8 md:col-span-1 md:row-span-6"
              style={{ backgroundImage: "url(/images/product-category3.webp)" }}
            >
              <Button
                href="/"
                size="md"
                color="primary"
                customClasses="group relative  overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/90
                       text-primary-content
                       transition-all
                       duration-300 ease-out
                       focus:ring-primary focus:ring-offset-2 active:scale-95 w-32"
              >
                <span>SERUM</span>
              </Button>
            </div>
            <div
              className="flex w-full items-center justify-center rounded-3xl bg-red-400 bg-cover p-8 md:col-span-1 md:row-span-6"
              style={{ backgroundImage: "url(/images/product-category2.webp)" }}
            >
              <Button
                href="/"
                size="md"
                color="primary"
                customClasses="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/90
                       text-primary-content
                       transition-all
                       duration-300 ease-out
                       focus:ring-primary focus:ring-offset-2 active:scale-95 w-32"
              >
                <span>CLEANSE</span>
              </Button>
            </div>
            <div
              className="flex w-full items-center justify-center rounded-3xl bg-red-400 bg-cover p-8 md:col-span-1 md:row-span-6"
              style={{ backgroundImage: "url(/images/product-category4.webp)" }}
            >
              <Button
                href="/"
                size="md"
                color="primary"
                customClasses="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/90
                       text-primary-content
                       transition-all
                       duration-300 ease-out
                       focus:ring-primary focus:ring-offset-2 active:scale-95 w-32"
              >
                <span>MASK</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
