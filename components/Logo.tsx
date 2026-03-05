"use client"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Logo() {
    const { theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Image
                src="/images/encora_dark_logo.png"
                alt="Encora Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
            />
        )
    }

    return (
        <div className="relative">
            {/* Dark mode logo - hidden in print */}
            <Image
                src="/images/encora_light_logo.png"
                alt="Encora Logo"
                width={120}
                height={40}
                className={`h-8 w-auto print:hidden ${resolvedTheme === "dark" ? "block" : "hidden"}`}
                priority
            />
            {/* Light mode logo - always visible in print */}
            <Image
                src="/images/encora_dark_logo.png"
                alt="Encora Logo"
                width={120}
                height={40}
                className={`h-8 w-auto print:block ${resolvedTheme === "dark" ? "hidden" : "block"}`}
                priority
            />
        </div>
    )
}