import { Card } from "./Card";
import { FearAndGreedLabel } from "./FearAndGreedLabel";
import { FearAndGreedWidget } from "./FearAndGreedWidget";

export function FearAndGreedCard() {
  return (
    <Card>
      <div className="grow flex flex-col justify-between">
        <h3 className="text-xl font-semibold">Fear and Greed</h3>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold">56%</h1>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-300"></div>
            <p>Neutral</p>
          </div>
        </div>
        <FearAndGreedWidget percentage={56} />
        <div className="flex justify-between">
          <span>
            Yesterday <FearAndGreedLabel value={21} />
          </span>
          <span>
            Last Month <FearAndGreedLabel value={61} />
          </span>
        </div>
      </div>
    </Card>
  );
}
