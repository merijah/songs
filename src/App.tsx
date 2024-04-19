import { useState } from "react";
import ArtistsPage from "./pages/ArtistsPage";
import AlbumsPage from "./pages/AlbumsPage";
import SongsPage from "./pages/SongsPage";
import AlbumDetailPage from "./pages/AlbumdetailPage";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import PageNotFoundPage from "./pages/PageNotFoundPage";
import "./App.css";
import ArtistDetailPage from "./pages/ArtistDetailPage";
import SongDetailPage from "./pages/SongDetailPage";
import CreateArtistPage from "./pages/CreateArtistsPage";
import { Menu } from "antd";
import UpdateArtistPage from "./pages/UpdateArtistsPage";
import createSongPage from "./pages/CreateSongsPage";
import UpdateSongPage from "./pages/UpdateSongPage";
import CreateSongsPage from "./pages/CreateSongsPage";
import CreateAlbumPage from "./pages/CreateAlbumPage";
import UpdateAlbumPage from "./pages/UpdateAlbumPage";

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       [elemName: string]: any;
//     }
//   }
// }

function App() {
  const getStyle = (isActive: boolean, isPending: boolean): string => {
    const menuStyle = isActive ? "activeMenuItem" : "inActiveMenuItem";
    return `${menuStyle} menuItem`;
  };
  const [current, setCurrent] = useState("artists");
  const items = [
    {
      label: <Link to="/artists">Artists</Link>,
      key: "artists",
    },
    {
      label: <Link to="/albums">Albums</Link>,
      key: "albums",
    },
    {
      label: <Link to="/songs">Songs</Link>,
      key: "songs",
    },
  ];
  const onClick = (e: any) => {
    setCurrent(e.key);
  };
  return (
    <div className="body-container">
      <BrowserRouter>
        <div style={{ width: "80%", marginLeft: "25%" }}>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            style={{ backgroundColor: "transparent" }}
          />

          <Routes>
            <Route path="/" element={<ArtistsPage />} />
            <Route path="/artists" element={<ArtistsPage />} />
            <Route path="/artists/:id" element={<ArtistDetailPage />} />
            <Route path="/artists/create" element={<CreateArtistPage />} />
            <Route path="/artists/update/:id" element={<UpdateArtistPage />} />
            <Route path="/albums" element={<AlbumsPage />} />
            <Route path="/albums/:id" element={<AlbumDetailPage />} />
            <Route path="/albums/create" element={<CreateAlbumPage />} />
            <Route path="/albums/update/:id" element={<UpdateAlbumPage />} />
            <Route path="/songs" element={<SongsPage />} />
            <Route path="/songs/:id" element={<SongDetailPage />} />
            <Route path="/songs/create" element={<CreateSongsPage />} />
            <Route path="/songs/update/:id" element={<UpdateSongPage />} />
            <Route path="*" element={<PageNotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
