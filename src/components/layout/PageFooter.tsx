"use client";

import React from "react";
import CTAButton from "../ui/CTAButton";

interface PageFooterProps {
  className?: string;
}

export default function PageFooter({ className = "" }: PageFooterProps) {
  return (
    <div className={`relative z-10 ${className} flex justify-start lg:justify-end`}>
      <div className="flex flex-col items-start lg:items-end max-w-md w-full lg:w-auto">
        <h2 className="text-left lg:text-right font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tighter mb-6 leading-tight text-white w-[500px]">
          We create<br />advertisements<br />that <em>sell.</em>
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 self-start lg:self-end mt-2 mb-4">
          <p className="text-xs sm:text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 text-left lg:text-right">
            That&apos;s the only thing we do.
          </p>
        </div>
        <div className="flex flex-row max-[400px]:flex-col gap-3 self-start lg:self-end mt-2">
          <CTAButton
            href="https://calendar.app.google/KKjjEffx5VEeuZ9Z7"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="md"
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          >
            Book Call
          </CTAButton>
          <CTAButton
            href="mailto:hello@averyseriouscompany.com?subject=Hello from A Very Serious Company Website&body=Hi there,%0D%0A%0D%0AI'm interested in learning more about your services.%0D%0A%0D%0AThanks!"
            variant="secondary"
            size="md"
          >
            Email Us
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
