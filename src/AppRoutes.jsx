import {Route, Routes} from 'react-router-dom';
import {Layout} from './components';
import {Contacts, NotFoundPage, PostPage, Posts} from './components/pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Posts />} />
        <Route path=":id" element={<PostPage />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
