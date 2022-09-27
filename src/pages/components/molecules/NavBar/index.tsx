import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CustomLink from '~/pages/components/atom/CustomLink';

function NavBar() {
  return (
    <article className="gnb-container">
      <header>
        <nav>
          <section>
            <Link href="/">
              <a className="logo-link">
                <div className="logo-wrapper">
                  <Image src="/static/netflix.svg" alt="Netflix" width={111} height={30} />
                </div>
              </a>
            </Link>
            <CustomLink href="/">Home</CustomLink>
            <CustomLink href="/favorite">Favorite</CustomLink>
          </section>
          <section>
            <CustomLink href="/">Sign In</CustomLink>
          </section>
        </nav>
      </header>
    </article>
  );
}

export default NavBar;
