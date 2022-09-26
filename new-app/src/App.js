import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card'
import Axios from './axios'

function App() {
  // Cards
  const [Data, setData] = useState()
  
  // State for conditions
  const [country, setCountry] = useState('')
  const [university_name, setUniversityName] = useState('')
  const [level_name, setLevelName] = useState('')

  useEffect(() => {
    async function get(){
      const response = await Axios.get(`api/courses`);
      setData(response.data.courses);
    }
    get();
  }, [])

  const handleChange = (e) => {
    e.preventDefault()
    switch (e.target.name) {
      case 'university-course':
        setUniversityName(e.target.value);
        getCourses()
        break;
      case 'level_name':
        getCourses()
        setLevelName(e.target.value)
        break;
      case 'country':
          getCourses()
          setCountry(e.target.value)
          break;
      default:
        getCourses()
        break;
    }
    async function getCourses(){
      const response = await Axios.get(`api/courses?university_course=${university_name}&university_country=${country}&level_name=${level_name}`);
      setData(response.data.courses);
    }
  }

  return (
    <div>
      <div className='page-header'>
        <h1>We are making education more accessible for everyone</h1>
        <h1>Secure your scholarship today!</h1>
        <h1>We are on a mission to change the education industry</h1>
      </div>
      <div className='search-box'>
        <input type="text" name="university-course" onChange={handleChange} placeholder='Search university_name / course_name'/>
        <input type="text" name="level_name" onChange={handleChange} placeholder='Search level_name'/>
        <input type="text" name="country" onChange={handleChange} placeholder='Search country_name'/>
      </div>
    <div className="grid-container">
      {Data ? Data.map((item,k)=> (
        <div key={k} className="grid-item">
          <Card data={item}/>
        </div>
        )
      ): null}
    </div>
    </div>
  );
}

export default App;
