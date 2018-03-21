import React from 'react';
import ListToDo from '../../components/List/ListToDo';
import ListItem from '../../components/List/ListItem';

const List = () => (
  <div>
    { /*  Main content */ }
    <section className="content">
      <div className="row">
        <div className="col-md-12">
          <ListToDo />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <ListItem />
        </div>
      </div>
    </section>
  </div>
);

List.defaultProps = {
};

List.propTypes = {
};

export default List;

