const PostCard = ({data}) => {

 const renderCardType = (type) =>{

    switch(type){

        case "fullwidth":
         return "col-md-12";
        case "oneFourth":
         return "col-md-6";
       default :
       return "col-md-12"

    }
       
 }

 console.log(data)
    return (    <div className={renderCardType(data.type)}>
    <div className="singlePostItm singlePostItmMob">
      <a href="http://localhost/vouge/zorains-studio/">
        <div className="singlePostItmImg">
          <img
            src="http://localhost/vouge/wp-content/uploads/2019/11/01-Designer-Profile-image-Zorain-768x768.jpg"
            alt="renPost1"
          />
        </div>
        <div className="singlePostItmTxt">
          <span className="postTag">CULTURE &amp; LIVING</span>
          <h3>Zorains Studio</h3>
          <span className="postBy">BY admin</span>
        
        </div>
      </a>
    </div>
  </div>
);
}
 
export default PostCard;