import React, { useEffect } from 'react';
import FormAddEdit from './FormAddEdit';
import ButtonAdd from './ButtonAdd';
import ButtonGenerate from './ButtonGenerate';
import ButtonSearch from './ButtonSearch';
import ButtonSort from './ButtonSort';
import TableTask from './TableTask';
import './App.css';
// import
import { useSelector, useDispatch } from 'react-redux';
import { loadDataAction } from '../reduxFile/actions';

function App() {

  // useSelector - KHAI BÁO
  const displayForm = useSelector(state => state.taskReducer.displayForm);

  // useDispatch - KHAI BÁO
  const dispatch = useDispatch();

  // useEffect : dependencies = mảng rỗng [] - chạy 1 lần sau render.
  useEffect(() => {
    dispatch(loadDataAction());
  }, []);

  // RENDER - RETURN
  return (
    <>
      <div className="container">
        <div className="text-center">
          <h2><u>.TUẤN TRẦN. <br/> <b> .TODOLIST - REACT HOOK - REDUX. </b></u></h2>
          <h5>Quản Lý Công Việc (NghiepUIT)</h5>
          <hr/>
        </div>

        <div className="row mt-15">

          {/* DISPLAY - FORM */}
          {
            (displayForm === true)
              ?
              (<FormAddEdit />)
              :
              (null)
          }

          {/* BO CUC - FORM */}
          <div className={(displayForm === true) ? ("col-xs-8 col-sm-8 col-md-8 col-lg-8") : ("col-xs-12 col-sm-12 col-md-12 col-lg-12")}>

            <ButtonAdd />
            <ButtonGenerate />


            <div className="row mt-15">

              <ButtonSearch />
              <ButtonSort />

            </div>
            <div className="row mt-15">

              <TableTask />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;