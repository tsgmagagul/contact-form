import { ContactForm } from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Startup Solutions",
  description: "Have a question or need a website for your business? Send us a message.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Contact Us</h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Have a question or need a website for your business?
              <br />
              Send us a message and we'll get back to you as soon as possible.
            </p>
          </div>

          <ContactForm />
        </div>
      </main>

      <footer className="border-t py-6 px-4">
        <p className="text-center text-sm text-muted-foreground">
          © 2026 Startup Solutions. Built with Next.js & Tailwind CSS.
        </p>
      </footer>
    </div>
  )
}
