"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, ArrowLeftIcon, CheckIcon } from "@heroicons/react/24/outline";

type FormMode = "contact" | "intake";
type IntakeStep = 1 | 2 | 3 | 4;

interface ContactData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface IntakeData {
  productDescription: string;
  targetAudience: string;
  revenueRange: string;
  adSpendRange: string;
  salesProblem: string;
}

const revenueOptions = [
  "Under $500k/year",
  "$500k - $2M/year",
  "$2M - $10M/year",
  "$10M+/year",
];

const adSpendOptions = [
  "Under $2,500/month",
  "$2,500 - $5k/month",
  "$5k - $15k/month",
  "$15k - $50k/month",
  "$50k+/month",
];

export default function ContactIntakeForm() {
  const [mode, setMode] = useState<FormMode>("contact");
  const [intakeStep, setIntakeStep] = useState<IntakeStep>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [contactData, setContactData] = useState<ContactData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [intakeData, setIntakeData] = useState<IntakeData>({
    productDescription: "",
    targetAudience: "",
    revenueRange: "",
    adSpendRange: "",
    salesProblem: "",
  });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleIntakeSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const nextIntakeStep = () => {
    if (intakeStep < 4) setIntakeStep((s) => (s + 1) as IntakeStep);
  };

  const prevIntakeStep = () => {
    if (intakeStep > 1) setIntakeStep((s) => (s - 1) as IntakeStep);
  };

  const canProceedIntake = (): boolean => {
    switch (intakeStep) {
      case 1:
        return intakeData.productDescription.trim().length > 0;
      case 2:
        return intakeData.targetAudience.trim().length > 0;
      case 3:
        return intakeData.revenueRange !== "" && intakeData.adSpendRange !== "";
      case 4:
        return intakeData.salesProblem.trim().length > 0;
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16 space-y-6"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto">
          <CheckIcon className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-light text-white">Message received.</h3>
        <p className="text-white/70 max-w-md mx-auto">
          We&apos;ll review your information and respond within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-8">
      <AnimatePresence mode="wait">
        {mode === "contact" ? (
          <motion.div
            key="contact"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Name</label>
                  <Input
                    type="text"
                    value={contactData.name}
                    onChange={(e) =>
                      setContactData({ ...contactData, name: e.target.value })
                    }
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Email</label>
                  <Input
                    type="email"
                    value={contactData.email}
                    onChange={(e) =>
                      setContactData({ ...contactData, email: e.target.value })
                    }
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/70">Company</label>
                <Input
                  type="text"
                  value={contactData.company}
                  onChange={(e) =>
                    setContactData({ ...contactData, company: e.target.value })
                  }
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30"
                  placeholder="Your company (optional)"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/70">Message</label>
                <Textarea
                  value={contactData.message}
                  onChange={(e) =>
                    setContactData({ ...contactData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30 resize-none"
                  placeholder="Tell us what you need..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-neutral-900 hover:bg-white/90 font-medium px-8"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                <button
                  type="button"
                  onClick={() => setMode("intake")}
                  className="text-white/60 hover:text-white text-sm flex items-center gap-2 transition-colors"
                >
                  Ready to start? Tell us about your business
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="intake"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Progress Indicator */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setMode("contact")}
                className="text-white/60 hover:text-white text-sm flex items-center gap-2 transition-colors"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                Back to contact
              </button>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      step === intakeStep
                        ? "bg-white"
                        : step < intakeStep
                        ? "bg-white/50"
                        : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Intake Steps */}
            <AnimatePresence mode="wait">
              {intakeStep === 1 && (
                <IntakeStepWrapper key="step1">
                  <StepHeader
                    number={1}
                    title="What do you sell?"
                    subtitle="Describe your product or service in a sentence or two."
                  />
                  <Textarea
                    value={intakeData.productDescription}
                    onChange={(e) =>
                      setIntakeData({
                        ...intakeData,
                        productDescription: e.target.value,
                      })
                    }
                    rows={3}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30 resize-none"
                    placeholder="We sell premium handmade furniture..."
                  />
                </IntakeStepWrapper>
              )}

              {intakeStep === 2 && (
                <IntakeStepWrapper key="step2">
                  <StepHeader
                    number={2}
                    title="Who buys it?"
                    subtitle="Describe your ideal customer."
                  />
                  <Textarea
                    value={intakeData.targetAudience}
                    onChange={(e) =>
                      setIntakeData({
                        ...intakeData,
                        targetAudience: e.target.value,
                      })
                    }
                    rows={3}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30 resize-none"
                    placeholder="Homeowners aged 35-55 who value quality..."
                  />
                </IntakeStepWrapper>
              )}

              {intakeStep === 3 && (
                <IntakeStepWrapper key="step3">
                  <StepHeader
                    number={3}
                    title="The numbers"
                    subtitle="Help us understand your current scale."
                  />
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm text-white/70">Annual Revenue</label>
                      <div className="space-y-2">
                        {revenueOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() =>
                              setIntakeData({ ...intakeData, revenueRange: option })
                            }
                            className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                              intakeData.revenueRange === option
                                ? "border-white/50 bg-white/10 text-white"
                                : "border-white/10 bg-white/5 text-white/70 hover:border-white/20"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm text-white/70">Current Ad Spend</label>
                      <div className="space-y-2">
                        {adSpendOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() =>
                              setIntakeData({ ...intakeData, adSpendRange: option })
                            }
                            className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                              intakeData.adSpendRange === option
                                ? "border-white/50 bg-white/10 text-white"
                                : "border-white/10 bg-white/5 text-white/70 hover:border-white/20"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </IntakeStepWrapper>
              )}

              {intakeStep === 4 && (
                <IntakeStepWrapper key="step4">
                  <StepHeader
                    number={4}
                    title="What outcome do you need?"
                    subtitle="What sales problem should we solve?"
                  />
                  <Textarea
                    value={intakeData.salesProblem}
                    onChange={(e) =>
                      setIntakeData({
                        ...intakeData,
                        salesProblem: e.target.value,
                      })
                    }
                    rows={4}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30 resize-none"
                    placeholder="We need more qualified leads for our sales team..."
                  />

                  {/* Contact info for intake submission */}
                  <div className="grid md:grid-cols-2 gap-4 pt-6 border-t border-white/10">
                    <div className="space-y-2">
                      <label className="text-sm text-white/70">Your Name</label>
                      <Input
                        type="text"
                        value={contactData.name}
                        onChange={(e) =>
                          setContactData({ ...contactData, name: e.target.value })
                        }
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-white/70">Email</label>
                      <Input
                        type="email"
                        value={contactData.email}
                        onChange={(e) =>
                          setContactData({ ...contactData, email: e.target.value })
                        }
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                </IntakeStepWrapper>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between pt-4">
              <Button
                type="button"
                variant="ghost"
                onClick={prevIntakeStep}
                disabled={intakeStep === 1}
                className="text-white/60 hover:text-white hover:bg-white/5"
              >
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Back
              </Button>

              {intakeStep < 4 ? (
                <Button
                  type="button"
                  onClick={nextIntakeStep}
                  disabled={!canProceedIntake()}
                  className="bg-white text-neutral-900 hover:bg-white/90 font-medium"
                >
                  Continue
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleIntakeSubmit}
                  disabled={
                    isSubmitting ||
                    !canProceedIntake() ||
                    !contactData.name ||
                    !contactData.email
                  }
                  className="bg-white text-neutral-900 hover:bg-white/90 font-medium"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function IntakeStepWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="space-y-6"
    >
      {children}
    </motion.div>
  );
}

function StepHeader({
  number,
  title,
  subtitle,
}: {
  number: number;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="space-y-2">
      <div className="text-xs text-white/50 font-medium tracking-widest uppercase">
        Step {number} of 4
      </div>
      <h3 className="text-xl font-light text-white">{title}</h3>
      <p className="text-sm text-white/60">{subtitle}</p>
    </div>
  );
}
