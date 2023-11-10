import React, { Component } from "react";
import { getAllPredict, deleteHistory } from "../../../utils/api";
import AllPredictList from "../../admincomponents/AllPredictsList";
import SearchBarPredict from "../../admincomponents/SearchBarPredict";
import { useSearchParams } from 'react-router-dom';

function PredictDatasWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }
    return <PredictsData defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class PredictsData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            savepredict: [],
            keyword: props.defaultKeyword || "",
            selectedOption: 'userId',
        };

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onOptionChangeHandler = this.onOptionChangeHandler.bind(this);
    }

    async componentDidMount() {
        const { data } = await getAllPredict();

        this.setState({ getAllPredict: data });
    }

    onKeywordChangeHandler(keyword) {
        this.setState({ keyword });
        this.props.keywordChange(keyword);
    }

    onOptionChangeHandler(option) {
        this.setState({ selectedOption: option });
    }

    onDeleteHandler = async id => {
        try {
            await deleteHistory(id);
            const { data } = await getAllPredict();
            this.setState({ savepredict: data });
        } catch (error) {
            console.error("Error deleting history:", error);
        }
    }

    filterUsersByOption(predict) {
        const { selectedOption, keyword } = this.state;

        if (selectedOption === 'userId') {
            return predict.userId.toLowerCase().includes(keyword.toLowerCase());
        } else if (selectedOption === 'username') {
            return predict.kelas.toLowerCase().includes(keyword.toLowerCase());
        } else if (selectedOption === 'kelas')
        return false;
    }

    render() {
        return (
            <div className="mx-auto bg-slate-200 min-vh-100">
                <div className="container py-5">
                    <h1 className="text-center text-2xl mt-5 mb-5 font-semibold text-sky-900">Hasil Prediksi Users</h1>
                    <SearchBarPredict 
                        selectedOption={this.state.selectedOption}
                        keyword={this.state.keyword}
                        keywordChange={this.onKeywordChangeHandler}
                        handleOptionChange={this.onOptionChangeHandler}
                    />
                    <AllPredictList savepredict={this.state.savepredict} onDelete={this.onDeleteHandler}/>
                </div>
            </div>
        );
    }
}

export default PredictDatasWrapper;