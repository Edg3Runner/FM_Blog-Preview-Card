import CardContent from "../CardContent/CardContent";
import CardCredit from "../CardCredit/CardCredit";
import CardImage from "../CardImage/CardImage";
import Cardlabel from "../CardLabel/Cardlabel";

export default function Card() {
  return (
    <main className="h-dvh bg-custom-yellow flex justify-center items-center">
      <div className="w-80 bg-white flex flex-col gap-6 p-8 rounded-2xl">
        <CardImage />
        <Cardlabel />
        <CardContent />
        <CardCredit />
      </div>
    </main>
  );
}
