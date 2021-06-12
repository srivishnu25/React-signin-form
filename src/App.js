import logo from './logo.svg';
import React, { Component,PureComponent, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import moment from 'moment';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,Switch,Link,Route,Redirect, useParams} from "react-router-dom";




const App = () => {
  
  
  return (<div>

    <Navbar/>
    
    
    {/* <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about"  component={About}/>
        <Route path="/contact"  component={Contact}/>
        <Route path="/users/:id" component={Users}/>
         <Route component={()=><h1>404 Error</h1>}/>
      </Switch>
    </Router> */}
  </div>  );
}
 
 export default App;


// const Home = () => {
//   return (<h1>Home Page</h1>);
// }

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ redirect: true }), 5000)
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/about" />
    }
    return (
      <>
        <h1>Home</h1>
        <Link to="/contact"> <button> Navigate to Contact</button></Link>
      </>);
  }
}

const About = () => {
  return (<h1>About Page</h1>);
}

const Contact = () => {
  return (<h1>Contact Page</h1>);
}
 
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { id } = this.props.match.params
    console.log("this.props", this.props.match.params)
    return <>
      <h1>Users :  {id}</h1>
    </>
  }
}


// const Users = () => {
//   const {id} = useParams();
//   return (
//     <h1>Users : {id}</h1>
//     );
// }
 











const Parent = () => {
  const [buttons , setButtons] = useState([]);
  const [btnClick , setBtnClick] = useState(null);
  const [cards,updateCards] = useState([]);
  const [searchValue,setSearchValue] = useState('')
  const [orginalData,setOrginalData]=useState([])
  useEffect(()=>{
     console.log('component did mount')
    //  fetch('https://jsonplaceholder.typicode.com/photos')
    //  .then(response => response.json())
    axios.get('https://api.edyoda.com/v1/blog/postcategories/')
  .then(json => {
    setButtons(json.data)
  })

  axios.get('https://api.edyoda.com/v1/blog/')
  .then(blog => {
    setOrginalData(blog.data)
    updateCards(blog.data)
  })},[])
  
  // const postData=()=>{
  //    axios({
  //      method:"delete",
  //      url:"https://jsonplaceholder.typicode.com/posts/1",
  //     //  data:{
  //     //   userId: 1,
  //     //   id: 1,
  //     //   title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //     //   body: "body"
  //     //  }
  //    }).then(res=> console.log(res))
  // }

  const onSearch = ()=>{
    const updateValues = orginalData.filter((item)=>
    item.authorname.toLowerCase().includes(searchValue.toLowerCase())||item.slug.toLowerCase().includes(searchValue.toLowerCase()))
    updateCards(updateValues)
    
  }
  
  useEffect(()=>{
    console.log('component did update') 
  })
  const btncards=(id)=>{
    setBtnClick(id)
    const btnOnClick = orginalData.filter((item)=>item.id == id)
    updateCards(btnOnClick);
  }
  return (<div>
    <input type="search" placeholder="search.." id="search-box" onBlur={(e)=>e.target.value=''} onChange={(e)=>setSearchValue(e.target.value)}/><button onClick={onSearch}>search</button>
    <div>
      {/* <button onClick={()=>postData()}>on hit</button> */}
    {buttons.map((item)=>
      <div className={btnClick === item.id ? "buttons active":"buttons"} onClick={()=>{btncards(item.id)}} key={item.id}>{item.title}</div>)}</div>
     <div className="cardWrap">
      { cards.map(({authorname,description,id,slug,posted_on,small_image,title})=>
      <div className="card">
        <img src={small_image}/>
        <h5>{title}</h5>
        <p>{authorname} {moment(posted_on).format('DD MM YYYY')}</p>
        <p>{description}</p>
      </div>
      
      )}</div>
    
    </div>
    );
  }
 
// export default Parent;

// const Child = ({count}) => {
//   const [childCount,updateChildCount] = useState(count)
//   useEffect(()=>{
//     if(count <=5)
//     updateChildCount(count)
//   },[count])
  
//   return (<div>
//     <h2>Child - {childCount}</h2>
//   </div>  );
// }