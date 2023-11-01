import React from "react";
import { getAllPredict } from "../utils/api";
import { deleteHistory } from "../utils/api";
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

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
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
            <h1 className="text-center mb-5">hasil prediksi oleh user</h1>
            <AllPredictList savepredict={this.state.users} />
        </div>
        );
    }
}

export default DataPredictWrapper;
