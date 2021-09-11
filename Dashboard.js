showData();

let teamName;
let teamCategory;
let teamMembers;
const createTeam = document.getElementById('create-team');
let instructions = document.getElementById('instructions');



createTeam.addEventListener('click', () => {
    teamName = document.getElementById('team-name').value;
    teamCategory = document.getElementById('team-category').value;
    teamMembers = document.getElementById('team-members').value;
    // console.log(teamName);

    function Teaminfo(name, category, members) {
        this.name = name;
        this.category = category;
        this.members = members;
    }


    // Putting data in Local Storage

    var flag = true;

    if ((teamName != '') && (teamCategory != '') && (teamMembers != '')) {
        team1 = new Teaminfo(teamName, teamCategory, teamMembers);
        let getFromLocalS = localStorage.getItem('team1');

        if (getFromLocalS == null) {
            var arr1 = [];
        }
        else {
            var getArrayFromlocalS = localStorage.getItem('team1');
            arr1 = JSON.parse(getArrayFromlocalS);
            arr1.push(team1);
        }


        localStorage.setItem('team1', JSON.stringify(arr1));
    }

    if ((teamName == '') || (teamCategory == '') || (teamMembers == '')) {
        instructions.innerHTML = 'Please Provide the Complete Information!';
    }
    else {
        $('#exampleModalCenter').modal('hide');
        document.getElementById('team-name').value = '';
        document.getElementById('team-category').value = '';
        document.getElementById('team-members').value = '';

        // getting data from local Storage

        let teamData = localStorage.getItem('team1');
        teamData = JSON.parse(teamData);
        // console.log(teamData[0].Name);
        showData();
    }


});

function showData() {
    let getFromLocalS = localStorage.getItem('team1');

    if (getFromLocalS == null) {
        var arr1 = [];
    }
    else {
        var getArrayFromlocalS = localStorage.getItem('team1');
        arr1 = JSON.parse(getArrayFromlocalS);
    }

    let html = '';
    let addedTeams = document.getElementById('added-teams');
    arr1.forEach((item) => {
        html += `<fieldset class="scheduler-border">
                <div class="team-title ">
                <h4>${item.name}</h4>
                <button class="btn dot-menu stng-btn" onclick="setting()" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
              </svg></button>
                <p>${item.category}</p> </div>
                <div class="members-name"><b>Members:</b> ${item.members} and Others</div>
                </div>
                </fieldset>`;
    });

    addedTeams.innerHTML = html;
}

function setting() {
    const settingContainer = document.querySelector('.main-container');
    const stngBtn = document.querySelector('.stng-btn');
    const cancelBtn = document.querySelector('.cancel-btn');


    if (settingContainer.classList.contains('hidden')) {
        settingContainer.classList.remove('hidden');
    }

};

function cancelSetting() {
    const settingContainer = document.querySelector('.main-container');
    settingContainer.classList.add('hidden');
};


