import { motion, useCycle } from "framer-motion"

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
    },
    animationTwo: {
        x: 0,
        y: [0, -40],
        transition: {
            y: {
                yoyo: Infinity,
                duration: .25,
                ease: "easeOut"
            }
        }
    }
}

function Loader() {
    const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo")
    return (
        <>
            <motion.div className="loader"
                variants={loaderVariants}
                animate={animation}
            >

            </motion.div>

            <button onClick={() => cycleAnimation()}>
                Change Loader
            </button>

        </>
    )
}

export default Loader
