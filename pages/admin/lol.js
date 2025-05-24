import React from 'react';
import  "@/styles/xyz.css"


import { Card, Row, Col, ProgressBar, Table } from 'react-bootstrap';
import {
    FaUsers, FaBook, FaChartLine, FaTrophy,
    FaMoneyBillWave, FaRegCalendarAlt, FaStar
} from 'react-icons/fa';
import OAdminSidebar from "@/component/OAdminSidebar";

const AdminDashboard = () => {
    // Sample data - replace with your actual data
    const stats = {
        totalUsers: 1245,
        newUsersThisMonth: 128,
        totalCourses: 56,
        activeCourses: 42,
        completionRate: 68,
        revenue: 28450,
    };

    const topCourses = [
        { id: 1, title: 'Instagram Marketing Mastery', enrollments: 342, rating: 4.8 },
        { id: 2, title: 'Freelancing for Beginners', enrollments: 278, rating: 4.7 },
        { id: 3, title: 'YouTube Monetization Secrets', enrollments: 215, rating: 4.9 },
        { id: 4, title: 'TikTok Growth Strategies', enrollments: 198, rating: 4.6 },
    ];

    const leaderboard = [
        { rank: 1, name: 'Sarah Johnson', points: 2450, coursesCompleted: 12 },
        { rank: 2, name: 'Michael Chen', points: 2180, coursesCompleted: 10 },
        { rank: 3, name: 'David Wilson', points: 1950, coursesCompleted: 9 },
        { rank: 4, name: 'Emma Rodriguez', points: 1820, coursesCompleted: 8 },
    ];

    return (
        <OAdminSidebar>

        <div className="dashboard-content p-4 pt-0 bg-light pt-4">
            {/* Stats Cards Row */}
            <Row className="mb-4">
                <Col md={6} lg={3} className="mb-3 mb-lg-0">
                    <Card className="stat-card" onClick={t=>{

                        window.location.href = "course";
                    }}>
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="text-muted mb-2">Total Users</h6>
                                    <h3>{stats.totalUsers}</h3>
                                    <small className="text-success">
                                        +{stats.newUsersThisMonth} this month
                                    </small>
                                </div>
                                <div className="icon-circle bg-primary-light">
                                        <FaUsers className="text-primary" size={24} />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-3 mb-lg-0">
                    <Card className="stat-card">
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="text-muted mb-2">Total Courses</h6>
                                    <h3>{stats.totalCourses}</h3>
                                    <small className="text-info">
                                        {stats.activeCourses} active
                                    </small>
                                </div>
                                <div className="icon-circle bg-success-light">
                                    <FaBook className="text-success" size={24} />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-3 mb-lg-0">
                    <Card className="stat-card">
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="text-muted mb-2">Completion Rate</h6>
                                    <h3>{stats.completionRate}%</h3>
                                    <small className="text-info">
                                        +128 this month
                                    </small>

                                </div>
                                <div className="icon-circle bg-warning-light">
                                    <FaChartLine className="text-warning" size={24} />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-3 mb-lg-0">
                    <Card className="stat-card">
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="text-muted mb-2">Total Task</h6>
                                    <h3>${stats.revenue.toLocaleString()}</h3>
                                    <small className="text-info">
                                        +128 Added month
                                    </small>
                                </div>
                                <div className="icon-circle bg-primary-light">
                                    <FaUsers className=" text-info" size={24}/>
                                </div>

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Main Content Row */}
            <Row>
            {/* Top Courses Column */}
                <Col lg={8} className="mb-4">
                    <Card className="h-100">
                        <Card.Header className="d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Top Performing Trainings</h5>
                            <button className="btn btn-sm btn-outline-primary">
                                View All
                            </button>
                        </Card.Header>
                        <Card.Body>
                            <Table hover responsive>
                                <thead>
                                <tr>
                                    <th>Training Title</th>
                                    <th>Enrollments</th>
                                    <th>Rating</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {topCourses.map(course => (
                                    <tr key={course.id}>
                                        <td>{course.title}</td>
                                        <td>{course.enrollments}</td>
                                        <td>
                                            <FaStar className="text-warning me-1" />
                                            {course.rating}
                                        </td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-info">
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Leaderboard Column */}
                <Col lg={4} className="mb-4">
                    <Card className="h-100">
                        <Card.Header>
                            <h5 className="mb-0">
                                <FaTrophy className="text-warning me-2" />
                                Leaderboard
                            </h5>
                        </Card.Header>
                        <Card.Body>
                            <div className="leaderboard-list">
                                {leaderboard.map(user => (
                                    <div key={user.rank} className="leaderboard-item mb-3 p-2">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <div className={`rank-circle me-3 ${user.rank <= 3 ? 'top-rank' : ''}`}>
                                                    {user.rank}
                                                </div>
                                                <div>
                                                    <h6 className="mb-0">{user.name}</h6>
                                                    <small className="text-muted">
                                                        {user.coursesCompleted} courses
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="points-badge">
                                                {user.points} pts
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="btn btn-sm btn-outline-secondary w-100 mt-2">
                                View Full Leaderboard
                            </button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Recent Activity Row */}
            <Row>
                <Col md={12}>
                    <Card>
                        <Card.Header>
                            <h5 className="mb-0">
                                <FaRegCalendarAlt className="me-2" />
                                Recent Activity
                            </h5>
                        </Card.Header>
                        <Card.Body>
                            <div className="activity-timeline">
                                {/* Sample timeline items - replace with actual data */}
                                <div className="timeline-item">
                                    <div className="timeline-badge success"></div>
                                    <div className="timeline-content">
                                        <small className="text-muted">2 hours ago</small>
                                        <p>15 new users registered for "Facebook Ads Training"</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-badge primary"></div>
                                    <div className="timeline-content">
                                        <small className="text-muted">5 hours ago</small>
                                        <p>Training "TikTok Growth Strategies" updated with new content</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-badge warning"></div>
                                    <div className="timeline-content">
                                        <small className="text-muted">Yesterday</small>
                                        <p>User "Michael Chen" completed "Freelancing for Beginners" Training</p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div></OAdminSidebar>
    );
};

export default AdminDashboard;