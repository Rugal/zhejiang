import React from 'react';

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

//
// this function is very important
//
const getClassName = (s: IStatistics) => {
  if (s.incident < 1) {
    return `${s.className} safe`;
  }
  if (s.incident < 3) {
    return `${s.className} info`;
  }
  if (s.incident < 8) {
    return `${s.className} warn`;
  } else {
    return `${s.className} error`;
  }
};

const getPath = (cname: string, d: string) => <path className={cname} d={d} />;
const getPaths = (cname: string, s: IStatistics) => s.path.map((p, i) => getPath(cname, p.d));
const getPolygon = (cname: string, points: string) => <polygon className={cname} points={points} />;
const getPolygons = (cname: string, s: IStatistics) => s.polygon && s.polygon.map((p) => getPolygon(cname, p.points));

const Map: React.FC<IProps> = (p) => (
  <svg width="800px" height="800px">
    {p.statistics.map((s: IStatistics, i) =>
      <React.Fragment key={i}>
        {getPaths(getClassName(s), s)}
        {getPolygons(getClassName(s), s)}
        <text key={i} transform={s.transform} >{s.name}: {s.incident}</text>
      </React.Fragment>,
    )}
  </svg>
);

export default Map;
