"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import supabase from "@/utils/supabase";
import { useAuthDetailsContext } from "@/contexts/authContext";

// Define the form schema with validation
const formSchema = z.object({
  full_name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" }),
});

type BookingFormValues = z.infer<typeof formSchema>;

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  plotNumber: string;
  plotId: string;
}

export function BookingForm({
  isOpen,
  onClose,
  plotNumber,
  plotId,
}: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { getPlots, setSelectedPlot } = useAuthDetailsContext();

  // Initialize the form
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
    },
  });

  // Handle form submission
  async function onSubmit(data: BookingFormValues) {
    setIsSubmitting(true);

    try {
      // Simulate API call with a delay
      await supabase
        .from("costomer")
        .insert([
          {
            full_name: data.full_name,
            email: data.email,
            phone: data.phone,
            transaction_id: "123",
          },
        ])
        .select()
        .single()
        .then(async ({ data }) => {
          await supabase
            .from("plots")
            .update({ status: "booked", customer_id: data.id })
            .eq("id", plotId);
        });

      // Show success state
      setIsSuccess(true);
      getPlots();
      setSelectedPlot(null);
      // Show success toast
      //   toast({
      //     title: "Booking Request Submitted",
      //     description: `Thank you, ${data.full_name}! We'll contact you soon about plot ${plotNumber}.`,
      //   })

      // Reset form after 3 seconds and close the dialog
      setTimeout(() => {
        form.reset();
        setIsSuccess(false);
        onClose();
      }, 3000);
    } catch (error) {
      return error;
      //   toast({
      //     title: "Error",
      //     description: "There was a problem submitting your booking request. Please try again.",
      //     variant: "destructive",
      //   })
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        {!isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle>Book Plot {plotNumber}</DialogTitle>
              <DialogDescription>
                Fill in your details below to book this plot. Our team will
                contact you shortly.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 py-4"
              >
                <FormField
                  control={form.control}
                  name="full_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
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
                        <Input
                          placeholder="john.doe@example.com"
                          type="email"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+91 9876543210"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter className="pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-green-700 hover:bg-green-800"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Book Now"
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </>
        ) : (
          <div className="py-6 flex flex-col items-center justify-center text-center space-y-4">
            <div className="rounded-full bg-green-100 p-3">
              <svg
                className="h-6 w-6 text-green-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <DialogTitle>Booking Request Successful!</DialogTitle>
            <DialogDescription>
              Thank you for your interest in plot {plotNumber}. Our team will
              contact you shortly to complete the booking process.
            </DialogDescription>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
