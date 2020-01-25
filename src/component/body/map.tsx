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
		<path className="zhoushan" style={{fill: "none"}} d="M521.5,189.375c0.125,1.5-0.145,2.5,0.803,2.5s2.572-2.5,2.572-2.5l-1.688-1.235L521.5,189.375z" />
	<path className="zhoushan" style={{fill: "none"}} d="M526.375,185.25c1.125,0.375,2.75,1.25,2.75,1.25s1-1.75,0-2s-2.375-1.125-2.75-0.75
	S526.375,185.25,526.375,185.25z" />
	<polygon className="zhoushan" style={{fill: "none"}} points="531.625,186.5 531.625,188.14 533.75,188.14 533.125,185.079 " />
  <path className="zhoushan" style={{fill: "none"}} d="M567,180.625c0,0-3.25,4.563-2.125,5.563s3,2.063,3.25,0.313s1.5-2.813,1.5-4.688
	S567,180.625,567,180.625z" />
	<path className="zhoushan" style={{fill: "none"}} d="M535.633,161.75c0,0,2.117,3.125,3.117,2.875s5.063-5.063,5.063-5.063s-0.313-1.75-2.188-1.813
	s-5.438,0.875-5.563,2.063S535.633,161.75,535.633,161.75z" />
	<path className="zhoushan" style={{fill: "none"}} d="M521.5,162.063c0,0,4.375-1.438,3.938-2.375s-0.656-2.25-1.953-2.313s-5.172,0.688-4.109,1.875
	s1.813,2.5,1.813,2.5L521.5,162.063z" />

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
