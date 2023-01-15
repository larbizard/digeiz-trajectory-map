import { Point, UserTrajectoryProps } from "../common"

import { HiOutlineFlag, HiStop } from "react-icons/hi";

function returnPointsString(points: Array<Point>): String {
  let pointsString: String = "";
  points.sort((a, b) => a.time.valueOf() - b.time.valueOf()).map((point: Point) => {
    pointsString =
      pointsString + `${Math.round(point.x.valueOf() * 10)},${Math.round(point.y.valueOf() * 10)} `;
  });

  return pointsString;
}

export default function UserTrajectory({
  userTrajectory,
}: UserTrajectoryProps) {

  return (
    <div className="flex flex-col items-center p-4 bg-digeizGreen">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

        <polygon
          points={returnPointsString(userTrajectory.points).toString()}
          fill="none"
          stroke="#fff"
        />
        {userTrajectory.points.map(point => <circle cx={`${Math.round(point.x.valueOf() * 10)}`} cy={`${Math.round(point.y.valueOf() * 10)}`} r="0.4" fill="#6805F2" />)}
        <HiStop x={`${Math.round(userTrajectory.points[userTrajectory.points.length-1].x.valueOf() * 10)}`} y={`${Math.round(userTrajectory.points[userTrajectory.points.length-1].y.valueOf() * 10)}`} size="2" fill="#F20574" />
        <HiOutlineFlag x={`${Math.round(userTrajectory.points[0].x.valueOf() * 10 -1)}`} y={`${Math.round(userTrajectory.points[0].y.valueOf() * 10)}`} size="2" color="#6805F2"/>
      </svg>
    </div>
  );
}
