import React from "react";
import { getPredictUser, updateStatusUser, getUserLogged } from "../../../utils/api";
import HistoryList from "./HistoryList.jsx";

function DataPredictWrapper({ keywordChange }) {
    return <HistoryPage keywordChange={keywordChange} />;
}

class HistoryPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            keyword: props.defaultKeyword || "",
            userData: {
                name: '',
            },
        };

        this.onUpdateStatusHandler = this.onUpdateStatusHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    async componentDidMount() {
        const { data } = await getPredictUser();

        this.setState(() => {
            return {
                users: data,
            };
        });

        try {
            const userDataResponse = await getUserLogged();
            this.setState({
                userData: {
                    name: userDataResponse.data.name || '',
                },
            });
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            };
        });
        this.props.keywordChange(keyword);
    }

    async onUpdateStatusHandler(id) {
        await updateStatusUser(id);

        const { data } = await getPredictUser();
        this.setState({
            users: data,
        });
    }

    render() {
        return (
            <div className="bg-gradient-to-tr from-red-300 via-yellow-200 to-emerald-400 min-h-screen flex flex-col items-center">
                <div className="container mt-[55px] lg:mt-14 lg:w-1/2">
                    <h1 className="text-center mb-5 mt-5 text-2xl font-semibold text-sky-900">History Prediksi</h1>
                    <h1 className="mb-5 mt-5 text-lg lg:text-left text-center text-sky-900">history prediksi oleh :  <span className="font-semibold">{this.state.userData.name}</span></h1>
                    <HistoryList savepredict={this.state.users} onUpdateStatus={this.onUpdateStatusHandler} />
                </div>
            </div>
        );
    }
}

export default DataPredictWrapper;
