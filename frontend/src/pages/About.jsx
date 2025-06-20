import { motion } from "framer-motion";

export function About() {
    return(
        <motion.main
        className="container mx-auto p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
            <h2 className="text-3xl font-bold mb-4 text-brown-700">Sobre o Coffebara</h2>
            <p className="text-gray-700 leading-relaxed">
                O Coffebara é uma cafeteria dedicada a servir as melhores bebidas e petiscos para capivaras e seus amigos. 
                Nossa missão é proporcionar um ambiente acolhedor e divertido, onde todos possam desfrutar de um bom café e companhia.
            </p>
        </motion.main>
    );
}
