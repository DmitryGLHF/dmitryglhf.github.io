import { Card } from "@/components/ui/card";
import { Mail, Phone, MessageSquare } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Get in Touch</h2>
        <Card className="p-8 bg-secondary/50 backdrop-blur">
          <div className="grid gap-6">
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-6 h-6 text-primary" />
              <span>email@example.com</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-6 h-6 text-primary" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MessageSquare className="w-6 h-6 text-primary" />
              <span>@telegram_handle</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};