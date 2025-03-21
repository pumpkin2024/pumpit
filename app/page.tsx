import { BenefitsSection } from "@/components/home/sections/benefits";
import { CommunitySection } from "@/components/home/sections/community";
import { ContactSection } from "@/components/home/sections/contact";
import { FAQSection } from "@/components/home/sections/faq";
import { FeaturesSection } from "@/components/home/sections/features";
import { FooterSection } from "@/components/home/sections/footer";
import { HeroSection } from "@/components/home/sections/hero";
import { PricingSection } from "@/components/home/sections/pricing";
import { ServicesSection } from "@/components/home/sections/services";
import { SponsorsSection } from "@/components/home/sections/sponsors";
import { TeamSection } from "@/components/home/sections/team";
import { TestimonialSection } from "@/components/home/sections/testimonial";

export const metadata = {
  title: "Shadcn - Landing template",
  description: "Free Shadcn landing page for developers",
  openGraph: {
    type: "website",
    url: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Shadcn - Landing template",
    description: "Free Shadcn landing page for developers",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Shadcn - Landing template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Shadcn - Landing template",
    description: "Free Shadcn landing page for developers",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <CommunitySection />
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
