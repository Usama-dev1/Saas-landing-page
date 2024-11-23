import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const FaqSection = () => {
  return (
    <section
      id="faq"
      className=" flex justify-center w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What is Acme Inc's SaaS platform?
            </AccordionTrigger>
            <AccordionContent>
              Acme Inc's SaaS platform is a comprehensive workflow management
              solution designed to boost productivity and streamline processes
              for businesses of all sizes. It offers features like an intuitive
              dashboard, real-time analytics, and customizable workflows.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How does the pricing work?</AccordionTrigger>
            <AccordionContent>
              We offer three main pricing tiers: Basic, Pro, and Enterprise. The
              Basic plan starts at $9.99/month and includes essential features
              for small teams. The Pro plan at $19.99/month offers advanced
              features for growing businesses. For larger organizations with
              specific needs, we offer custom Enterprise pricing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Is there a free trial available?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we offer a 14-day free trial for our Basic and Pro plans.
              This allows you to explore our platform's features and determine
              which plan best suits your needs before committing to a
              subscription.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              How secure is my data on your platform?
            </AccordionTrigger>
            <AccordionContent>
              We take data security very seriously. Our platform employs
              industry-standard encryption, regular security audits, and strict
              access controls. We are compliant with major data protection
              regulations and offer features like two-factor authentication to
              ensure your data remains safe and confidential.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Can I integrate Acme Inc's platform with other tools?
            </AccordionTrigger>
            <AccordionContent>
              Our platform offers seamless integration with a wide range of
              popular business tools and services. The Pro and Enterprise plans
              include custom integrations to ensure our solution fits perfectly
              into your existing workflow.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default FaqSection