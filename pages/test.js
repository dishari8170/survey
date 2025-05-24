import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Badge, Carousel } from 'react-bootstrap';
import {
    FiBook, FiUsers, FiCpu, FiAward, FiHome, FiBell, FiUser,
    FiPlay, FiCheckCircle, FiClock, FiBarChart2, FiChevronRight
} from 'react-icons/fi';
import { motion } from 'framer-motion';

// Enhanced fake data
const trainingData = {
    user: {
        name: "Eric Forest",
        progress: 65,
        lastCourse: "Week 6: Background Work & Initial Setup",
        avatarColor: "linear-gradient(135deg, #FF7BAC, #FF9770)"
    },
    courses: {
        core: [
            { id: 1, title: "Sales & Marketing", week: "Week 1", progress: 100, completed: true, image: "sales.jpg" },
            { id: 2, title: "Onboarding & Logistics", week: "Week 2", progress: 100, completed: true, image: "onboarding.jpg" },
            { id: 3, title: "Growing Accounts", week: "Week 3", progress: 100, completed: true, image: "growth.jpg" },
            { id: 4, title: "Automated Messaging", week: "Week 4", progress: 80, completed: false, image: "automation.jpg" },
            { id: 5, title: "AI Models", week: "Week 5", progress: 50, completed: false, image: "ai.jpg" },
            { id: 6, title: "Background Work", week: "Week 6", progress: 30, completed: false, image: "background.jpg" }
        ],
        staff: [
            { id: 1, title: "Bookkeeper", icon: <FiBook />, color: "#6F42C1" },
            { id: 2, title: "Telegram Chatter", icon: <FiUsers />, color: "#20C997" },
            { id: 3, title: "Onboarding Rep", icon: <FiUser />, color: "#FD7E14" },
            { id: 4, title: "Account Manager", icon: <FiBarChart2 />, color: "#3F51B5" },
            { id: 5, title: "Growth Rep", icon: <FiBarChart2 />, color: "#17A2B8" },
            { id: 6, title: "Senior Manager", icon: <FiAward />, color: "#E83E8C" },
            { id: 7, title: "General Manager", icon: <FiAward />, color: "#DC3545" }
        ],
        featured: [
            {
                id: 1,
                title: "AI Model Implementor",
                subtitle: "Build & Monetize AI Models",
                description: "Master creating profitable AI solutions from scratch",
                icon: <FiCpu />,
                color: "linear-gradient(135deg, #9C27B0, #3F51B5)"
            },
            {
                id: 2,
                title: "Licensee Management",
                subtitle: "Streamlined Operations",
                description: "Advanced techniques for managing licensees efficiently",
                icon: <FiAward />,
                color: "linear-gradient(135deg, #FF5722, #FF9800)"
            }
        ]
    },
    announcements: [
        {
            id: 1,
            title: "New Course Available",
            content: "Week 7: Advanced Monetization Strategies coming next Monday!",
            date: "2 days ago",
            urgent: true
        },
        {
            id: 2,
            title: "System Maintenance",
            content: "Platform will be unavailable this Saturday from 2-4 AM for upgrades",
            date: "1 week ago",
            urgent: false
        }
    ],
    stats: [
        { value: "87%", label: "Completion Rate", icon: <FiCheckCircle />, trend: "up" },
        { value: "24h", label: "Avg. Time to Certify", icon: <FiClock />, trend: "down" },
        { value: "4.9", label: "Rating (out of 5)", icon: <FiAward />, trend: "up" }
    ]
};

