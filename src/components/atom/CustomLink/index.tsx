// dependency
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props extends React.ComponentProps<typeof Link> {
  children: React.ReactNode;
}

function CustomLink(props: Props) {
  const { children, ...rest } = props;
  const { asPath } = useRouter();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const { as, href } = props;
    const pathname = typeof href === 'string' ? href : href.pathname;
    const linkPathname = new URL((as as URL) || pathname, window.location.href).pathname;
    const activePathname = new URL(asPath, window.location.href).pathname;

    setActive(activePathname === linkPathname);
  }, [asPath, props]);

  return (
    <Link {...rest} passHref>
      <a className={active ? 'active' : ''}>{children}</a>
    </Link>
  );
}

export default React.memo(CustomLink);
