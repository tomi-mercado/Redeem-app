import Coin from './Coin';

export interface PointsProps {
  amount: number;
}

export default function Points({ amount }: PointsProps) {
  return (
    <div className="bg-gray-200 rounded-3xl flex items-center p-3 justify-around">
      <p className="typography-gray mr-2">{amount}</p>
      <Coin height={30} width={30} />
    </div>
  );
}
