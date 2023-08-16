import React from 'react';
import { IArtist } from '../models/artists';

const ArtistTable = () => {
    return (
        <div>
            <button type="button">Create New</button>
            <table border={1}>
            <tr>
                <th>first name</th>
                <th>last name</th>
                <th>country</th>
                <th>about</th>
                <th>Actions</th>
            </tr>
            <tr>
                <td>meron</td>
                <td>legesse</td>
                <td>A.A</td>
                <td>About meron</td>
                <td>
                    <button type="button">Detail</button>
                    <button type="button">Update</button>
                    <button type="button">Delete</button>
                </td>
            </tr>
            <tr>
                <td>yabtsega</td>
                <td>asfaw</td>
                <td>nazrit</td>
                <td>about artist</td>
                <td>
                    <button type="button">Detail</button>
                    <button type="button">Update</button>
                    <button type="button">Delete</button>
                </td>
            </tr>
            <tr>
                <td>tina</td>
                <td>abera</td>
                <td>bahirdar</td>
                <td>about artist</td>
                <td>
                    <button type="button">Detail</button>
                    <button type="button">Update</button>
                    <button type="button">Delete</button>
                </td>
            </tr>
            <tr>
                <td>natnael</td>
                <td>zeleke</td>
                <td>gondar</td>
                <td>about artist</td>
                <td>
                    <button type="button">Detail</button>
                    <button type="button">Update</button>
                    <button type="button">Delete</button>
                </td>
            </tr>
        </table>
        </div>
    );
}

export default ArtistTable;