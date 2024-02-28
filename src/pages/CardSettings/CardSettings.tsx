import Card from "@/pages/CardSettings/components/Card/Card.tsx";
import CardTinkoff from "@/pages/CardSettings/components/CardTinkoff/CardTinkoff.tsx";

const CardSettings = () => {
    return (
        <div className="w-full h-lvh bg-slate-100 p-8">
            <h1 className="text-center text-xl mb-10">Card Settings</h1>
            <div className="grid grid-cols-3 gap-6">
                <Card />
                <CardTinkoff />
            </div>
        </div>
    );
};

export default CardSettings;
