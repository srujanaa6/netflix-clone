import './Content.css';
import Row from '../row/row'
import RowData from '../../constants/URLS';

export default function Content() {
   
 
  return (
      <div className='content-wrapper'>
       
      {RowData.map((el) => {
        return <Row title={el.title} url={el.url} />;
      })}
      </div>
  );
  }

  //45658736ade5c2c48a884dbaf0ae2826