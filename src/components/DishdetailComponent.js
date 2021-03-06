import React from 'react';
import { Card, CardImg, Breadcrumb, BreadcrumbItem, CardText, CardBody, CardTitle } from 'reactstrap';
import{ Link } from 'react-router-dom';
import CommentForm from "./CommentFormComponent"; 



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

    function RenderComment({comments}){
        if (comments){
            const commentview = comments.map((content) => {
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
                    <CommentForm></CommentForm>
                </div>
            );
        }else{
            return(
                <div>
                    <CommentForm></CommentForm>
                </div>
            );
        }
    }

  const Dishdetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m=1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m=1">
                    <RenderComment comments={props.comments} />
                </div>
            </div>
        </div>
    );
  }


export default Dishdetail;