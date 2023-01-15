import { getRandomColor } from "../utils";

import { Point, UserTrajectoryProps } from "../common"

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
    <div className="flex flex-col items-center p-4 md:p-40">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon
          points={returnPointsString(userTrajectory.points).toString()}
          fill="none"
          stroke={getRandomColor()}
        />
        {userTrajectory.points.map(point => <circle cx={`${Math.round(point.x.valueOf() * 10)}`} cy={`${Math.round(point.y.valueOf() * 10)}`} r="0.6" />)}
      </svg>
    </div>
  );
}
