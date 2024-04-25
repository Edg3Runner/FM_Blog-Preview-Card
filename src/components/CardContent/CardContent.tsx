export default function CardContent() {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-medium text-sm">Published 21 Dec 2023</p>
      <a className="hover:text-custom-yellow" href="#">
        <h1 className="font-extrabold text-xl">HTML & CSS foundations</h1>
      </a>
      <p className="text-base text-gray-500 font-medium	">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
    </div>
  );
}
