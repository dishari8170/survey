const Dashboard = () => {
    return (
        <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ backgroundColor: '#2a2a2a', padding: '10px', borderRadius: '10px', width: '48%' }}>
                    <h2>Incomplete Task</h2>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <img src="/task1.jpg" alt="Task 1" style={{ width: '100px', height: '100px' }} />
                            <p>Day 20</p>
                            <button>Start</button>
                        </div>
                        <div>
                            <img src="/task2.jpg" alt="Task 2" style={{ width: '100px', height: '100px' }} />
                            <p>Day 20</p>
                            <button>Start</button>
                        </div>
                        <div>
                            <img src="/task3.jpg" alt="Task 3" style={{ width: '100px', height: '100px' }} />
                            <p>Day 20</p>
                            <button>Start</button>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#2a2a2a', padding: '10px', borderRadius: '10px', width: '48%' }}>
                    <h2>Today's Task</h2>
                    <div>
                        <img src="/todays_task.jpg" alt="Today's Task" style={{ width: '100%', height: '150px' }} />
                        <p>Day 23</p>
                        <button>Start</button>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#2a2a2a', padding: '10px', borderRadius: '10px', marginBottom: '20px' }}>
                <h2>This Week..</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {[...Array(7)].map((_, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                            <div style={{
                                backgroundColor: index === 0 ? '#4caf50' : '#2196f3',
                                borderRadius: '50%',
                                width: '50px',
                                height: '50px',
                                lineHeight: '50px',
                                textAlign: 'center',
                            }}>
                                Day {index + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ backgroundColor: '#2a2a2a', padding: '10px', borderRadius: '10px' }}>
                <h2>Your Achievement</h2>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <img src="/medal.jpg" alt="Medal" style={{ width: '50px', height: '50px' }} />
                    <img src="/trophy.jpg" alt="Trophy" style={{ width: '50px', height: '50px' }} />
                    <img src="/award.jpg" alt="Award" style={{ width: '50px', height: '50px' }} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
