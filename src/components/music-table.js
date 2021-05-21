import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import axios from 'axios';

const MusicTable = (props) => {

	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get(`http://localhost:8000/music`)
		.then(res => {
			setData(res.data);
		})
	}, [])

	return (
		<React.Fragment>
			<Table hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Title</th>
						<th>Artist</th>
						<th>Album</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, idx) => (
						<tr key={idx}>
							<th>{item.id}</th>
							<td>{item.title}</td>
							<td>{item.artist}</td>
							<td>{item.album}</td>
							<td>{item.release_date}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</React.Fragment>
	);
};

export default MusicTable;
