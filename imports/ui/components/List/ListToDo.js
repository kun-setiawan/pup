import React from 'react';

const ListToDo = () => (
  <div className="box box-primary">
    <div className="box-header">
      <i className="ion ion-clipboard" />

      <h3 className="box-title">To Do List</h3>

      <div className="box-tools pull-right">
        <ul className="pagination pagination-sm inline">
          <li><a href="#">&laquo;</a></li>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">&raquo;</a></li>
        </ul>
      </div>
    </div>
    { /* /.box-header */ }
    <div className="box-body">
      { /* See dist/js/pages/dashboard.js to activate the todoList plugin */ }
      <ul className="todo-list">
        <li>
          { /* drag handle */ }
          <span className="handle">
            <i className="fa fa-ellipsis-v" />
            <i className="fa fa-ellipsis-v" />
          </span>
          { /* checkbox */ }
          <input type="checkbox" value="" />
          { /* todo text */ }
          <span className="text">Design a nice theme</span>
          { /* Emphasis label */ }
          <small className="label label-danger"><i className="fa fa-clock-o" /> 2 mins</small>
          { /* General tools such as edit or delete */ }
          <div className="tools">
            <i className="fa fa-edit" />
            <i className="fa fa-trash-o" />
          </div>
        </li>
        <li>
          <span className="handle">
            <i className="fa fa-ellipsis-v" />
            <i className="fa fa-ellipsis-v" />
          </span>
          <input type="checkbox" value="" />
          <span className="text">Make the theme responsive</span>
          <small className="label label-info"><i className="fa fa-clock-o" /> 4 hours</small>
          <div className="tools">
            <i className="fa fa-edit" />
            <i className="fa fa-trash-o" />
          </div>
        </li>
        <li>
          <span className="handle">
            <i className="fa fa-ellipsis-v" />
            <i className="fa fa-ellipsis-v" />
          </span>
          <input type="checkbox" value="" />
          <span className="text">Let theme shine like a star</span>
          <small className="label label-warning"><i className="fa fa-clock-o" /> 1 day</small>
          <div className="tools">
            <i className="fa fa-edit" />
            <i className="fa fa-trash-o" />
          </div>
        </li>
        <li>
          <span className="handle">
            <i className="fa fa-ellipsis-v" />
            <i className="fa fa-ellipsis-v" />
          </span>
          <input type="checkbox" value="" />
          <span className="text">Let theme shine like a star</span>
          <small className="label label-success"><i className="fa fa-clock-o" /> 3 days</small>
          <div className="tools">
            <i className="fa fa-edit" />
            <i className="fa fa-trash-o" />
          </div>
        </li>
        <li>
          <span className="handle">
            <i className="fa fa-ellipsis-v" />
            <i className="fa fa-ellipsis-v" />
          </span>
          <input type="checkbox" value="" />
          <span className="text">Check your messages and notifications</span>
          <small className="label label-primary"><i className="fa fa-clock-o" /> 1 week</small>
          <div className="tools">
            <i className="fa fa-edit" />
            <i className="fa fa-trash-o" />
          </div>
        </li>
        <li>
          <span className="handle">
            <i className="fa fa-ellipsis-v" />
            <i className="fa fa-ellipsis-v" />
          </span>
          <input type="checkbox" value="" />
          <span className="text">Let theme shine like a star</span>
          <small className="label label-default"><i className="fa fa-clock-o" /> 1 month</small>
          <div className="tools">
            <i className="fa fa-edit" />
            <i className="fa fa-trash-o" />
          </div>
        </li>
      </ul>
    </div>
    { /* /.box-body */ }
    <div className="box-footer clearfix no-border">
      <button type="button" className="btn btn-default pull-right"><i className="fa fa-plus" /> Add item</button>
    </div>
    { /* /.box */ }
  </div>

);

ListToDo.defaultProps = {
};

ListToDo.propTypes = {
};

export default ListToDo;
