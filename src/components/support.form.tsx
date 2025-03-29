"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const formSchema = z.object({
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export const SupportForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  return (
    <div className="bg-card/50 rounded-xl p-5">
      <Form {...form}>
        <form className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your email</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea className="min-h-28" placeholder="" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button variant="default" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};
