import {useState, useEffect} from "react";
import axios from "axios";
import ProfileFetcherForm from "./ProfileFetcherForm";

const baseurl = "https://api.github.com/users";

export default function ProfileFetcher(){

    const [searchUsername, setSearchUsername] = useState("irtiqa");
    const [profile, setProfile] = useState({data:null,isLoading:true});
   
    // async function fetchGithubProfile(){
    //     const response = await fetch(url+ searchData.name);
    //     const jsonResponse = await response.json();
    //     const randomQuote = jsonResponse.quote;
    //     console.log(randomQuote);
    // }
    useEffect(function fetchUser(){
        async function fetchProfile() {
            try {
              const response = await axios.get(`${baseurl}/${searchUsername}`);
              console.log(response);
              setProfile({data:response.data,isLoading:false});
            } catch (error) {
              console.error(error);
            }
          }
          fetchProfile();
    }, [searchUsername]);
   
    function search(username){
        setProfile({data:null,isLoading:true});
        setSearchUsername(username);
    }
    if (profile.isLoading) 
        return <i>Loading...</i>;

    return(
    <>
    <ProfileFetcherForm searchData={search}/>
   
    {profile.data == null ? <p>sorry! user not found</p> :
       <div>
       <br/>
       <h3>Name: {profile.data.name}</h3>
       <img src={profile.data.avatar_url} alt="Description of the image" />
      { profile.data.bio !=null && <h3>Bio: {profile.data.bio}</h3>}
      <h3>Followers: {profile.data.followers}</h3>
      <h3>Repos: {profile.data.public_repos}</h3>
      { profile.data.blog !=null && <h3>Blog: {profile.data.blog}</h3>}
      { profile.data.company !=null && <h3>Company: {profile.data.company}</h3>}
       </div>
     
     }
          
        
   
    
    
    </>);


}