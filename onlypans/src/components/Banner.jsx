import Button from "./elements/Button";
export const Banner =() => {
    return (
        <div className="banner w-full md:2/3 px-7 mx-auto relative flex items-center-justify-between">
            <div className="banner-description w-full md:w1/2 p-3">
                <h2 className="mb-6 text-4xl font-bold text-white">
                    Food Ordering Made Cocky
                </h2>
                <p className="font-semibold text-lg text-red-600 py-2">
                    Get Started Today Cock
                </p>
                <div className="btn-container">
                    <Button>Order Now</Button>
                    <a href="menu" className="text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3">
                        See the Cock Menu
                    </a>
                </div>
            </div>
            {/* <div className="video w-full md:w1/2 p-3 flex justify-end">
                <video className="max-h-95" autoPlay loop muted>
                    <source src={require("../assets/sexybroll.mp4")} alt="banner" className="max-h-95"/>
                </video>
            </div> */}   
        </div>
    )
}