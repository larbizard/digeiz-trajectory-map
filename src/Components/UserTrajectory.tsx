import { useState } from "react";
import { getRandomColor } from "../utils";

type Point = {
  time: Number;
  x: Number;
  y: Number;
};

type UserTrajectory = {
  id: Number;
  points: Array<Point>;
};

type UserTrajectoryProps = {
  userTrajectory: UserTrajectory;
};

function returnPointsString(points: Array<Point>) {
  let pointsString = "";
  points.sort((a, b) => a.time - b.time).map((point: Point) => {
    pointsString =
      pointsString + `${Math.round(point.x * 10)},${Math.round(point.y * 10)} `;
  });
  console.log(pointsString);
  return pointsString;
}

export default function UserTrajectory({
  userTrajectory,
}: UserTrajectoryProps) {

  return (<div style={{flex: 1, flexDirection: "column", justifyContent: "space-between"}}>

    <div style={{ position: "absolute", width: "100%", paddingTop: "150px" }}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon
          points={returnPointsString(userTrajectory.points)}
          fill="none"
          stroke={getRandomColor()}
        />
        {userTrajectory.points.map(point => <circle cx={`${Math.round(point.x * 10)}`} cy={`${Math.round(point.y * 10)}`} r="0.6"/> )}
      </svg>
    </div>
    </div>
  );
}
