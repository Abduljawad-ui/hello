import * as React from "react"
export const Button = ({ children, className, ...props }: any) => (
  <button className={`bg-blue-600 text-white p-2 rounded ${className}`} {...props}>
    {children}
  </button>
)
export const Input = (props: any) => (
  <input className="border p-2 w-full rounded" {...props} />
)
export const Card = ({ children, className }: any) => (
  <div className={`border p-4 rounded shadow mb-4 bg-white ${className}`}>
    {children}
  </div>
)
