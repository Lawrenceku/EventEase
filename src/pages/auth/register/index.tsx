import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import FormInput from "@/components/form-input";
import { toast } from "sonner";
import { Loader2, Copy } from "lucide-react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const openSans = Open_Sans({ subsets: ["latin"] });

const registerSchema = z
  .object({
    email: z.string().email({ message: "Please enter a valid email address." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 8 characters long." }),
    confirm: z
      .string()
      .min(6, { message: "Password must be at least 8 characters long." }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

function onSubmit(values: z.infer<typeof registerSchema>) {
  toast.success("Registration Successful");
}

export default function Register() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm: "",
    },
  });
  return (
    <div
      className={cn(
        "flex h-screen items-center justify-center",
        openSans.className,
      )}
    >
      <div className="mx-6 w-full space-y-5 sm:w-[20rem] xl:w-[30rem] 2xl:w-[40rem]">
        <div className="space-y-5 text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p>
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="hover:text-[#0028e5 text-primary hover:text-secondary"
            >
              Log In
            </Link>
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormInput
              control={form.control}
              name="email"
              type="email"
              placeholder="Email"
              className="text-md h-12 rounded-lg px-6"
            />
            <FormInput
              control={form.control}
              name="password"
              type="password"
              placeholder="Password"
              className="text-md h-12 rounded-lg px-6"
            />
            <FormInput
              control={form.control}
              name="confirm"
              type="password"
              placeholder="Confirm Password"
              className="text-md h-12 rounded-lg px-6"
            />
            <Button
              disabled={loading}
              type="submit"
              className="h-12 w-full gap-2 text-lg"
            >
              Sign Up
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            </Button>
          </form>
        </Form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-background px-5 text-muted-foreground">or</span>
          </div>
        </div>
        <Button
          variant="outline"
          type="button"
          disabled={loading}
          className="h-12 w-full gap-3"
        >
          <FcGoogle className="h-5 w-5" />
          Sign Up with Google
        </Button>
        <Button
          variant="outline"
          type="button"
          disabled={loading}
          className="h-12 w-full gap-3"
        >
          <FaApple className="h-5 w-5" />
          Sign Up with Apple
        </Button>
      </div>
    </div>
  );
}
