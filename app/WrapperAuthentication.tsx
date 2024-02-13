'use client'
import { motion } from 'framer-motion';
import LoadingCircle from "@/app/ui/loading/loadingCircle";

export default function RootLayout() {

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .2 }}
        >
            <LoadingCircle/>
        </motion.div>
    );
};
