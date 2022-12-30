// rfc
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendSortTypeToStoreAction } from '../reduxFile/actions';
import './ButtonSort.css';

const ButtonSort = () => {

    // useState - KHAI BAO
    const [sortType, setSortType] = useState('ten_tangdan');

    // useDispatch - KHAI BAO
    const dispatch = useDispatch();

    // clickSaveSortTypeToState
    const clickSaveSortTypeToState = (sortTypeValue)=>{
        setSortType(sortTypeValue);
        dispatch(sendSortTypeToStoreAction(sortTypeValue));
    }

    // RENDER :
    return (
        <>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={() =>{clickSaveSortTypeToState('ten_tangdan')}}>
                            <a role="button" href='/#'>
                                <span className={(sortType === 'ten_tangdan')?('activeSort fa fa-sort-alpha-asc pr-5'):('fa fa-sort-alpha-asc pr-5')} >
                                    Tên A-Z
                                </span>
                            </a>
                        </li>
                        <li onClick={() =>{clickSaveSortTypeToState('ten_giamdan')}}>
                            <a role="button" href='/#'>
                                <span className={(sortType === 'ten_giamdan')?('activeSort fa fa-sort-alpha-desc pr-5'):('fa fa-sort-alpha-desc pr-5')} >
                                    Tên Z-A
                                </span>
                            </a>
                        </li>
                        <li role="separator" className="divider" />
                        <li onClick={() =>{clickSaveSortTypeToState('trangthai_kichhoat')}}>
                            <a role="button" className={(sortType === 'trangthai_kichhoat')?('activeSort'):('')} href='/#' >
                                Trạng Thái Kích Hoạt
                            </a>
                        </li>
                        <li onClick={() =>{clickSaveSortTypeToState('trangthai_an')}}>
                            <a role="button" className={(sortType === 'trangthai_an')?('activeSort'):('')} href='/#'>Trạng Thái Ẩn</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ButtonSort;
