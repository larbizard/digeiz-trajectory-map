import { Point, UserTrajectoryProps } from "../common"

import { HiOutlineClock, HiChevronDoubleRight, HiOutlineFlag } from "react-icons/hi";

export default function UserCaracteristics({
    userTrajectory,
}: UserTrajectoryProps) {

    function calculateTravelTime(points: Array<Point>): Number {

        const sortedPoints = points.sort((a: Point, b: Point) => a.time.valueOf() - b.time.valueOf())

        return Math.round(sortedPoints[sortedPoints.length - 1].time.valueOf() / 60 - sortedPoints[0].time.valueOf() / 60)
    }

    function calculateAverageSpeed(points: Array<Point>): String {

        const speeds: Array<Number> = [];

        const sortedSpeeds = points.sort((a: Point, b: Point) => a.time.valueOf() - b.time.valueOf());

        sortedSpeeds.map((point: Point, index: Number) => {
            if (index > 0) {
                let speed = Math.sqrt(Math.pow((point.x.valueOf() - points[index.valueOf() - 1].x.valueOf()), 2) + Math.pow((point.y.valueOf() - points[index.valueOf() - 1].y.valueOf()), 2)) / (point.time.valueOf() / 60 - points[index.valueOf() - 1].time.valueOf() / 60)
                speeds.push(speed)
            }
        })

        const averageSpeed: Number = speeds.reduce((accumulator, currentValue) => accumulator.valueOf() + currentValue.valueOf(), 0).valueOf() / speeds.length;

        return averageSpeed.toFixed(2);

    }

    return (
        <div className="bg-digeizGreen p-4 rounded-md drop-shadow-md">
            <div className="flex flex-col py-2">
                <div className="flex flex-row">
                    <HiOutlineClock color="#6805F2" />
                    <h3 className="text-digeizPurple font-bold pl-2">Travel time    </h3>
                </div>
                <p className="text-digeizPurple">{`${calculateTravelTime(userTrajectory.points)} minutes`}</p>
            </div>
            <div className="flex flex-col py-2">
                <div className="flex flex-row item-center">
                    <HiChevronDoubleRight color="#6805F2" />
                    <h3 className="text-digeizPurple font-bold pl-2">Travel average speed</h3>
                </div>
                <p className="text-digeizPurple">{`${calculateAverageSpeed(userTrajectory.points)} meter / minute`}</p>
            </div>
            <div className="flex flex-col py-2">
                <div className="flex flex-row item-center">
                    <HiOutlineFlag color="#6805F2" />
                    <h3 className="text-digeizPurple font-bold pl-2">{`${userTrajectory.points.length} stops`}</h3>
                </div>
            </div>
        </div>)
}