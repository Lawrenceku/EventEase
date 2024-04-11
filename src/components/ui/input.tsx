import * as React from "react";

import { cn } from "@/lib/utils";
import { Eye, EyeOff, LucideIcon } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  LeftIcon?:
    | LucideIcon
    | React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>
    | undefined;
  RightIcon?:
    | LucideIcon
    | React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>
    | undefined;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, LeftIcon, RightIcon, ...props }, ref) => {
    const [show, setShow] = React.useState(false);

    if (type === "password") {
      return (
        <div className="relative w-full">
          <input
            autoComplete="off"
            type={!show ? type : "text"}
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-background px-8 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
              className,
            )}
            ref={ref}
            {...props}
          />
          <button
            onClick={() => setShow((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 transform"
            type="button"
          >
            {show ? (
              <Eye className="stroke-slate-700/70" size={18} />
            ) : (
              <EyeOff className="stroke-slate-700/70" size={18} />
            )}
          </button>
        </div>
      );
    }

    return (
      <div className="relative w-full">
        {LeftIcon && (
          <div className="absolute left-1.5 top-1/2 -translate-y-1/2 transform">
            <LeftIcon size={18} className="text-muted-foreground" />
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        {RightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 transform">
            <RightIcon className="text-muted-foreground" size={18} />
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
