import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';




    function RenderDish({dish}) {
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

    function RenderComment({selectedDish}){
        if (selectedDish){
            const commentview = selectedDish.comments.map((content) => {
                return (
                    <div key={content.id}>
                        <p>{content.comment}</p>
                        <p>--<strong>Author:</strong>{content.author}&nbsp;&nbsp;<strong>Date:</strong>{new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(content.date)))}</p>
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

  const Dishdetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m=1">
                    <RenderDish dish={props.selectedDish} />
                </div>
                <div className="col-12 col-md-5 m=1">
                    <RenderComment selectedDish={props.selectedDish} />
                </div>
            </div>
        </div>
    );
  }


export default Dishdetail;