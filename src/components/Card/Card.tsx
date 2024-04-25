import CardContent from "../CardContent/CardContent";
import CardCredit from "../CardCredit/CardCredit";
import CardImage from "../CardImage/CardImage";
import Cardlabel from "../CardLabel/Cardlabel";

export default function Card() {
  return (
    <main className="h-dvh bg-custom-yellow flex justify-center items-center">
      <div className="w-96 bg-white flex flex-col gap-6 p-8 rounded-2xl shadow-[8px_8px_0px_1px_rgba(0,0,0,0.3)] shadow-black border-1 border-black ">
        <CardImage />
        <Cardlabel />
        <CardContent />
        <CardCredit />
      </div>
    </main>
  );
}
