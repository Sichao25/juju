import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderLeader({leader}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={leader.image} alt={leader.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{leader.name}</Media>
                            <p>{leader.designation}</p>
                            <p>{leader.description}</p>
                        </Media>
                    </Media>
                </div>
            </div>
        </div>
    );
}


function About(props) {

    const leaders = props.leaders.map((leader) => {
        return (
            <div key={leader.id}>
                <RenderLeader leader={leader}/>
            </div>
        );
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2019, Nice JuJu is established to feed JuJu.</p>
                    <p>The restaurant traces its humble beginnings to Bad JuJu, JuJu failed to cook delicious dishes herself.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-warning text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Better meat, better life.</p>
                                <footer className="blockquote-footer">JuJu,
                                <cite title="Source Title">Food for life, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leaders}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;    