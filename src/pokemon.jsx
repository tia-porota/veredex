import { useParams } from "react-router";
import { Card } from "./Card";
import results from "./mockup/cards.json";
export default function indPoke() {
  const id = useParams().id - 1;
  console.log(results[id]);
  const poke = results[id]
  return (
    <div className="h-dvh w-dvw m-6 flex flex-row">
      <span className="mx-4 w-1/4">
        <Card ind={id} className="flex-col" />
      </span>
      <span className="">
        <header className="text-4xl text-gray-50">{poke.name[0].toUpperCase() +poke.name.slice(1)}</header>
        <main>
            <p></p>
        </main>
      </span>
    </div>
  );
}
