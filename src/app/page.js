import { Button } from "flowbite-react";
import Image from "next/image";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-roboto)]">
            <h1>Hello cybersoft !</h1>

            <Image
                src={
                    "https://apistore.cybersoft.edu.vn/images/vans-black-black.png"
                }
                width={200}
                height={200}
                quality={100}
                alt=""
            />
            <Button>Click me !</Button>
        </div>
    );
}
