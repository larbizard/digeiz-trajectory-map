export type ValueLabel = {
    value: String,
    label: String
}

export type Point = {
    time: Number;
    x: Number;
    y: Number;
};

export type UserTrajectory = {
    id: String;
    points: Array<Point>;
};

export type UserTrajectoryProps = {
    userTrajectory: UserTrajectory;
};
