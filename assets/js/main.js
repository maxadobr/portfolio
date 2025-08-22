function updateProfileInfo(profileData) {
    const photo = document.querySelector('.profile_photo');
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.querySelector('.profile_name');
    name.innerText = profileData.name

    const title = document.querySelector('.profile_title');
    title.innerText = profileData.title

    const location = document.querySelector('.profile_location');
    location.innerText = profileData.location.country

    const email = document.querySelector('.profile_email');
    email.innerText = profileData.email
}

function updateSoftSkills(profileData) {
    const softSkills = document.querySelector('.soft_skills');

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');

}

function updateHardSkills(profileData) {
    const hardSkills = document.querySelector('.hard_skills');

    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}"></li>`).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updatehardSkills(profileData)
})()