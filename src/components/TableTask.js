// rfc
import React, { useState } from 'react';
import TaskItem from './TaskItem';

// IMPORT 
import { useSelector } from 'react-redux';

const TableTask = () => {

    // useState - KHAI BAO
    const [filterName, setFilterName] = useState('');
    const [filterStatus, setFilterStatus] = useState(-1);


    // useSelector : LẤY NỘI DUNG STATE : CYDB - (ARROW FUNCTION : state).
    let taskList = useSelector(state => state.taskReducer.taskList);
    let keySearch = useSelector(state => state.taskReducer.keySearch);
    let sortType = useSelector(state => state.taskReducer.sortType);

    // onChangeSaveFilterToState
    const onChangeSaveFilterToState = (event) => {
        // console.log(event.target.name);
        // console.log(event.target.value);
        // console.log(event.target.type);

        if (event.target.name === 'filterName') {
            setFilterName(event.target.value);
        };
        if (event.target.name === 'filterStatus') {
            setFilterStatus(parseInt(event.target.value));
        };
    }

    // 1.FILTER - NAME:
    if (filterName && taskList) {
        let newTaskList1 = taskList.filter((task, index) => (task.name.toLowerCase().indexOf(filterName.toLocaleLowerCase()) !== -1));
        taskList = [...newTaskList1];
    }


    // 2.FILTER - STATUS
    switch (filterStatus) {
        case 0:
            let newTaskList2 = taskList.filter((task, index) => (task.status === false));
            taskList = [...newTaskList2];
            break;
        case 1:
            let newTaskList3 = taskList.filter((task, index) => (task.status === true));
            taskList = [...newTaskList3];
            break;

        default:    // all = -1
            break;
    }

    // 3.FILTER - keySearch
    if (taskList && keySearch) {
        let newTaskList4 = taskList.filter((task, index) => (task.name.toLowerCase().indexOf(keySearch.toLowerCase()) !== -1));
        taskList = [...newTaskList4];
    }

    // 4.SORT - sortType
    if (taskList) {
        switch (sortType) {
            case 'ten_tangdan':
                taskList.sort((a, b) => {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                })
                break;
            case 'ten_giamdan':
                taskList.sort((a, b) => {
                    if (a.name > b.name) return -1;
                    if (a.name < b.name) return 1;
                    return 0;
                })
                break;
            case 'trangthai_an':
                taskList.sort((a, b) => {
                    if (a.status > b.status) return 1;
                    if (a.status < b.status) return -1;
                    return 0;
                })
                break;
            case 'trangthai_kichhoat':
                taskList.sort((a, b) => {
                    if (a.status > b.status) return -1;
                    if (a.status < b.status) return 1;
                    return 0;
                })
                break;

            default:    // all = -1
                break;
        }
    }

    // RENDER - RETURN
    return (
        <>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Trạng Thái</th>
                            <th className="text-center">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td />
                            <td>
                                <input name='filterName' onChange={(event) => { onChangeSaveFilterToState(event) }} type="text" className="form-control" />
                            </td>
                            <td>
                                <select name='filterStatus' onChange={(event) => { onChangeSaveFilterToState(event) }} className="form-control">
                                    <option value={-1}>Tất Cả</option>
                                    <option value={0}>Ẩn</option>
                                    <option value={1}>Kích Hoạt</option>
                                </select>
                            </td>
                            <td />
                        </tr>
                        {/* TASK ITEM */}
                        {
                            (taskList)
                                ?
                                (taskList.map((task, index) => (<TaskItem key={index} index={index} id={task.id} name={task.name} status={task.status} />)))
                                :
                                (null)
                        }
                        {/* HẾT - TASK ITEM */}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TableTask;