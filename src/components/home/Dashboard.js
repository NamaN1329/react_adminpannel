import React from "react";
import Navbar from "../layout/header";
import SettingRight from "../layout/SettingTrigger";
import Sidebar from "../layout/sidebar";
const Dashboard = () => {
  return (
    <>
      <div className="container-scroller">
        {/* partial:partials/_navbar.html */}
        <Navbar />
        {/* partial */}
        <div className="container-fluid page-body-wrapper">
          {/* partial:partials/_settings-panel.html */}
          <SettingRight />
          {/*partial partial:partials/_sidebar.html */}
          <Sidebar/>
          {/* main-panel starts */}
         <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-12 grid-margin">
              <div className="row">
                <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                  <h3 className="font-weight-bold">Welcome Aamir</h3>
                  <h6 className="font-weight-normal mb-0">
                    All systems are running smoothly! You have{" "}
                    <span className="text-primary">3 unread alerts!</span>
                  </h6>
                </div>
                <div className="col-12 col-xl-4">
                  <div className="justify-content-end d-flex">
                    <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
                      <button
                        className="btn btn-sm btn-light bg-white dropdown-toggle"
                        type="button"
                        id="dropdownMenuDate2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        <i className="mdi mdi-calendar"></i> Today (10 Jan 2021)
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuDate2"
                      >
                        <a className="dropdown-item" href="#">
                          January - March
                        </a>
                        <a className="dropdown-item" href="#">
                          March - June
                        </a>
                        <a className="dropdown-item" href="#">
                          June - August
                        </a>
                        <a className="dropdown-item" href="#">
                          August - November
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card tale-bg">
                <div className="card-people mt-auto">
                  <img src="images/dashboard/people.svg" alt="people" />
                  <div className="weather-info">
                    <div className="d-flex">
                      <div>
                        <h2 className="mb-0 font-weight-normal">
                          <i className="icon-sun mr-2"></i>31<sup>C</sup>
                        </h2>
                      </div>
                      <div className="ml-2">
                        <h4 className="location font-weight-normal">
                          Bangalore
                        </h4>
                        <h6 className="font-weight-normal">India</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-margin transparent">
              <div className="row">
                <div className="col-md-6 mb-4 stretch-card transparent">
                  <div className="card card-tale">
                    <div className="card-body">
                      <p className="mb-4">Today’s Bookings</p>
                      <p className="fs-30 mb-2">4006</p>
                      <p>10.00% (30 days)</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4 stretch-card transparent">
                  <div className="card card-dark-blue">
                    <div className="card-body">
                      <p className="mb-4">Total Bookings</p>
                      <p className="fs-30 mb-2">61344</p>
                      <p>22.00% (30 days)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                  <div className="card card-light-blue">
                    <div className="card-body">
                      <p className="mb-4">Number of Meetings</p>
                      <p className="fs-30 mb-2">34040</p>
                      <p>2.00% (30 days)</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 stretch-card transparent">
                  <div className="card card-light-danger">
                    <div className="card-body">
                      <p className="mb-4">Number of Clients</p>
                      <p className="fs-30 mb-2">47033</p>
                      <p>0.22% (30 days)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <p className="card-title">Order Details</p>
                  <p className="font-weight-500">
                    The total number of sessions within the date range. It is
                    the period time a user is actively engaged with your
                    website, page or app, etc
                  </p>
                  <div className="d-flex flex-wrap mb-5">
                    <div className="mr-5 mt-3">
                      <p className="text-muted">Order value</p>
                      <h3 className="text-primary fs-30 font-weight-medium">
                        12.3k
                      </h3>
                    </div>
                    <div className="mr-5 mt-3">
                      <p className="text-muted">Orders</p>
                      <h3 className="text-primary fs-30 font-weight-medium">
                        14k
                      </h3>
                    </div>
                    <div className="mr-5 mt-3">
                      <p className="text-muted">Users</p>
                      <h3 className="text-primary fs-30 font-weight-medium">
                        71.56%
                      </h3>
                    </div>
                    <div className="mt-3">
                      <p className="text-muted">Downloads</p>
                      <h3 className="text-primary fs-30 font-weight-medium">
                        34040
                      </h3>
                    </div>
                  </div>
                  <canvas id="order-chart"></canvas>
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="card-title">Sales Report</p>
                    <a href="#" className="text-info">
                      View all
                    </a>
                  </div>
                  <p className="font-weight-500">
                    The total number of sessions within the date range. It is
                    the period time a user is actively engaged with your
                    website, page or app, etc
                  </p>
                  <div
                    id="sales-legend"
                    className="chartjs-legend mt-4 mb-2"
                  ></div>
                  <canvas id="sales-chart"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
              <div className="card position-relative">
                <div className="card-body">
                  <div
                    id="detailedReports"
                    className="carousel slide detailed-report-carousel position-static pt-2"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active"></div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#detailedReports"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#detailedReports"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- content-wrapper ends --> */}
        {/* <!-- partial:partials/_footer.html --> */}
        <footer className="footer">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
              Copyright © 2021. Premium{" "}
              <a href="https://www.bootstrapdash.com/" target="_blank">
                Bootstrap admin template
              </a>{" "}
              from BootstrapDash. All rights reserved.
            </span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
              Hand-crafted & made with{" "}
              <i className="ti-heart text-danger ml-1"></i>
            </span>
          </div>
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
              Distributed by{" "}
              <a href="https://www.themewagon.com/" target="_blank">
                Themewagon
              </a>
            </span>
          </div>
        </footer>
        {/* <!-- partial --> */}
      </div>
          {/* main-panel ends  */}
        </div>
        {/* page-body-wrapper ends  */}
      </div>
      {/* container-scroller  */}
    </>
  );
};

export default Dashboard;
