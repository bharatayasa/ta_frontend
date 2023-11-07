import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import DeleteButton from "../DeleteButton";
import EditUser from "./EditUser";
import moment from "moment";

function AllUsersList({ users, onDelete}) {
	return (
		<div>
			<div>
				<Table>
				<thead>
					<tr className="text-center">
						<th>No</th>
						<th>ID</th>
						<th>Username</th>
						<th>Name</th>
						<th>Role</th>
						<th>E-mail</th>
						<th>Created at</th>
						<th>Updated at</th>
						<th>Aksi</th>
					</tr>
				</thead>
				<tbody className="bg-transparent">
					{users.map((user, index) => (
					<tr key={user.id}>
						<td className="text-center">
						<b>{index + 1}</b>
						</td>
						<td className="text-center">{user.id}</td>
						<td>{user.username}</td>
						<td>{user.name}</td>
						<td>{user.role}</td>
						<td>{user.email}</td>
						<td>{moment(user.created_at).format('DD MMMM YYYY')}</td>
						<td>{moment(user.updated_at).format('DD MMMM YYYY')}</td>
						<td className="text-center">
						<div className="flex justify-evenly">
							<div>
								<EditUser user={user}/>
							</div>
							<div>
								<DeleteButton id={user.id} onDelete={onDelete} />
							</div>
						</div>
						</td>
					</tr>
					))}
				</tbody>
				</Table>
			</div>
		</div>
	);
}

AllUsersList.propTypes = {
	users: PropTypes.arrayOf(
	PropTypes.shape({
		id: PropTypes.number.isRequired,
		username: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		role: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		created_at: PropTypes.string.isRequired,
		updated_at: PropTypes.string.isRequired,
		})
	).isRequired,
	onDelete: PropTypes.func.isRequired,
};

export default AllUsersList;
