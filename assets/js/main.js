function updateProfileInfo(profileData) {
    const photo = document.getElementsByClassName('profile_photo');
    photo.src = profileData.photo
    photo.alt = profileData.name
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()