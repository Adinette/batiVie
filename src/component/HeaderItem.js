import Link from 'next/link';


export const HeaderItem = ({
  title,
  url,
  className,
}) => {
  
  return (
    <>
      <li
        className={`nav-item me-4 ${className ?? ''}`}>
        <Link className="nav-link" title={title} href={`/${url}`}>
          <span>{title}</span>
        </Link>
      </li>
    </>
  );
};
