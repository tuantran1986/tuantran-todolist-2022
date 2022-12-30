// rfc
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { sendKeySearchToStoreAction } from '../reduxFile/actions';

const ButtonSearch = () => {

    // dispatch
    const dispatch = useDispatch();

    // useState
    const [keySearch, setKeySearch] = useState('');

    // onChangeSaveKeySearchToState
    const onChangeSaveKeySearchToState = (event) => {
        // console.log(event.target.name);
        // console.log(event.target.value);
        // console.log(event.target.type);

        setKeySearch(event.target.value);
    }


    // RENDER


    return (
        <>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input name='keySearch' onChange={(event) => { onChangeSaveKeySearchToState(event) }} type="text" className="form-control" placeholder="Nhập từ khóa..." />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button" onClick={() => { dispatch(sendKeySearchToStoreAction(keySearch)) }}>
                            <span className="fa fa-search mr-5" />Tìm
                        </button>
                    </span>
                </div>
            </div>
        </>
    );
}

export default ButtonSearch;
