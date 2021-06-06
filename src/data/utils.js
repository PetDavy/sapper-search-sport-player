function getOptions(data) {
  const names = data.map(team => team.strTeam ? team.strTeam : team.strAlternate);

  return data.map(team => {
    let name = team.strTeam ? team.strTeam : team.strAlternate;

    const nameFirst = names.indexOf(name);
    const nameLast = names.lastIndexOf(name);

    if (nameFirst !== nameLast) {
      name += ` (${team.strSport})`;
    }

    return {
      id: team.idTeam,
      name,
    }
    
  });
}

export default {
  getOptions,
}