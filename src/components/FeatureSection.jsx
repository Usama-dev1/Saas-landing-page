import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const FeatureSection = () => {
  return (
    <section
      id="features"
      className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {[
            {
              title: "Intuitive Dashboard",
              description:
                "Get a bird's-eye view of your operations with our easy-to-use dashboard.",
            },
            {
              title: "Real-time Analytics",
              description:
                "Make data-driven decisions with up-to-the-minute insights.",
            },
            {
              title: "Seamless Integration",
              description: "Connect with your favorite tools effortlessly.",
            },
            {
              title: "Advanced Security",
              description:
                "Rest easy knowing your data is protected by state-of-the-art security measures.",
            },
            {
              title: "24/7 Support",
              description: "Our dedicated team is always ready to assist you.",
            },
            {
              title: "Customizable Workflows",
              description:
                "Tailor the platform to fit your unique business needs.",
            },
          ].map((feature, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection