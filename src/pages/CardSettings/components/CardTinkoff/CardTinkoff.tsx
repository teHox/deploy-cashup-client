import accept from "@/assets/img/accept-black.png";
import card from "@/assets/img/tinkoff-card.png";
import { useState } from "react";

const Card = () => {
    const [cardNumber, setCardNumber] = useState("4444 4444 4444 4444");
    return (
        <div>
            <h3 className="text-xl mb-3">Tinkoff Card</h3>
            <div
                style={{
                    backgroundImage: `url(${card})`,
                    width: "300px",
                    height: "190px",
                }}
                className="bg-cover rounded-md relative"
            >
                <input
                    type="text"
                    value={cardNumber}
                    maxLength={19}
                    onChange={(e) => {
                        const val = e.target.value;
                        setCardNumber(
                            val.replace(/\W/gi, "").replace(/(.{4})/g, "$1 "),
                        );
                    }}
                    className="w-52 bg-transparent text-black text-xl absolute left-4 bottom-10 outline-0"
                />
                <div
                    className="w-6 cursor-pointer absolute right-6 bottom-10"
                    onClick={() => alert("Your card saved")}
                >
                    <img src={accept} alt={accept} />
                </div>
            </div>
        </div>
    );
};

export default Card;
