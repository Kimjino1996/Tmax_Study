import React from 'react';

export default function Title({name}){
    
    return (
        <div className="row mb-4">
            <div className="col-12 col-md-6 offset-md-3 title">
                <h3>{name}</h3>
            </div>
        </div>

    );
}