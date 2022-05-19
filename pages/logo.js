import Image from "next/image";

export default function Logo() {
    return (
        <Image
            className="logo"
            src="/PP-large.png"
            alt="large logo"
            width={250}
            height={250}
        />
    );
}
