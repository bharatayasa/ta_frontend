import React from "react";
import { getPredictUser, deleteHistory } from "../utils/api";
import AccordionList from "../component/predictcomponent/AccordionList";

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
            <div className="container py-5">
                <h1 className="text-center mb-5">History prediksi</h1>
                <AccordionList savepredict={this.state.users} onDelete={this.onDeleteHandler} />
            </div>
        );
    }
}

export default DataPredictWrapper;
