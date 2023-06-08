import AnimatedPage from "../../animations/AnimatedPage"

const animation = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
}

const MapPage = () => {
    return (
        <AnimatedPage animation={animation}>
            <div className="flex items-center justify-center opacity-95">
                <h1 className="text-white text-xl">ATHUSS</h1>
            </div>
        </AnimatedPage>
    );
};

export default MapPage;