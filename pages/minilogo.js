import Image from "next/image";

export default function MiniLogo() {
    return (
        <div className="mini-logo">
            <Image
                src="/PP-logo.png"
                alt="small logo"
                width={100}
                height={100}
                layout="fixed"
            />
        </div>
    );
}
