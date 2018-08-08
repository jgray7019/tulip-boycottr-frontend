<<<<<<< HEAD
import React, { Component } from 'react';
import BoycottReasonForm from './BoycottForm';

export class BoycottModal extends Component {
    submit = values => {
        //print the form values to console
        console.log(values);
    }
    render() {
        //Render nothing if the "show" prop is false
        if(!this.props.isActive) {
          return null;
        }

        return (
            <div className={this.props.isActive ? 'is-active modal' : 'modal'} >
=======
import React from 'react';
import BoycottReasonForm from './BoycottForm';

export default ({isActive, onModalToggle}) => (
        isActive ?
            <div className={isActive ? 'is-active modal' : 'modal'} >
>>>>>>> afd9c02ff5d0101949e8cc412957e103c7797413
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <button 
                            className="delete"
                            aria-label="close"
                            onClick={() => onModalToggle(!isActive)}
                        ></button>
                    </header>
                    <section className="modal-card-body">
                        <BoycottReasonForm onSubmit={this.submit} />
                    </section>
                    <footer className="modal-card-foot">
                    </footer>
                </div>
            </div>
        :
        null
    );
