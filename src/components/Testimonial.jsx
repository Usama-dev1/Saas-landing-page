import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from 'next/image';
const Testimonial = () => {
  return (
    <section
      id="testimonials"
      className=" flex justify-center w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {[
            {
              name: "Alex Johnson",
              role: "CEO, TechCorp",
              content:
                "This platform has completely transformed how we manage our projects. The real-time analytics have been a game-changer for our decision-making process.",
              avatar: "/placeholder.svg",
            },
            {
              name: "Samantha Lee",
              role: "Operations Manager, InnovateCo",
              content:
                "The intuitive interface and customizable workflows have significantly improved our team's productivity. It's like the platform was tailored specifically for our needs.",
              avatar: "/placeholder.svg",
            },
            {
              name: "Michael Chen",
              role: "CTO, FutureTech",
              content:
                "The seamless integration with our existing tools and the top-notch security features made the decision to switch to this platform a no-brainer. Highly recommended!",
              avatar: "/placeholder.svg",
            },
          ].map((testimonial, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex items-center">
                <div>
                  <Quote className="h-6 w-6 text-gray-400 mb-2" />
                  <p className="italic">{testimonial.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial