import { useLocation, matchPath } from 'react-router';

const Item = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const location = useLocation();
  const isActive = !!matchPath(href, location.pathname);
  const className = isActive ? 'active' : '';

  return (
    <li className={className}>
      <a href={href}>{children}</a>
    </li>
  );
};

export default Item;
