import React from 'react';
import { useAuth, useData } from '../../context';
import { Sidebar } from '../../Components';
import { HistoryCard } from './HistoryCard';
import './History.css';
import { clearAllHistory } from '../../utils/historyUtils';

export const History = () => {
  const { state, dispatch } = useData();
  const { token } = useAuth();

  return (
    <div>
      <div className='home-page'>
        <Sidebar />
        <section className='videos-section'>
        <div className='videos-container'>
          {state.history.length > 0 && (
            <div className='history-btn'>
              <button
                onClick={() => clearAllHistory(token, dispatch)}
                className='btn clear-btn'
              >
                clear history
              </button>
            </div>
          )}

          {state.history.length > 0 ? (
            state.history.map((item) => (
              <HistoryCard key={item._id} item={item} />
            ))
          ) : (
            <h1 className='text text-center'>
              No Videos in History
            </h1>
          )}
        </div>
        </section>
      </div>
    </div>
  );
};