
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CalendarIcon, Mail, User, BookOpen, GraduationCap } from "lucide-react";
import { Toaster, toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Spinner from "./ui/spinner";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  dob: z.date({
    required_error: "Date of birth is required.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  qualification: z.string().min(2, {
    message: "Please enter your highest qualification.",
  }),
  previousExperience: z.string().optional(),
  termsAccepted: z.boolean().refine(value => value === true, {
    message: "You must accept the terms and conditions.",
  }),
});

type FormData = z.infer<typeof formSchema>;

const Enrollment = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lastName: "",
      firstName: "",
      email: "",
      qualification: "",
      previousExperience: "",
      termsAccepted: false,
    },
  });

  const url = "https://script.google.com/macros/s/AKfycbwNbK5yd826h1Gim8gcPu6SGqPNK5o7rLDYyXdmqdeMC9Dt21e9OVzA2CoT2rXxdUGV/exec";

  function onSubmit(data: FormData) {
    setIsSubmitting(true);
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: (
        `action=enrollment` +
        `&FirstName=${data.firstName}` +
        `&LastName=${data.lastName}` +
        `&DateOfBirth=${data.dob}` +
        `&Email=${data.email}` +
        `&Qualification=${data.qualification}` +
        `&PreviousExperience=${data.previousExperience}`)
    }).then(res => res.text()).then(data => {
      toast.success("Successfully enrolled!", { description: "We'll get back to you soon." });
      form.reset(); // Reset the form after successful submission
    }).catch(error => console.log(error))
      .finally(() => setIsSubmitting(false)); // Reset after submission

  }

  return (
    <section className="py-16 bg-gradient-to-b from-hindi-light to-white">
      <Toaster richColors />
      <div className="container mx-auto px-4">
        {isSubmitting && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="flex flex-col items-center">
              <Spinner className="h-16 w-16 text-white" />
              <p className="mt-4 text-white">Sending...</p>
            </div>
          </div>
        )}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enroll Now</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fill out the form below to enroll in our Hindi language courses. Our team will contact you
            to confirm your enrollment and provide additional information.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-hindi-saffron/20">
            <CardHeader className="bg-hindi-saffron/5">
              <CardTitle className="text-2xl text-hindi-deepBlue">Enrollment Form</CardTitle>
              <CardDescription>
                Please provide your personal information to enroll in our courses.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                              <Input placeholder="Raj" className="pl-10" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                              <Input placeholder="Sharma" className="pl-10" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date of Birth</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date("1940-01-01")
                              }
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            <Input placeholder="your.email@example.com" className="pl-10" {...field} />
                          </div>
                        </FormControl>
                        <FormDescription>
                          We'll never share your email with anyone else.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="qualification"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Highest Qualification</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <GraduationCap className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            <Input placeholder="Bachelor's Degree, High School, etc." className="pl-10" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="previousExperience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Previous Experience with Hindi (Optional)</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <BookOpen className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            <Textarea
                              placeholder="Please share any previous experience with Hindi language."
                              className="pl-10 min-h-[100px]"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="termsAccepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 border">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I accept the terms and conditions
                          </FormLabel>
                          <FormDescription>
                            By checking this box, you agree to our Terms of Service and Privacy Policy.
                          </FormDescription>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-hindi-saffron hover:bg-hindi-saffron/90">
                    Submit Enrollment
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Enrollment;
