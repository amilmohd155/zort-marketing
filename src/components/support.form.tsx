import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export const SupportForm = ({ close }: { close: () => void }) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  return (
    <div className="text-foreground rounded-xl bg-linear-30 from-[#343434] to-[#131313] px-2 py-5 md:p-5">
      <h1 className="font-display text-2xl font-bold md:text-3xl">
        Get in Touch
      </h1>
      <p className="mb-5 text-sm font-light">You can reach us anytime</p>

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-5 right-5 rounded-full duration-200 hover:rotate-180"
        onClick={() => {
          form.reset();
          form.clearErrors();
          form.setFocus("firstName");
          close();
        }}
      >
        <X className="size-5 md:size-10" />
      </Button>

      <Form {...form}>
        <form className="space-y-2 md:space-y-4">
          <div className="grid grid-cols-2 gap-x-2 md:gap-x-5">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="rounded-full bg-transparent"
                      {...field}
                      placeholder="First name"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="rounded-full"
                      {...field}
                      placeholder="Last name"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="rounded-full"
                    {...field}
                    placeholder="Your email"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="rounded-full"
                    {...field}
                    placeholder="Subject"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="max-h-55 min-h-28 rounded-xl"
                    placeholder="How can we help?"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            variant="default"
            type="submit"
            size="lg"
            className="w-full rounded-full"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};
