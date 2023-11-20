import React, { Component } from "react";
import AllUsersList from "../../admincomponents/AllUsersList.jsx";
import { getUsers, deleteUser } from "../../../utils/api";
import { useSearchParams } from 'react-router-dom';
import AddUser from "../../admincomponents/AddUser.jsx";
import SearchBar from "../../admincomponents/SearchBar.jsx";

function UsersDatasWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }
    return <UsersData defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class UsersData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            keyword: props.defaultKeyword || '',
            selectedOption: 'id',
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
        this.onOptionChangeHandler = this.onOptionChangeHandler.bind(this);
    }

    async componentDidMount() {
        const { data } = await getUsers();

        this.setState({ users: data });
    }

    onKeywordChangeHandler(keyword) {
        this.setState({ keyword });
        this.props.keywordChange(keyword);
    }

    onOptionChangeHandler(option) {
        this.setState({ selectedOption: option });
    }

    async onDeleteHandler(id) {
        await deleteUser(id);
        const { data } = await getUsers();
        this.setState({ users: data });
    }

    filterUsersByOption(user) {
        const { selectedOption, keyword } = this.state;

        if (selectedOption === 'username') {
            return user.username.toLowerCase().includes(keyword.toLowerCase());
        } else if (selectedOption === 'name') {
            return user.name.toLowerCase().includes(keyword.toLowerCase());
        } else if (selectedOption === 'email') {
            return user.email.toLowerCase().includes(keyword.toLowerCase());
        } else if (selectedOption === 'id') {
            return String(user.id).toLowerCase().includes(keyword.toLowerCase());
        }
        
        return false;
    }

    render() {
        const users = this.state.users.filter(user => this.filterUsersByOption(user));

        return (
            <div className=" bg-slate-200 ">
                <div className="py-20 container mx-auto">
                    <div>
                        <h2 className="text-center text-2xl mt-5 font-semibold text-sky-900">Data Users</h2>
                        <AddUser />
                        <SearchBar selectedOption={this.state.selectedOption} keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} handleOptionChange={this.onOptionChangeHandler}/>
                        <AllUsersList users={users} onDelete={this.onDeleteHandler} />
                    </div>
                </div>
            </div>
        );
    }
}

export default UsersDatasWrapper;
