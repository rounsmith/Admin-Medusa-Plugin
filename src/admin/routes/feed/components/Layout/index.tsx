import { Container, Heading } from '@medusajs/ui';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import SideBar from './Sidebar';
import { stringCapitalized } from '../../libs/strings';

const Layout = () => {
  const { pathname } = useLocation();
  const title = stringCapitalized(pathname.split('/').pop());

  return (
    <Container className="h-full flex py-0 pl-0">
      <SideBar />
      <div className="basis-5/6 p-3.5">
        <Heading className="h-[5%]">{title}</Heading>
        <div className="h-[95%]">
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default Layout;
