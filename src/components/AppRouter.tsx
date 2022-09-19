import { FC, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AboutWithConnect } from 'src/pages/About';
import { Articles } from 'src/pages/Articles';
import { ChatPage } from 'src/pages/ChatPage';
import { Main } from 'src/pages/Main';
// import { Profile } from 'src/pages/Profile';
import { ChatList } from './ChatList';
import { Header } from './Header';
import { SignIn } from './../pages/SignIn';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const Profile = lazy(() =>
  Promise.all([
    import('../pages/Profile').then(({ Profile }) => ({
      default: Profile,
    })),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExport]) => moduleExport)
);

export const AppRouter: FC = () => (
  <Routes>
    <Route path="/" element={<Header />}>
      <Route index element={<Main />} />
      <Route
        path="profile"
        element={<PrivateRoute component={<Profile />} />}
      />
      <Route path="about" element={<AboutWithConnect />} />
      <Route path="signin" element={<PublicRoute component={<SignIn />} />} />
      <Route path="chats" element={<PrivateRoute />}>
        <Route index element={<ChatList />} />
        <Route path=":chatId" element={<ChatPage />} />
      </Route>
      <Route path="articles" element={<Articles />} />
    </Route>
    <Route path="*" element={<div>404 page</div>} />
  </Routes>
);
