export default function ProgressBar({ width }: { width: number }) {
  return (
    <div className="w-full bg-green-100 h-2 rounded-full">
      <div
        className="bg-lightLime h-full rounded-full"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
