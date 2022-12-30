// rfc
import React from 'react';

// import - useDispatch
import { toggleDisplayFormAction } from '../reduxFile/actions';
import { useDispatch } from 'react-redux';


const ButtonAdd = () => {

    // khai báo - useDispatch
    const dispatch = useDispatch();

    // RENDER -
    return (
        <>
            <button type="button" className="btn btn-primary mr-5" onClick={() => { dispatch(toggleDisplayFormAction()) }} >
                <span className="fa fa-plus mr-5" />
                Thêm Công Việc
            </button>
        </>
    );
}

export default ButtonAdd;