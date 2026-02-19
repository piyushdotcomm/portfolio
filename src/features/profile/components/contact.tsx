import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactCard } from "@/components/ui/contact-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Panel, PanelContent } from "./panel";

export function Contact() {
    return (
        <Panel id="contact">
            <PanelContent className="p-0 sm:p-0">
                <ContactCard
                    title="Get in touch"
                    description="Have a question or want to work together? Fill out the form below or reach out directly."
                    className="border-none shadow-none"
                    contactInfo={[
                        {
                            icon: MailIcon,
                            label: "Email",
                            value: "13725shpiyush@gmail.com",
                        },
                        {
                            icon: PhoneIcon,
                            label: "Phone",
                            value: "+91 7079650975",
                        },
                        {
                            icon: MapPinIcon,
                            label: "Address",
                            value: "Chennai, Tamil Nadu, India",
                            // className: "col-span-2",
                        },
                    ]}
                >
                    <form className="w-full space-y-4">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" type="text" placeholder="Your name" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Your email" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="How can I help you?" />
                        </div>
                        <Button className="w-full" type="button">
                            Send Message
                        </Button>
                    </form>
                </ContactCard>
            </PanelContent>
        </Panel>
    );
}
