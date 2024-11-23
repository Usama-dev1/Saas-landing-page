import React from 'react' 
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check} from "lucide-react";
import Link from 'next/link';
const PriceSection = () => {
  return (
    <section
      id="pricing"
      className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            {
              name: "Basic",
              price: "$9.99",
              features: ["5 Projects", "Basic Analytics", "24/7 Support"],
            },
            {
              name: "Pro",
              price: "$19.99",
              features: [
                "Unlimited Projects",
                "Advanced Analytics",
                "Priority Support",
                "Custom Integrations",
              ],
            },
            {
              name: "Enterprise",
              price: "Custom",
              features: [
                "All Pro features",
                "Dedicated Account Manager",
                "Custom Development",
                "SLA",
              ],
            },
          ].map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col ${
                index === 1 ? "border-primary" : ""
              }`}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-sm font-normal">/month</span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href={plan.price === "Custom" ? "/contact" : "/signup"}>
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PriceSection