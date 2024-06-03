import aboutImage from "../assets/aboutimage.jpg";
export const About =() => {
    return (
        <div className="bg-white">
            <div className="p-24 grid gris-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About us</h2>
                    <p className="text-lg">texte que tu veux</p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt=""className="w-[400px] h-[400px] object-cover"/>
                </div>
            </div>
        </div>
    )
}