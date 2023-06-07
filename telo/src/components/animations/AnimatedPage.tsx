import { motion } from 'framer-motion';

type OpacityAndDisplacement = {
    opacity: number;
    x: number;
};

type AnimationInterface = {
    initial: OpacityAndDisplacement
    animate: OpacityAndDisplacement
    exit: OpacityAndDisplacement
}

const AnimatedPage = ({ children, animation: animation }:
    { children: JSX.Element; animation: AnimationInterface }) => {
    return (
        <motion.div
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.30 }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;