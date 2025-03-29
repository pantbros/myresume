import React from "react";
// import { Helmet } from "react-helmet";
function Meta(title, desc){
    return (
        <Helmet>
            <title>{title || 'Default Title'}</title>
            <meta name="description" content={desc || 'Default description'} />
        </Helmet>
    )
}
export default Meta;