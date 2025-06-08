import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

const Header = () => {
    return (
        <Navbar fluid rounded>
            <NavbarBrand as={Link} href="https://flowbite-react.com">
                <img
                    src="/next.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite React Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite React
                </span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="/" active>
                    Home
                </NavbarLink>
                <NavbarLink as={Link} href="/about">
                    About
                </NavbarLink>
                <Link href="/register">Register</Link>
                <NavbarLink as={Link} href="/login">
                    Login
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
};

export default Header;
