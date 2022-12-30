// rfc
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeStatusTaskAction, deleteTaskAction, updateTaskAction } from '../reduxFile/actions';

const TaskItem = (props) => {

    // useDispatch - KHAI BAO
    const dispatch = useDispatch();

    // RENDER - ES6 :
    let { id, name, status, index } = props;

    // RENDER - RETURN
    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td className="text-center">
                    <span className={status === true ? 'label label-success' : 'label label-danger'} onClick={() =>{ dispatch(changeStatusTaskAction(id))}}>
                        {status === true ? 'Kích Hoạt' : 'Ẩn'} 
                  </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={() =>{ dispatch(updateTaskAction(id))}} >
                        <span className="fa fa-pencil mr-5" />Sửa
                  </button>
                  &nbsp;    
                  <button type="button" className="btn btn-danger" onClick={() =>{ dispatch(deleteTaskAction(id))}} >
                        <span className="fa fa-trash mr-5" />Xóa
                  </button>
                </td>
            </tr>
        </>
    );
}

export default TaskItem;
