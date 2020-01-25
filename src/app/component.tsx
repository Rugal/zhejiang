import React from 'react';

import Map from '../component/map';
import {statistics} from '../data';
import './style.css';

const App: React.FC = () => <Map statistics={statistics} />;

export default App;
