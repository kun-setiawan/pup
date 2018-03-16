import React from 'react';

import Breadcrumb from './../../components/Breadcrumb/BreadcrumbItem';


const Breadcrumbs = () => {
    return(
        <div style={{paddingTop: '100px', background: 'red'}}>
            <h1>Breadcrumb Simple</h1>
            <Breadcrumb
                items={[
                    { key: 1, icon: 'fa fa-dashboard', title: 'Home', url: '/' },
                    { key: 2, title: 'Examples' },
                    { key: 3, title: 'Blank page' },
                ]}
            />
        </div>
    );
};

export default Breadcrumbs;