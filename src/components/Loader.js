import { motion } from "framer-motion"

const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: .5
            },
            y: {
                yoyo: Infinity,
                ease: "easeOut",
                duration: .25
            },
        }
    }
}

function Loader() {
    return (
        <>
            <motion.div className="loader"
                variants={loaderVariants}
                animate="animationOne"
            >

            </motion.div>

        </>
    )
}

export default Loader
