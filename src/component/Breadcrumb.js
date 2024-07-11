import Link from "next/link";

export default function Breadcrumb({ content, className }) {
  const list =
    content.length > 1 ? content.slice(0, content.length - 1) : content;
  const last = content.length > 1 ? content[content.length - 1] : null;

  return (
    <div className="breadcrumb mb-0">
      <div className="container">
        <nav aria-label="breadcrumb" className={className}>
          <ol className="d-flex mb-0 p-0">
            {list.map((el) => (
              <li key={el.label} className="breadcrumb-item">
                <Link href={el.url}>{el.label}</Link>
              </li>
            ))}
            {last && (
              <li className="breadcrumb-item active" aria-current="page"> /
                <span className="breadcrumb-item-active">{last.label}</span>
              </li>
            )}
          </ol>
        </nav>
      </div>
    </div>
  );
}
