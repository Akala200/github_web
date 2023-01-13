import React from "react";
// import Style

import {  AvatarStyle2, AvatarStyle, Text } from "./card.style";

const Card = ({ profile }) => {
  return (
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-4 col-sm-12 col mt-4">
          <div className="card p-3 bg-white">
              <div className="d-flex align-items-center">
                <div className="image me-3">
                  <AvatarStyle
                    src={profile.user.avatar_url}
                    alt={profile.user.name}
                  />
                </div>
                <div className="ml-3 w-100">
                  <h4 className="mb-0 mt-0">{profile.user.name}</h4>{" "}
                  <span>{profile.user.login}</span>
                  <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                    <div className="d-flex flex-column">
                      {" "}
                      <span className="articles">Repositories</span>{" "}
                      <span className="number1">
                        {profile.user.public_repos}
                      </span>{" "}
                    </div>
                    <div className="d-flex flex-column">
                      {" "}
                      <span className="followers">Followers</span>{" "}
                      <span className="number2">{profile.user.followers}</span>{" "}
                    </div>
                    <div className="d-flex flex-column">
                      {" "}
                      <span className="rating">Following</span>{" "}
                      <span className="number3">{profile.user.following}</span>{" "}
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    {" "}
                    <p className="ps-2">
                      Location: {profile.user.location}
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col gist mt-4">
          {profile.org && profile.org.map(org => 
            <div className="card p-2 bg-white mb-3" key={org.id}>
              <div className="d-flex align-items-center">
                    <div className="row">
                      <div className="col-4">
                      <AvatarStyle2 className="rounded-circle me-3"
                    src={org.avatar_url}
                    alt={org.avatar_url}
                  />
                      </div>

                      <div className="col-8">
                      <h5 className="mb-0 mt-0">{org.login}</h5>
                      <Text className="desc">{org.description}</Text>

                      </div>
                    </div>
              </div>
            </div>
          )}
          </div>
          <div className="col-lg-4 col-sm-12 col gist mt-4 d-none d-none d-xl-block .d-xxl-non">
          {profile.gist && profile.gist.map(gist => 
            <div className="card p-2 bg-white mb-3" key={gist.id}>
              <div className="d-flex align-items-center">
                    <div className="row">
                      <div className="col-12">
                      <h5 className="mt-0 fs-6">Owner: {gist.owner.login}</h5>
                      <p className="desc">{gist.description}</p>
                      {/* <p>{gist.created_at}</p> */}
                      <p>Total Comment: {gist.comments}</p>
                      </div>
                    </div>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
  );
};

export default Card;
