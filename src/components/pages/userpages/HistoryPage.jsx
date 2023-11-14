import React from "react";
import { getPredictUser, deleteHistory } from "../../../utils/api";
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
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    async componentDidMount() {
        const { data } = await getPredictUser();

        this.setState(() => {
            return {
                users: data,
            };
        });
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            };
        });
        this.props.keywordChange(keyword);
    }

    async onDeleteHandler(id) {
        await deleteHistory(id);
        const { data } = await getPredictUser();
        this.setState(() => {
            return {
                users: data,
            };
        });
    }

    render() {
        return (
            <div  className="bg-gradient-to-r from-red-300 via-yellow-200 to-emerald-300 min-h-screen flex flex-col items-center">
                <div className="container py-5 lg:w-1/2">
                    <h1 className="text-center mb-5 mt-5 text-2xl font-semibold text-sky-900">History Prediksi</h1>
                    <HistoryList savepredict={this.state.users} onDelete={this.onDeleteHandler} />
                </div>
            </div>
        );
    }
}

export default DataPredictWrapper;
