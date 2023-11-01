import React from "react";
import { getAllPredict, deleteHistory } from "../utils/api";
import AllPredictList from "../component/predictcomponent/AllPredictList";

function DataPredictWrapper({ keywordChange }) {
    return <PrediksiPage keywordChange={keywordChange} />;
}

class PrediksiPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        users: [],
        keyword: props.defaultKeyword || "",
        };

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    async componentDidMount() {
        const { data } = await getAllPredict();

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
        const { data } = await getAllPredict();
        this.setState(() => {
        return {
            users: data,
        };
        });
    }

    render() {
        return (
        <div className="container py-5">
            <h1 className="text-center mb-5">Hasil prediksi oleh user</h1>
            <AllPredictList
            savepredict={this.state.users}
            onDelete={this.onDeleteHandler}
            />
        </div>
        );
    }
}

export default DataPredictWrapper;