const TrainingDashboard = () => {
    return (
        <div className="dashboard-container">
            {/* Header */}
            <header className="dashboard-header">
                <Container fluid>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h1 className="dashboard-title">
                                    <span className="gradient-text">Bank Management</span> Training Portal
                                </h1>
                                <p className="welcome-message">
                                    Welcome back, <strong>{trainingData.user.name}</strong> 👋
                                </p>
                            </motion.div>
                        </Col>
                        <Col md={6} className="d-flex justify-content-end">
                            <button className="notification-btn">
                                <FiBell />
                                <span className="notification-badge">3</span>
                            </button>
                            <div
                                className="user-avatar"
                                style={{ background: trainingData.user.avatarColor }}
                            >
                                {trainingData.user.name.split(' ').map(n => n[0]).join('')}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>

            <Container fluid className="dashboard-content">
                {/* Stats Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Row className="stats-row">
                        {trainingData.stats.map((stat, index) => (
                            <Col key={index} md={4} className="mb-4">
                                <Card className="stat-card">
                                    <Card.Body>
                                        <div className="stat-icon" style={{ color: stat.trend === "up" ? "#28A745" : "#DC3545" }}>
                                            {stat.icon}
                                        </div>
                                        <h3 className="stat-value">{stat.value}</h3>
                                        <p className="stat-label">{stat.label}</p>
                                        <div className={`stat-trend ${stat.trend}`}>
                                            {stat.trend === "up" ? "↑" : "↓"} 12%
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </motion.div>

                {/* Main Content */}
                <Row>
                    {/* Left Column */}
                    <Col lg={8}>
                        {/* Continue Learning */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Card className="continue-card mb-4">
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h4 className="section-title">Continue Learning</h4>
                                            <p className="text-muted mb-3">
                                                <FiClock className="me-2" />
                                                Last viewed: <strong>{trainingData.user.lastCourse}</strong>
                                            </p>
                                            <ProgressBar now={trainingData.user.progress} className="mb-3" />
                                            <button className="btn btn-resume">
                                                <FiPlay className="me-2" /> Resume Course
                                            </button>
                                        </div>
                                        <div className="continue-image">
                                            <div className="progress-circle">
                                                {trainingData.user.progress}%
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </motion.div>

                        {/* Core Training */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="section-header mb-3">
                                <h4 className="section-title">
                                    <FiBook className="me-2" />
                                    Core Training Program
                                </h4>
                                <a href="#" className="view-all">View All <FiChevronRight /></a>
                            </div>

                            <Row>
                                {trainingData.courses.core.map((course, index) => (
                                    <Col key={course.id} md={6} className="mb-4">
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Card className="course-card">
                                                <div
                                                    className="course-image"
                                                    style={{ backgroundImage: `url(/images/${course.image})` }}
                                                >
                                                    <div className="week-badge">{course.week}</div>
                                                </div>
                                                <Card.Body>
                                                    <h5>{course.title}</h5>
                                                    <ProgressBar now={course.progress} className="mb-3" />
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        {course.completed ? (
                                                            <Badge pill className="completed-badge">
                                                                <FiCheckCircle className="me-1" /> Completed
                                                            </Badge>
                                                        ) : (
                                                            <Badge pill className="in-progress-badge">
                                                                {course.progress}% Complete
                                                            </Badge>
                                                        )}
                                                        <button className="btn btn-continue">
                                                            {course.completed ? 'Review' : 'Continue'}
                                                        </button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </motion.div>
                                    </Col>
                                ))}
                            </Row>
                        </motion.div>
                    </Col>

                    {/* Right Column */}
                    <Col lg={4}>
                        {/* Staff Training */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Card className="mb-4 staff-section">
                                <Card.Body>
                                    <div className="section-header mb-3">
                                        <h4 className="section-title">
                                            <FiUsers className="me-2" />
                                            Staff Training
                                        </h4>
                                    </div>
                                    <Row>
                                        {trainingData.courses.staff.map(course => (
                                            <Col xs={6} key={course.id} className="mb-3">
                                                <motion.div whileHover={{ scale: 1.05 }}>
                                                    <Card className="staff-card" style={{ borderTop: `4px solid ${course.color}` }}>
                                                        <Card.Body className="text-center">
                                                            <div
                                                                className="staff-icon"
                                                                style={{ backgroundColor: `${course.color}20`, color: course.color }}
                                                            >
                                                                {course.icon}
                                                            </div>
                                                            <h6>{course.title}</h6>
                                                            <button className="btn btn-staff">
                                                                View <FiChevronRight />
                                                            </button>
                                                        </Card.Body>
                                                    </Card>
                                                </motion.div>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card.Body>
                            </Card>
                        </motion.div>

                        {/* Featured Courses Carousel */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="section-header mb-3">
                                <h4 className="section-title">
                                    <FiAward className="me-2" />
                                    Featured Training
                                </h4>
                            </div>

                            <Carousel indicators={false} className="featured-carousel">
                                {trainingData.courses.featured.map(course => (
                                    <Carousel.Item key={course.id}>
                                        <Card className="featured-card">
                                            <div className="featured-header" style={{ background: course.color }}>
                                                <div className="featured-icon">
                                                    {course.icon}
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <h5>{course.title}</h5>
                                                <p className="featured-subtitle">{course.subtitle}</p>
                                                <p className="text-muted mb-3">{course.description}</p>
                                                <button className="btn btn-featured">
                                                    Start Course <FiChevronRight />
                                                </button>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </motion.div>

                        {/* Announcements */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <Card className="mt-4 announcements-card">
                                <Card.Body>
                                    <div className="section-header mb-3">
                                        <h4 className="section-title">
                                            <FiBell className="me-2" />
                                            Announcements
                                        </h4>
                                    </div>

                                    {trainingData.announcements.map(item => (
                                        <div key={item.id} className={`announcement-item ${item.urgent ? 'urgent' : ''}`}>
                                            <div className="announcement-badge"></div>
                                            <div>
                                                <h6>{item.title}</h6>
                                                <p className="text-muted mb-1">{item.content}</p>
                                                <small className="text-muted">{item.date}</small>
                                            </div>
                                        </div>
                                    ))}

                                    <a href="#" className="view-announcements">
                                        View all announcements <FiChevronRight />
                                    </a>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


export default TrainingDashboard;