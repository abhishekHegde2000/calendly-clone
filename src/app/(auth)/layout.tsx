import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

export default function AuthLayout({ children }: { children: ReactNode }) {
    const { userId } = auth()
    if (userId != null) redirect("/")

    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            {children}
        </div>
    )
}