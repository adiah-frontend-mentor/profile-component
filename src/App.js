import './App.scss';
import avatar from './images/image-victor.jpg';
import cardBg from './images/bg-pattern-card.svg';
import topBg from './images/bg-pattern-top.svg';
import bottomBg from './images/bg-pattern-bottom.svg';

const ProfileCard = ({data}) => {
  return (
    <div className='card-wrapper' 
      style={{
        backgroundImage: `url(${cardBg}) `,
      }}
    >
      <img className='avatar' src={data.avatar} alt=""/>

      <div className='details'>
        <h1>{data.name} <span className='age'>{data.age}</span></h1>
        <p>{data.location}</p>
      </div>

      <div className='stats'>
        <div className='category'>
          <h2 className='count'>{data.followers}</h2>
          <p className='label'>Followers</p>
        </div>
        <div className='category'>
          <h2 className='count'>{data.likes}</h2>
          <p className='label'>LIkes</p>
        </div> 
        <div className='category'>
          <h2 className='count'>{data.photos}</h2>
          <p className='label'>Photos</p>
        </div>
      </div>
      
    </div>
  )

}

const data = {
  name: 'Victor Crest',
  avatar: avatar,
  age: 26,
  location: 'London',
  followers: '80K',
  likes: '803K',
  photos: '1.4K',
}

function App() {
  return (
    <div className="App"
      style={{
        backgroundImage: `url(${topBg}), url(${bottomBg})`,
      }}
    >
      <ProfileCard data={data}/>
    </div>
  );
}

export default App;
