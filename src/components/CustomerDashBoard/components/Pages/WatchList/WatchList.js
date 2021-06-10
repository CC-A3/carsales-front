import React, {useState, useEffect} from "react";
import WatchListCard from './components/WatchListCard/WatchListCard';
import './WatchList.css'
import * as api from '../../../../Utils/api';

const WatchList = () => {
  const [details, setDetails] = useState([]);
  const clientId = localStorage.getItem('userId');
  useEffect(() => {
    const fetchWatchLists =async  () => {
      const watchListRes = await api.fetchWatchList(clientId);
      if (watchListRes.status === 200) {
        setDetails(watchListRes.data);
      }
    }

    fetchWatchLists();
  },[])

  return (
    <section className="watchList-results">
      {details.length === 0 ? <h2 className="watchList-number">0 cars in Watch list</h2> : <div>
          <>
            <h2 className="watchList-number">{details.length} cars</h2>
            {details.map((detail) => (
              <>
                <WatchListCard detail={detail} />
              </>
            ))}
          </>
        </div>
        }
    </section>
  )
};

export default  WatchList;
