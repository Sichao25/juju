import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedDish: null
        };
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
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
            const commentview = this.state.selectedDish.comments.map((content) => {
                return (
                    <div key={content.id}>
                        <p>{content.comment}</p>
                        <p>--<strong>Author:</strong>{content.author}&nbsp;&nbsp;<strong>Date:</strong>{content.date}</p>
                    </div>
                );
            });
            return (
                <div>
                    <h3>Comments</h3>
                    {commentview}
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m=1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (   
            <div className="container">
              <div className="row">
                  {menu}
              </div>
              <div className="row">
                  <div className="col-12 col-md-5">
                      {this.renderDish(this.state.selectedDish)}
                  </div>
                  <div className="col-12 col-md-5">
                      {this.renderComment(this.state.selectedDish)}
                  </div>
              </div>
            </div>
          );
    }
}

export default Menu;