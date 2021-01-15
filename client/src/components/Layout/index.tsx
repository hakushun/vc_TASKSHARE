import React from 'react';
import { Header } from '../_organisms/Header';

type Props = {
  children: React.ReactNode;
};
export const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
  </>
    <main id="main" tabIndex={-1}>
      {children}
    </main>
);
