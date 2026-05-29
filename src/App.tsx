/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Explore from './pages/Explore';
import ProfileRoute from './pages/ProfileRoute';
import Login from './pages/Login';
import CharProfiles from './pages/CharProfiles';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Explore />} />
          <Route path="login" element={<Login />} />
          <Route path="characters" element={<CharProfiles />} />
          <Route path=":username" element={<ProfileRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
