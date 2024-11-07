import cn from "classnames";
export default function AboutUsCard({
  title,
  description,
  isGreen,
  Icon,
}: {
  description: string;
  title: string;
  isGreen: boolean;
  Icon: JSX.Element;
}) {
  return (
    <div
      className={cn(
        "w-full flex flex-col rounded-md text-center  items-center p-10",
        isGreen ? "bg-lightLime text-white" : "bg-white text-black"
      )}
    >
      {Icon}
      <h3 className="text-3xl mb-6 font-medium">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
