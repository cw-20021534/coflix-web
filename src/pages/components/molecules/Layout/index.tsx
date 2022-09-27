import React from 'react';
import NavBar from '~/pages/components/molecules/NavBar';

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  const { children } = props;
  return (
    <div>
      <NavBar />
      <div>layout</div>
      {children}
    </div>
  );
}

export default Layout;
