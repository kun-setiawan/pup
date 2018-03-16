import React from 'react';

class Alert extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-6">
                    <div className="box box-default">
                        <div className="box-header with-border">
                            <i className="fa fa-warning"></i>

                            <h3 className="box-title">Alert</h3>
                        </div>
                        <div className="box-body">
                            <div className="alert alert-danger alert-dismissible">
                                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                <h4><i className="icon fa fa-ban"></i> Alert!</h4>
                                Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my entire
                                soul, like these sweet mornings of spring which I enjoy with my whole heart.
                            </div>
                            <div className="alert alert-info alert-dismissible">
                                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                <h4><i className="icon fa fa-info"></i> Alert!</h4>
                                Info alert preview. This alert is dismissable.
                            </div>
                            <div className="alert alert-warning alert-dismissible">
                                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                <h4><i className="icon fa fa-warning"></i> Alert!</h4>
                                Warning alert preview. This alert is dismissable.
                            </div>
                            <div className="alert alert-success alert-dismissible">
                                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                <h4><i className="icon fa fa-check"></i> Alert!</h4>
                                Success alert preview. This alert is dismissable.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Alert;