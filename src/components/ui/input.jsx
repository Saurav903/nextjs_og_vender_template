import * as React from "react"

import { cn } from "../../../src/app/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex mb-4 h-10 w-full rounded-md border border-gray-500 bg-gray-100 px-3 py-2 text-sm file:border-[0.5px] file:rounded-md file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
