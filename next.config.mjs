/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                pathname: "**",
                port: ''
            },
            {
                protocol: "https",
                hostname: "randomuser.me",
                pathname: "**",
                port: ''
            }
        ]
    }
};

export default nextConfig;
