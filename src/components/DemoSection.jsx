import React from 'react'
import Image from 'next/image';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
const DemoSection = () => {
  return (
    <section
      id="demo"
      className="flex justify-center w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          See It in Action
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full">
          <div className="w-full lg:w-1/2 aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden relative">
            <Image
              src="/placeholder.svg"
              alt="Product Demo Video Thumbnail"
              layout="fill"
              objectFit="cover"
            />
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              aria-label="Play demo video">
              <Play className="h-6 w-6" />
            </Button>
          </div>
          <div className="w-full lg:w-1/2 space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-2xl font-bold">Streamline Your Workflow</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Watch how our intuitive dashboard and real-time analytics can
              transform your business operations. From task management to data
              visualization, our platform offers everything you need to stay
              ahead.
            </p>
            <Button asChild>
              <Link href="/full-demo">Watch Full Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DemoSection