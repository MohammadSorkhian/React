import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import Modal from './components/UI/Modal';

ReactDOM.render(<App></App>, document.getElementById('root'));
ReactDOM.createPortal(<Modal></Modal>, document.getElementById("overlays"));