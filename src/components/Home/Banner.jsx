import banner from "../../assets/image/painting.jpg"
import "../../style.css"
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${banner})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="px-3 md:px-28 text-neutral-content">
          <div className="md:w-[85%] lg:w-[50%]">
            <h1 className="mb-5 text-4xl md:text-6xl primary border-l-8 pl-6 border-sky-500"> ArtGenie, Your Magic Brush Awaits</h1>
            <p className="mb-4 text-sm md:text-base p-text pl-6">Create stunning digital paintings effortlessly with ArtGenie. Whether you are a novice or a pro, our intuitive tools and vibrant community will inspire your artistic journey. Start painting your dreams today!</p>
            <button className="cartoon-button-2 bg-sky-600 text-white py-2 px-4 text-lg font-bold rounded-3xl ml-6">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;