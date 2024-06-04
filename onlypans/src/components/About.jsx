import aboutImage from "../assets/aboutimage.jpg";
export const About =() => {
    return (
        <div className="bg-white">
            <div className="p-24 grid gris-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About us</h2>
                    <p className="text-lg">
                    Découvrez OnlyPans, la compagnie de restauration qui réinvente vos plats préférés. Spécialisés dans la gastronomie et la bistronomie, nous proposons une 
                    expérience culinaire unique, alliant qualité, créativité et saveurs authentiques. Notre 
                    équipe de chefs passionnés s'engage à utiliser des ingrédients frais et locaux pour créer des plats qui éveilleront vos papilles. Que vous 
                    soyez un fin gourmet ou un amateur de bonne cuisine, OnlyPans est le choix idéal pour une expérience culinaire mémorable. Rejoignez-nous et laissez-vous 
                    séduire par notre univers gourmand.</p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt=""className="w-[400px] h-[400px] object-cover"/>
                </div>
            </div>
        </div>
    )
}