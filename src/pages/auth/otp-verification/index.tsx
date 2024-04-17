import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField } from "@/components/ui/form";
import { Open_Sans } from "next/font/google";
import { toast } from "sonner";
import { Loader2, Copy } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import useCountdown from "@/hooks/useCountdown";
import Mail from "@/assets/otp-mail.png";

const openSans = Open_Sans({ subsets: ["latin"] });

const registerSchema = z.object({
  pin: z.string().min(5, {
    message: "Your one-time password must be 5 characters.",
  }),
});

export default function OTPVerification() {
  const [loading, setLoading] = useState(false);
  const { timeLeftString } = useCountdown(300, () =>
    toast.error("OTP has Expired. Request for a new one."),
  );
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(values: z.infer<typeof registerSchema>) {
    setLoading(true);
    setTimeout(() => {
      console.log(values);
      toast.success("Registration Successful");
      setLoading(false);
    }, 3000);
  }

  return (
    <div className="grid max-h-screen md:grid-cols-5 md:gap-4">
      <div className="hidden min-h-screen bg-[url('/otp-img.png')] bg-center bg-no-repeat md:col-span-2 md:block">
        <div className="flex h-full items-center justify-center bg-black/70">
          <p className="inline-block bg-gradient-to-r from-[#002AFF] to-white bg-clip-text text-7xl font-semibold text-transparent">
            Welcome
          </p>
        </div>
      </div>
      <div className="m-auto w-full space-y-5 px-6 pb-7 text-center md:col-span-3 md:block xl:w-[30rem] 2xl:w-[40rem]">
        <div className="m-auto flex flex-col  space-y-5 text-center">
          <Image
            alt={"the application logo"}
            width={200}
            height={50}
            src={"/logo.png"}
            className="mx-auto mb-4 mt-16"
          />
          <Image
            alt={"otp mail illustration"}
            width={200}
            height={200}
            src={Mail}
            className="mx-auto mb-4 mt-16"
          />
          <h1 className="text-3xl font-medium sm:text-4xl">Check your inbox</h1>
          <p className="text-xs sm:text-sm">
            We&apos;ve sent a verification code to your email johndoe@gmail.com.
            Please enter the verification code to continue
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto flex max-w-[980px] justify-center"
          >
            <FormField
              control={form.control}
              name="pin"
              render={({ field }) => (
                <FormControl>
                  <InputOTP
                    onComplete={form.handleSubmit(onSubmit)}
                    maxLength={5}
                    disabled={loading}
                    {...field}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot
                        className="size-10 text-2xl font-bold sm:size-16"
                        index={0}
                      />
                      <InputOTPSlot
                        className="size-10 text-2xl font-bold sm:size-16"
                        index={1}
                      />
                      <InputOTPSlot
                        className="size-10 text-2xl font-bold sm:size-16"
                        index={2}
                      />
                      <InputOTPSlot
                        className="size-10 text-2xl font-bold sm:size-16"
                        index={3}
                      />
                      <InputOTPSlot
                        className="size-10 text-2xl font-bold sm:size-16"
                        index={4}
                      />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
              )}
            />
          </form>
        </Form>
        <div className="sm:text-md flex justify-between text-sm">
          <p>
            Didn&apos;t get the code?{" "}
            <span className="cursor-pointer text-primary">Resend</span>
          </p>
          <p>{timeLeftString}</p>
        </div>
      </div>
    </div>
  );
}
