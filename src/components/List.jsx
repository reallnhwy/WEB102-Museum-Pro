import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const List = ({ data }) => {

    const shortenUrl = (url) => {
        const parts = url.split('/');
        const lastPart = parts[parts.length - 2];
        return lastPart;
    };

    return (
        <table className='list-table'>
            <thead>
                <tr>
                    <th>Exhibition Title</th>
                    <th>URL</th>
                    <th>Date Start</th>
                    <th>Date End</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id} className="list-row">
                        <td className='list-cell title'>
                            {/* Use Link component instead of a href */}
                            <Link to={`/exhibitionDetails/${item.id}`}>{item.title.toUpperCase()}</Link>
                        </td>
                        <td className='list-cell '><a href={item.url}>{shortenUrl(item.url)}</a></td>
                        <td className='list-cell'>{item.date_start}</td>
                        <td className='list-cell'>{item.date_end}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default List;
