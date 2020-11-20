import React from 'react';
import running from '../../images/running.png';
import runningbg from '../../images/runningbg.png';
import './RunningProject.scss';

const RunningProject = () => {
    return (
        <div className="run-main">
            <div className="container">
                <div className="row">                   
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <img src={running} className="img-fluid"/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="running-project">                                                    
                            <h2>Stay Running & Project</h2>
                            <br/>
                            <small className="text-secondary">
                                It is a long establish fact that a render will be distracted by the readable content of a page when looking at its layout.The point of using Lorem ipsum is that it has a more-or-less normal distribution of letter.   
                            </small>
                            <br/>                            
                            <button className="running-button">Contact us</button>                           
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default RunningProject;