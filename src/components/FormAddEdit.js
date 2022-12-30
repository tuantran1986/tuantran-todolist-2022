// rfc

// import : USE STATE + USE EFFECT 
import React, { useState, useEffect } from 'react';

// import : USE SELECTOR + USE DISPATCH 
import { useDispatch, useSelector } from 'react-redux';
import { closeFormAction, addOrEditTaskAction, clearTaskEdittingAction } from '../reduxFile/actions';

const FormAddEdit = () => {

    // 1.useDispatch : khai báo USE DISPATCH :
    const dispatch = useDispatch();

    // 3.useState : 
    const initialState = {
        id: null,
        name: '',
        status: true
    }
    const [task, setTask] = useState(initialState);

    // 2.useSelector : khai báo USE SELECTOR :
    const taskEditting = useSelector(state => state.taskReducer.taskEditting);

    // 4.useEffect : dependencies - là mảng có phần tử - CYDB
    // EFFECT chạy : khi phần tử thay đổi giá trị = COMPONENT WILL RECEIVE PROPS.
    useEffect(() => {
        setTask({
            id: taskEditting.id,
            name: taskEditting.name,
            status: taskEditting.status
        })
    }, [taskEditting.id]);

    // onChangeSaveTaskToState
    const onChangeSaveTaskToState = (event) => {
        // console.log(event.target.name);
        // console.log(event.target.value);
        // console.log(event.target.type);

        if (event.target.name === 'name') {
            setTask({ ...task, name: event.target.value });
        };
        // chú ý : mặc định là TRUE - nếu không ONCHANGE - thì nó là true BOOL
        if (event.target.name === 'status') {
            let statusBool = (event.target.value === 'true') ? (true) : (false);
            setTask({ ...task, status: statusBool });
        };
    }

    // onSubmitSendTaskToStore
    const onSubmitSendTaskToStore = (event) => {
        event.preventDefault();
        dispatch(addOrEditTaskAction(task.id, task.name, task.status));
        // xoa trang nhap lieu
        setTask({
            id: null,
            name: '',
            status: true
        })
    }
    // resetForm
    const resetForm = (event) => {
        event.preventDefault();
        dispatch(clearTaskEdittingAction());
    }

    // RENDER - RETURN
    return (
        <>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className={task.id === null ? "panel panel-primary" : "panel panel-warning"}>
                    <div className="panel-heading ">
                        <h3 className="panel-title">
                            {task.id === null ? 'Thêm Công Việc' : 'Sửa Công Việc'}
                            <i className="fa fa-times-circle" style={{ float: 'right' }} onClick={() => { dispatch(closeFormAction()) }} ></i>
                        </h3>
                    </div>
                    <div className="panel-body ">
                        <form>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input name='name' value={task.name} onChange={(event) => { onChangeSaveTaskToState(event) }} type="text" className="form-control" />
                            </div>
                            <label>Trạng Thái :</label>
                            <select name='status' value={task.status} onChange={(event) => { onChangeSaveTaskToState(event) }} className="form-control" required="required">
                                <option value={true}>Kích Hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br />
                            <div className="text-center">
                                <button type="submit" className={task.id === null ? "btn btn-primary" : "btn btn-warning"}  onClick={(event) => { onSubmitSendTaskToStore(event) }}>
                                    {task.id === null ? 'Thêm' : 'Sửa'}
                                </button>
                                &nbsp;
                                <button type="reset" className="btn btn-danger" onClick={(event) => { resetForm(event) }}>
                                    Hủy Bỏ
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormAddEdit;
