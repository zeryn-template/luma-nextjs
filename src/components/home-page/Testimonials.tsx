import TestimonialCard from "../common/TestimonialCard";

interface Testimonial {
  name: string;
  videoUrl: string;
}

const testimonials: Testimonial[] = [
  { name: "Albert Flores", videoUrl: "/videos/testimonial1.mp4" },
  { name: "Leslie Alexander", videoUrl: "/videos/testimonial2.mp4" },
  { name: "Courtney Henry", videoUrl: "/videos/testimonial3.mp4" },
  { name: "Courtney Henry", videoUrl: "/videos/testimonial4.mp4" },
];

export default function Testimonials() {
  return (
    <section className="flex w-full px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-bold leading-tight text-neutral sm:text-3xl lg:text-3xl">
            See What Our <br /> Customers Are Saying
          </h1>

          <p className="mt-4 w-full text-gray-400 md:w-96">
            Join thousands who’ve found their glow besties <br />
            Spoiler: You’ll want to screenshot these results.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-20 grid grid-cols-1 place-items-center gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
