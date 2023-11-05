import React from "react";
import { Container } from "react-bootstrap";
import AllUsersList from "../../admincomponents/AllUsersList";
import { getUsers, deleteUser } from "../../../utils/api";
import { useSearchParams } from 'react-router-dom';
import SearchBar from "../../admincomponents/SearchBar";
import AddUser from "../../admincomponents/AddUser";

function UsersDatasWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
        }
        return <UsersData  defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class UsersData  extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            users: [],
            keyword: props.defaultKeyword || '',
        }
    
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    async componentDidMount() {
        const { data } = await getUsers();
        
        this.setState(() => {
            return {
                users: data
            }
        })
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });
        this.props.keywordChange(keyword);
    }

    async onDeleteHandler(id) {
        await deleteUser(id);

        const { data } = await getUsers();

        this.setState(() => {
            return {
                users: data
            }
        });
    }

    render () {
        const users = this.state.users.filter((user) => {
            return user.name.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });
        return (
            <Container>
                <div className="py-5">
                <section>
                    <h2 className="text-center">Data Users</h2>
                    <AddUser />
                    <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                    <AllUsersList users={users} onDelete={this.onDeleteHandler} />
                </section>
                </div>
            </Container>
            )
        }
    }

    export default UsersDatasWrapper;
