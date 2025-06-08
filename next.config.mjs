import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    // assetPrefix: '',
    images: {
        remotePatterns: [
            {
                protocol: "https",
                port: "",
                hostname: "apistore.cybersoft.edu.vn",
                pathname: "**",
            },
        ],
        formats: ["image/webp", "image/avif"],
    },
};

export default withFlowbiteReact(nextConfig);