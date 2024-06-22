
import { Link } from 'react-router-dom';
function BasicExample({post}) {
  return (
    <div className="media content-section">
    <img className="rounded-circle article-img"  src={`http://127.0.0.1:8000${post.user.image}`} alt='User'/>
    <div className="media-body">
        <div className="article-metadata">
            
              
        <Link className="mr-2" >{post.user.user.username}</Link>
               
                    
                    
                    
            
        <small className="text-muted">{post.date}</small>
        </div>
        <h2><Link className="article-title" to={`/${post.id}/`} >{post.title}</Link></h2>
        
                
        <p className="article-content">{post.description}</p>
                
        
    </div>
</div>
  );
}

export default BasicExample;
