export default function Divider() {
  return (
    <div className="container relative mx-auto">
      <div aria-hidden="true" className="absolute inset-0 flex items-center w-[90%] mx-auto">
        <div className="w-full border-t border-gray-300" />
      </div>
    </div>
  );
}
