import Image from "next/image";

export default function MiniLogo() {
    return (
        <Image
            className="mini-logo"
            src="/PP-logo.png"
            alt="small logo"
            width={100}
            height={100}
        />
    );
}
