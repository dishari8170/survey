import React from "react";

const days = [
    { name: "Mon", index: 1 },
    { name: "Tue", index: 2 },
    { name: "Wed", index: 3 },
    { name: "Thu", index: 4 },
    { name: "Fri", index: 5 },
    { name: "Sat", index: 6 },
    { name: "Sun", index: 7 },
];

const WeekCycle = () => {
    return (
        <div className="flex gap-4 justify-center mt-10">
            {days.map((day, idx) => (
                <div
                    key={idx}
                    className="w-16 h-16 flex flex-col items-center justify-center rounded-full bg-blue-500 text-white font-bold shadow-md transition transform hover:scale-105"
                >
                    <span>{day.name}</span>
                    <span className="text-sm">{day.index}</span>
                </div>
            ))}
        </div>
    );
};

export default WeekCycle;
