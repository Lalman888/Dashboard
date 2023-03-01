'use client'
import { MenuIcon } from "lucide-react"
import { useState } from "react"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <aside className=' px-7'>
            <button>
                {
                    !isOpen ? <MenuIcon /> : null
                }
            </button>
        </aside>
    )
}

export default Navbar