import { FaCircleCheck } from "react-icons/fa6";

export default function WorkingAreaNameBox({ title }: { title: string }) {
  return (
    <div className="flex  gap-5">
      <FaCircleCheck color="#6AB15A" size={32} />
      <h3>{title}</h3>
    </div>
  );
}
