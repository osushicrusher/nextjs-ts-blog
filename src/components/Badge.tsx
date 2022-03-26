export default function Badge({ arg }) {
  return (
    <>
      <span
        className={`inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium bg-${arg.color}-100 text-${arg.color}-800`}
      >
        {arg.name}
      </span>
    </>
  );
}
