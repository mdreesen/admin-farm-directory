'use client'
import { motion } from 'framer-motion';
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .2 }}
        >
            {children}
        </motion.div>
    );
};
