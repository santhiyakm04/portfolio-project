import './index.css'
export const Studio_Order = () => {

    return (
        <>
            <div className="col-md-12">
                <h4 className="title text-center head "> Portfolio</h4>
                <div className="nav-align-center">
                    <ul className="nav nav-pills nav-pills-primary " role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#profile" role="tablist">
                                {/* <i className="now-ui-icons design_image"></i> */}
                                <b>user upload</b>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#home" role="tablist">
                                {/* <i className="now-ui-icons location_world"></i> */}
                                <b>orders</b>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#messages" role="tablist">
                                {/* <i className="now-ui-icons design-2_ruler-pencil"></i> */}
                                <b>upload files </b>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <!-- Tab panes --> */}
                <div className="tab-content gallery">
                    <div className="tab-pane active" id="profile" role="tabpanel">
                        <div className="row">
                            {/* <div className="col-md-5 ml-auto mr-auto">
                                <div className="card card-background card-background-product card-raised" style={{ backgroundImage: "url('../assets/img/bg23.jpg')" }}>
                                    <div className="card-body">
                                        <h2 className="card-title">Chair remake.</h2>
                                        <p className="card-description text-white">
                                            Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding way. It was a great project and I would be more than happy to do it again.
                                        </p>
                                        <label className="badge badge-neutral">Trello</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="info info-horizontal">
                                    <div className="icon icon-warning">
                                        <i className="now-ui-icons users_single-02"></i>
                                    </div>
                                    <div className="description">
                                        <h5 className="info-title">Work With Any Team</h5>
                                        <p className="description">
                                            Whether it’s for work or even the next family vacation, Trello helps your team.
                                        </p>
                                    </div>
                                </div>
                                <div className="info info-horizontal">
                                    <div className="icon icon-warning">
                                        <i className="now-ui-icons business_chart-bar-32"></i>
                                    </div>
                                    <div className="description">
                                        <h5 className="info-title">A Productivity Platform</h5>
                                        <p className="description">
                                            Integrate the apps your team already uses directly into your workflow.
                                        </p>
                                    </div>
                                </div> */}
                            {/* </div> */}
                            <form role="form" class="forms" id="contact-form" method="post">
                <label>Phone no:</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="now-ui-icons tech_mobile"></i></span>
                  </div>
                  <input type="number" class="form-control" placeholder="Enter ur number" aria-label="Your number" autocomplete="number"/>
                </div>
                <label>Email address</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="now-ui-icons ui-1_email-85"></i></span>
                  </div>
                  <input type="email" class="form-control" placeholder="Enter ur email " aria-label="email " autocomplete="email"/>
                </div>

                <label>Name of founder:</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="now-ui-icons users_circle-08"></i></span>
                  </div>
                  <input type="text" class="form-control" placeholder="Enter ur name" autocomplete="name"/>
                </div>

                <label>No of branches:</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class=""></i></span>
                  </div>
                  <input type="number" class="form-control" placeholder="No of branches" aria-label="branches" autocomplete="branches"/>
                </div>

                <label>No of achievements:</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class=""></i></span>
                  </div>
                  <input type="number" class="form-control" placeholder="No of achievements" aria-label="achievements" autocomplete="achievements"/>
                </div>

                <label>No of employees:</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class=""></i></span>
                  </div>
                  <input type="number" class="form-control" placeholder="No of employees" aria-label="employees" autocomplete="employees"/>
                </div>

                <div class="form-group">
                  <label>About us:</label>
                  <textarea name="about us" class="form-control" id="message" rows="6"></textarea>
                </div>
                <div class="submit text-center">
                  <input type="submit" class="btn btn-primary btn-raised btn-round" value="upload" />
                </div>
              </form>
                        </div>
                    </div>
                    <div className="tab-pane" id="home" role="tabpanel">
                        <div className="row">
                            {/* <div className="col-md-5 ml-auto mr-auto">
                                <div className="card card-background card-background-product card-raised" style={{ backgroundImage: "url('../assets/img/project8.jpg')" }}>
                                    <div className="card-body">
                                        <h2 className="card-title">Social Analytics</h2>
                                        <p className="card-description">
                                            Insight to help you create, connect, and convert. Understand Your Audience's Interests, Influence, Interactions, and Intent. Discover emerging topics and influencers to reach new audiences.
                                        </p>
                                        <label className="badge badge-neutral">Analytics</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="info info-horizontal">
                                    <div className="icon icon-danger">
                                        <i className="now-ui-icons ui-2_chat-round"></i>
                                    </div>
                                    <div className="description">
                                        <h5 className="info-title">Listen to Social Conversations</h5>
                                        <p className="description">
                                            Gain access to the demographics, psychographics, and location of unique people who talk about your brand.
                                        </p>
                                    </div>
                                </div>
                                <div className="info info-horizontal">
                                    <div className="icon icon-danger">
                                        <i className="now-ui-icons design-2_ruler-pencil"></i>
                                    </div>
                                    <div className="description">
                                        <h5 className="info-title">Social Conversions</h5>
                                        <p className="description">
                                            Track actions taken on your website that originated from social, and understand the impact on your bottom line.
                                        </p>
                                    </div>
                                </div>
                            </div> */}

                            <table className="clientlist" border='1px'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>number</th>
                                        <th>Date</th>
                                        <th>place</th>  
                                        <th>Action</th>                                      
                                    </tr>
                                </thead>
                                <tbody>
                                    <td id="tbody">

                                    </td>
                                </tbody>
                            </table>
                              
                        </div>
                    </div>
                    <div className="tab-pane" id="messages" role="tabpanel">
                        <div className="row">
                            {/* <div className="col-md-5 ml-auto mr-auto">
                                <div className="card card-background card-background-product card-raised" style={{ backgroundImage: "url('../assets/img/bg25.jpg')" }}>
                                    <div className="card-body">
                                        <h2 className="card-title">Interior Redesign</h2>
                                        <p className="card-description">
                                            Insight to help you create, connect, and convert. Understand Your Audience's Interests, Influence, Interactions, and Intent. Discover emerging topics and influencers to reach new audiences.
                                        </p>
                                        <label className="badge badge-neutral">Interior</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="info info-horizontal">
                                    <div className="icon icon-info">
                                        <i className="now-ui-icons design_palette"></i>
                                    </div>
                                    <div className="description">
                                        <h5 className="info-title">Colors adjustments</h5>
                                        <p className="description">
                                            Gain access to the demographics, psychographics, and location of unique people who talk about your brand.
                                        </p>
                                    </div>
                                </div>
                                <div className="info info-horizontal">
                                    <div className="icon icon-info">
                                        <i className="now-ui-icons design_scissors"></i>
                                    </div>
                                    <div className="description">
                                        <h5 className="info-title">Performance Clothing</h5>
                                        <p className="description">
                                            Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports.
                                        </p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}