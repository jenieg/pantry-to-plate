import PantryToPlate from "/pantry.webp"

const Header = () => {
    return (
        <header className="max-w-7xl flex justify-center items-baseline p-3 shadow-sm">
            <img src={PantryToPlate} alt="Pantry to Plate Logo" className="max-h-8 pr-2"/>
            <h1 className="text-3xl">Pantry To Plate</h1>
        </header>
    );
};

export default Header;
