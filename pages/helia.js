import Head from 'next/head'
import '../styles/globals.css'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Dashboard</title>
            </Head>


            <div className="section">
                <h2>Incomplete Task</h2>
                <div className="task-list">
                    {[1, 2, 3].map((_, i) => (
                        <div className="task-card" key={i}>
                            <img src={`/images/task${i + 1}.jpg`} alt={`Task ${i + 1}`} />
                            <div className="task-footer">
                                <span>Day 20</span>
                                <button>Start</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            <div className="section">
                <h2>Today's Task</h2>
                <div className="today-task">
                    <div className="gradient-box">
                        <button className="start-btn">Start</button>
                    </div>
                    <p>Day - 23</p>
                </div>
            </div>
 <div className="section">
                <h2>This Week ..</h2>
                <div className="week-days">
                    {[1, 2, 3, 4, 5, 6, 7].map(day => (
                        <div key={day} className={`day-circle day-${day}`}>
                            day {day}
                        </div>
                    ))}
                </div>
            </div>


            <div className="section">
                <h2>Your Achievement</h2>
                <div className="achievement-icons">
                    {[...Array(15)].map((_, i) => (
                        <div className="medal" key={i}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}
