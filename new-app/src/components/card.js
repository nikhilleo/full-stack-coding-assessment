import React from 'react';
import './card.css';

const test = [
  'Scholarship 1',
  'Scholarship 1',
]

function Card({data}) {
  function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1) + "..." : str;
  }
  
  return (
    <div className="main_card">
      <div className="card">
        <div className="card-header">
          <img
            src="https://images.unsplash.com/photo-1621640786029-220e9ff8dd09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            className="bg-img"
            alt="rover"
          />
          <img
            className="logo-img"
            src="https://t3.ftcdn.net/jpg/04/91/76/62/360_F_491766294_h4j7LbW2YgfbNHhq7F8GboIc1XyBSEY5.jpg"
            alt="rover"
          />
        </div>
        <div className="card-body">
          <p className="course-name">{truncate(data?.course_name,65)}</p>
          <p className="university-name">{data?.university_name}</p>
          <p className="country-name">{data?.country_name}</p>
          {test.map((t, i) => (
            <div className="test" key={`test-map-${i}`}>
              <p>{t}</p>
              <p>{t}</p>
            </div>
          ))}
          <div className="fee-section">
            <p>Tuition Fee</p>
            <p>{data?.annual_tuition}</p>
          </div>
          <hr />
          <div className="fee-section">
            <p>Avg Tuition Fee</p>
            <p>{data?.avg_annual_tuition}</p>
          </div>
          <div className="card-footer">
            <button>Learn More</button>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
