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
import { Loader2 } from "lucide-react";
import { useState } from "react";

const openSans = Open_Sans({ subsets: ["latin"] });

const signInSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long." }),
});

function onSubmit(values: z.infer<typeof signInSchema>) {
  toast.success("Sign In Successful");
}

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className={cn("flex h-screen items-center justify-center", openSans.className)}>
      <div className="mx-6 w-full space-y-5 sm:w-[20rem] xl:w-[30rem] 2xl:w-[40rem]">
        <div className="space-y-5 text-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p>
            Don't have an account?{" "}
            <Link href="/auth/register" className="hover:text-[#0028e5 text-primary hover:text-secondary">
              Sign Up
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
            <Button
              disabled={loading}
              type="submit"
              className="h-12 w-full gap-2 text-lg"
            >
              Sign In
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
