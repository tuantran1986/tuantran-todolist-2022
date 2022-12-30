// rfc
import React from 'react';
import { generateDataAction } from '../reduxFile/actions';
import { useDispatch } from 'react-redux';

const ButtonGenerate = () => {

    // 
    const dispatch = useDispatch();

    // RENDER - RETURN :
    return (
        <>
            <button type="button" className="btn btn-success" onClick={() => { dispatch(generateDataAction()) }}>
                <span className="fa fa-cog mr-5" />GENERATE / RESET_DATA
            </button>
        </>
    );
}

export default ButtonGenerate;
