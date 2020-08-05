import React from 'react';
import { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

  constructor(props) {
    super(props);
  }

    renderDish(dish) {
        if (dish!=null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComment(dish){
        if (dish){
            const commentview = this.props.selectedDish.comments.map((content) => {
                return (
                    <div key={content.id}>
                        <p>{content.comment}</p>
                        <p>--<strong>Author:</strong>{content.author}&nbsp;&nbsp;<strong>Date:</strong>{content.date}</p>
                    </div>
                );
            });
            return (
                <div>
                    <h4>Comments</h4>
                    {commentview}
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

  render (){
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m=1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m=1">
                    {this.renderComment(this.props.selectedDish)}
                </div>
            </div>
        </div>
    );
  }
}

export default Dishdetail;