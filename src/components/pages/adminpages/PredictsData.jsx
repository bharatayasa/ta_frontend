import React from "react";
import { getAllPredict, deleteHistory } from "../../../utils/api";
import AllPredictList from "../../admincomponents/AllPredictsList";

function PredictDataWraper({ keywordChange }) {
    return <PredictsData keywordChange={keywordChange} />;
}

class PredictsData extends React.Component {
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
        <div className="mx-auto bg-slate-200 min-vh-100">
            <div className="container py-5">
                <h1 className="text-center text-2xl mt-5 mb-5 font-semibold text-sky-900">Hasil prediksi oleh user</h1>
                <AllPredictList
                savepredict={this.state.users}
                onDelete={this.onDeleteHandler}
                />
            </div>
        </div>
        );
    }
}

export default PredictDataWraper;
