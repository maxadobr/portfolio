function updateProfileInfo(profileData) {
    const photo = document.querySelector('.profile_photo');
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.querySelector('.profile_name');
    name.innerText = profileData.name

    const title = document.querySelector('.profile_title');
    title.innerText = profileData.title

    const location = document.querySelector('.profile_location');
    location.innerText = profileData.location

    const email = document.querySelector('.profile_email');
    email.innerText = profileData.email
}

function updateSoftSkills(profileData) {
    const softSkills = document.querySelector('.soft_skills');

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');

}

function updateHardSkills(profileData) {
    const hardSkills = document.querySelector('.hard_skills');

    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('');
}

function updateLanguages(profileData) {
    const languages = document.querySelector('.languages');

    languages.innerHTML = profileData.languages.map(language => `<li>${language.lang} (${language.level})</li>`).join('');
}

function updatePortfolio(profileData) {
    const portfolio = document.querySelector('.portfolio')

    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <h3 class="title ${project.github ? 'github' : ''}">${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join(``);
}

function updateExperiences(profileData) {
    const experiences = document.querySelector('.experiences');

    experiences.innerHTML = profileData.experiences.map(experience => `<li><h3 class="title">${experience.position} / ${experience.company}</h3><p class="period">${experience.period.start} ${experience.period.finish}</p></li>`).join('');
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateExperiences(profileData)
})()