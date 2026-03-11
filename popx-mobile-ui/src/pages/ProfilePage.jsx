const ProfilePage = () => {
  return (
    <div className="screen screen--profile">
      <div className="card card--profile">
        <div className="card__header">
          <span className="card__title">Account Settings</span>
        </div>
        <div className="card__body">
          <div className="profile">
            <div className="profile__avatar">
              <span className="profile__initial">M</span>
            </div>
            <div className="profile__info">
              <div className="profile__name-row">
                <span className="profile__name">Marry Doe</span>
                <span className="profile__badge">P</span>
              </div>
              <span className="profile__email">Marry@gmail.com</span>
            </div>
          </div>
          <p className="profile__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
            minim.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage

