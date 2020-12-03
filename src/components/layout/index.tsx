import React from 'react';

import { Container } from './styles';
import LeftColumn from '../LeftColumn'
import MiddleColumn from '../MiddleColumn'
import RightColumn from '../RightColumn'
import DesktopHeader from   '../DesktopHeader';
import MobileHeader from   '../MobileHeader';

const Layout: React.FC = () => {
  return (
    <Container>
        <MobileHeader />
        <DesktopHeader />
        <main>
            <LeftColumn />
            <MiddleColumn />
            <RightColumn />
        </main>
    </Container>
    )
}

export default Layout;