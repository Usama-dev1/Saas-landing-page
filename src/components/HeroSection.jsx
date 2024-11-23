import Link from "next/link";
import { Button } from "./ui/button";
const HeroSection = () => {
  return (
    <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Revolutionize Your Workflow
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Boost productivity and streamline your processes with our
              cutting-edge SaaS solution.
            </p>
          </div>
          <div className="flex space-x-4">
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/learn-more">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
