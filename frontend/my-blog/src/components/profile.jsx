import { UseStateValue } from "../state/stateProvider";


export default function Profile() {
    const [{profile}]= UseStateValue()

    

    // Handle case when profile is still null
    console.log(profile)
    if (!profile) {
        
        return <p>Loading...</p>;
    }

    return (
        <div className="container">
            <div className="content-section">
                <div className="media">
                    <img className="rounded-circle account-img" src={`http://127.0.0.1:8000${profile.image}`} alt="" />
                    <div className="media-body">
                        <h2 className="account-heading">{profile.user.username}</h2>
                        <small className="form-text text-muted">Username name is Fixed</small>
                        <p className="text-secondary">{profile.user.email}</p>
                        <p>{`${profile.user.first_name} ${profile.user.last_name}`}</p>
                    </div>
                </div>
                <form method="POST" encType="multipart/form-data">
                    {/* Form fields for profile update */}
                </form>
            </div>
            <form method="POST" enctype="multipart/form-data">

                <fieldset class="form-group">
                    <legend class="border-bottom mb-4">Profile Info</legend>
                    <div class="form-group">
                        <label>Uplode Profile Picture</label>
                        <div class="row">
                            <div class="col">
                                <input type="file" class="form-control" />
                            </div>
                            <div class="col">
                                <p  className="btn btn-info">Upload</p>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>First Name</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label>Last Name</label>
                        <input type="text" class="form-control"  />
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control"  />
                    </div>
                </fieldset>
                <div class="form-group">
                    <p class="btn btn-outline-info">Update</p>
                </div>
            </form>
        
        
        </div>
    );
}
