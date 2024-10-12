import { Button } from "@/components/ui/button"
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default function HomePage() {
    // const { userId } = auth()
    // if (userId != null) redirect("/events")

    return (
        <div className="container mx-auto my-4 text-center">
            <h1 className="mb-4 text-3xl">Fancy Home Page</h1>
            <div className="flex justify-center gap-2">
                <Button asChild>
                    <SignInButton />
                </Button>
                <Button asChild>
                    <SignUpButton />
                </Button>
                <UserButton />
            </div>
        </div>
    )
}
