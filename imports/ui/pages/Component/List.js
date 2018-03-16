import React from 'react';
import ListToDo from '../../components/List/ListToDo';

const List = () => (
  <div>
    { /*  Main content */ }
    <section className="content">
      <div className="row">
        <div className="col-md-12">
          <ListToDo />
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

