function updateProfileInfo(profileData) {
    const photo = document.getElementsByClassName('.profile_photo');
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementsByClassName('.profile_name');
    name.innerText = profileData.name
    console.log(name)

    const title = document.getElementsByClassName('.profile_title');
    title.innerText = profileData.title

    const location = document.getElementsByClassName('.profile_location');
    location.innerText = profileData.location

    const email = document.getElementsByClassName('.profile_email');
    email.innerText = profileData.email
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()