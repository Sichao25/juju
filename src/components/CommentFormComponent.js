import React, {Component} from 'react';
import {  Button, Modal, ModalHeader, ModalBody, Row, Col, Label, Input} from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
    
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
    }


    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        //event.preventDefault();
    }
    
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }


    render() {
        return(
            <div className="container">
                <Button outline color="secondary" onClick={this.toggleModal}>
                    Comments
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Col md={12}>
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Control.select model=".rating" name="rating"
                                    className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        
                        <Row className="form-group">
                            <Label htmlFor="yourname" md={12}>Your Name</Label>
                            <Col md={12}>
                                <Control.text model=".yourname" id="yourname" name="yourname"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                        />
                                <Errors
                                    className="text-danger"
                                    model=".yourname"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                    />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment" md={12}>Your Comment</Label>
                            <Col md={12}>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                    rows="12"
                                    className="form-control" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size:10, offset: 2}}>
                                <Button type="submit" color="primary">
                                Send Feedback
                                </Button>
                            </Col>
                        </Row>
                    
                    </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default CommentForm;