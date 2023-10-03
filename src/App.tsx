
import ArtistsPage from './pages/ArtistsPage';
import AlbumsPage from './pages/AlbumsPage';
import SongsPage from './pages/SongsPage';
import AlbumDetailPage from './pages/AlbumdetailPage';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import PageNotFoundPage from './pages/PageNotFoundPage';
import './App.css';
import ArtistDetailPage from './pages/ArtistDetailPage';
import SongDetailPage from './pages/SongDetailPage';


function App() {
  const getStyle = (isActive: boolean, isPending: boolean): string => {
    const menuStyle = isActive ? "activeMenuItem" : "inActiveMenuItem";
    return `${menuStyle} menuItem`
  }
  return (
    <BrowserRouter>
      <div>
        <div style={{ backgroundColor: "#fff" }}>
          <NavLink to="/" className={({ isActive, isPending }) => getStyle(isActive, isPending)
          }>Home</NavLink>
          <NavLink to="/albums" className={({ isActive, isPending }) => getStyle(isActive, isPending)}>Albums</NavLink>
          <NavLink to="/songs" className={({ isActive, isPending }) => getStyle(isActive, isPending)}>Songs</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<ArtistsPage />} />
          <Route path="/artists" element={<ArtistsPage />} />
          <Route path="/artists/:id" element={<ArtistDetailPage />} />
          <Route path="/albums" element={<AlbumsPage />} />
          <Route path="/albums/:id" element={<AlbumDetailPage />} />
          <Route path="/songs" element={<SongsPage />} />
          <Route path="/songs/:id" element={<SongDetailPage />} />
          <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

