import { motion }from "framer-motion";

export function Home() {
    return (
        <motion.main
            className="container mx-auto p-6 grid place-items-center min-h-[calc(100vh-4rem)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            >
                <section className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl front-extrabold text-brown-700">Bem-vindo ao Coffebara!</h1>
                    <p className="text-lg text-gray-600">A cafeteria perfeita para Capivaras.</p>
                </section>
        </motion.main>
    );
}
