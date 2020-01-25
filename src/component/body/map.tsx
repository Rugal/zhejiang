/*tslint:disable*/
import React from "react";

export interface IPolygon {
	points: string;
}

export interface IPath {
	d: string;
}

export interface IStatistics {
	className: string;
	name: string;
	incident: number;
	transform: string;
	path: IPath[];
	polygon?: IPolygon[];
}

interface IProps {
	statistics: IStatistics[];
}

const getPath = (cname: string, d: string) => <path className={cname} d={d} />;
const getPaths = (cname: string, s: IStatistics) => s.path.map((p, i) => getPath(cname, p.d));
const getPolygon = (cname: string, points: string) => <polygon className={cname} points={points} />;
const getPolygons = (cname: string, s: IStatistics) => s.polygon && s.polygon.map((p, i) => getPolygon(cname, p.points));

const Zhejiang: React.FC<IProps> = (p) =>
	<svg width="800px" height="800px">
		{p.statistics.map((s: IStatistics, i) =>
			<React.Fragment>
				{getPaths(s.className, s)}
				{getPolygons(s.className, s)}
				<text key={i} transform={s.transform} >{s.name}: {s.incident}</text>
			</React.Fragment>
		)}
	</svg>
	;

export default Zhejiang;
