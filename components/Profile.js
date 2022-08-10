// components/Profile.js

import Link from "next/link";

const style = {
  coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden `,
  coverPhoto: `object-cover h-full w-full `,
  profileImageContainer: `w-full h-[6rem] mt-[-3rem] mb-2 items-center px-3`,
  profileImage: `object-cover rounded-full h-[100px] w-[100px]`,
  container: `max-w-md mx-auto bg-blue-200 rounded-xl shadow-xl  overflow-hidden md:max-w-2xl border`,
};

export default function Profile(props) {
  const profile = props.profile;

  // When displayFullProfile is true, we show more info.
  const displayFullProfile = props.displayFullProfile;

  return (
    <div className="p-8">
      <Link href={`/profile/${profile.id}`}>
        <div className={style.container}>
          <div>
            <div className={style.coverPhotoContainer}>
              {profile.coverPicture ? (
                <img
                  src={
                    profile.coverPicture.original
                      ? profile.coverPicture.original.url
                      : profile.coverPicture.uri
                  }
                  className={style.coverPhoto}
                />
              ) : (
                <div
                  style={{
                    backgrondColor: "gray",
                  }}
                />
              )}
            </div>
            <div className={style.profileImageContainer}>
              {profile.picture ? (
                <img
                  src={
                    profile.picture.original
                      ? profile.picture.original.url
                      : profile.picture.uri
                  }
                  className={style.profileImage}
                />
              ) : (
                <div
                  style={{
                    backgrondColor: "gray",
                  }}
                  className="md:h-20 object-center md:w-20 rounded-full"
                />
              )}
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-900 font-semibold">
                {profile.handle}
                {displayFullProfile &&
                  profile.name &&
                  " (" + profile.name + ")"}
              </div>
              <div className="block mt-1 text-sm leading-tight font-medium text-black hover:underline">
                {profile.bio}
              </div>
              <p className="mt-2 text-xs text-slate-500">
                following: {profile.stats.totalFollowing} followers:{" "}
                {profile.stats.totalFollowers}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
