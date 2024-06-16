import { useState } from "react";
import banner from "../../assets/image/painting.jpg"
import "../../style.css"
import axios from "axios";

const GeneratePainting = () => {

    // const [image, setImage] = useState([])

    const [loading, setLoading] = useState(false)

    const handleGenerate = (e) => {
        setLoading(true)
        e.preventDefault()
        const promptValue = e.target.prompt.value
        console.log(promptValue)
        const prompt = {prompt: promptValue}
        axios.post(`http://localhost:5000/paintings/generate`, prompt)
        .then(res => {
            console.log(res.data)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="px-3 md:px-28 text-neutral-content w-full">
                    <div className="md:w-[85%]">
                        <h1 className="mb-5 text-4xl md:text-7xl primary border-l-8 pl-6 border-sky-500">Generate Painting</h1>
                        <form onSubmit={handleGenerate}>
                            <div className="w-full mt-4 flex">
                                <input type="text"
                                    placeholder="What kind of painting do you need"
                                    name="prompt"
                                    className="input text-sm md:text-base text-black input-style input-bordered join-item w-full rounded-3xl   py-1 px-4 font-bold" />
                                <button className="cartoon-button-2 text-sm md:text-base bg-sky-600 text-white py-1 px-4 font-bold rounded-3xl rounded-l-sm -ml-24 z-10">Generate</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="w-[85%] mx-auto my-24">
                {loading ?<div className="skeleton md:w-96 h-96"></div>
                //    : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                //         {
                //             image.map((image, index) => <div key={index} className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                //                 style={{ backgroundImage: `url(${image})` }}>
                //                 <div
                //                     className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                //                     <h2 className="mt-4 text-xl font-semibold text-white capitalize">Best website collections</h2>
                //                     <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Website</p>
                //                 </div>
                //             </div>)
                //         }
                //     </div>
                :""
                }
            </div>
        </div>
    );
};

export default GeneratePainting;