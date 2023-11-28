import React from "react";
import { getAllPredict, deleteHistory, updateStatus } from "../../../utils/api";
import AllPredictList from "../../admincomponents/AllPredictsList.jsx";
import SearchBarPredict from "../../admincomponents/SearchBarPredict.jsx";

function PredictDataWraper({ keywordChange }) {
    return <PredictsData keywordChange={keywordChange} />;
}

class PredictsData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            predict: [],
            keyword: props.defaultKeyword || "",
            selectedOption: 'userId', 
        };

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
        this.onOptionChangeHandler = this.onOptionChangeHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onUpdateStatusHandler = this.onUpdateStatusHandler.bind(this);
    }

    async componentDidMount() {
        const { data } = await getAllPredict();

        this.setState({
            predict: data,
        });
    }

    onKeywordChangeHandler(keyword) {
        this.setState({
            keyword,
        });
    }

    onOptionChangeHandler(option) {
        this.setState({
            selectedOption: option,
        });
    }

    async onDeleteHandler(id) {
        await deleteHistory(id);
        const { data } = await getAllPredict();
        this.setState({
            predict: data,
        });
    }
    
    async onUpdateStatusHandler(id) {
        await updateStatus(id);
        const { data } = await getAllPredict();
        this.setState({
            predict: data,
        });
    }

    render() {
        const filteredPredicts = this.state.predict.filter(predict => {
            if (this.state.selectedOption === 'userId') {
                return predict.userId.toString().includes(this.state.keyword);
            } else if (this.state.selectedOption === 'kelas') {
                return predict.kelas.toLowerCase().includes(this.state.keyword.toLowerCase());
            }
            return false;
        });

        return (
            <div className="mx-auto bg-slate-200 min-vh-100">
                <div className="container mx-auto py-20">
                    <h1 className="text-center text-2xl mt-5 mb-5 font-semibold text-sky-900">
                        Hasil Prediksi Oleh Users
                    </h1>
                    <SearchBarPredict
                        selectedOption={this.state.selectedOption}
                        keyword={this.state.keyword}
                        keywordChange={this.onKeywordChangeHandler}
                        handleOptionChange={this.onOptionChangeHandler}
                    />
                    <AllPredictList savepredict={filteredPredicts} onDelete={this.onDeleteHandler} onUpdateStatus={this.onDeleteHandler} />
                </div>
            </div>
        );
    }
}

export default PredictDataWraper;
