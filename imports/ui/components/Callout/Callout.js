import React from 'react';

class Callout extends React.Component{
    render(){
        return(
            <div>
                <div className="col-md-6">
                    <div className="box box-default">
                        <div className="box-header with-border">
                            <i className="fa fa-bullhorn"></i>

                            <h3 className="box-title">Callout</h3>
                        </div>
                        <div className="box-body">
                            <div className="callout callout-danger">
                                <h4>I am a danger callout!</h4>

                                <p>There is a problem that we need to fix. A wonderful serenity has taken possession of my entire soul,
                                    like these sweet mornings of spring which I enjoy with my whole heart.</p>
                            </div>
                            <div className="callout callout-info">
                                <h4>I am an info callout!</h4>

                                <p>Follow the steps to continue to payment.</p>
                            </div>
                            <div className="callout callout-warning">
                                <h4>I am a warning callout!</h4>

                                <p>This is a yellow callout.</p>
                            </div>
                            <div className="callout callout-success">
                                <h4>I am a success callout!</h4>

                                <p>This is a green callout.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Callout;