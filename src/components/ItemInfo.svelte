<script>
  export let team;

  let active = 0;

  const switchTab = (event) => {
    const { target } = event;

    active = Number(target.dataset.id);
  }
</script>

<section class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-1">
        <figure class="image is-96x96">
          <img src={team.strTeamBadge} alt="Team">
        </figure>
      </div>
      <div class="column">
        <div class="title">{team.strTeam ? team.strTeam : team.strAlternate}</div>
        <div class="subtitle">{team.strLeague}</div>
      </div>
    </div>
    <div class="tabs">
      <ul>
        <li class:is-active={active === 0}>
          <a
            href="/"
            data-id="0"
            on:click|preventDefault={switchTab}
          >
            Description
          </a>
        </li>
        <li class:is-active={active === 1} >
          <a
            href="/"
            data-id="1"
            on:click|preventDefault={switchTab}
          >
            Stadium
          </a>
        </li>
        <li class:is-active={active === 2}>
          <a
            href="/"
            data-id="2"
            on:click|preventDefault={switchTab}
          >
            Socials
          </a>
        </li>
      </ul>
    </div>
    {#if active === 0}
      <h5 class="title is-5">
        <i style="font-weight: 400; font-size: 16px;">Formed: </i>
        {team.intFormedYear ? team.intFormedYear : 'no info'}
      </h5>
      <p>{team.strDescriptionEN}</p>
      <hr>
      <h4 class="title is-4">Leagues</h4>
      <ol style="margin-left: 30px;">
        {#each Array(7) as _, i}
          {#if team[`strLeague${i? i + 1: ''}`]}
            <li>{team[`strLeague${i? i + 1: ''}`]}</li>
          {/if}
        {/each}
      </ol>
    {/if}
    {#if active === 1}
      <div class="columns">
        {#if team.strStadiumThumb}
        <div class="column is-3">
          <figure class="image is-3by2">
            <img src={team.strStadiumThumb} alt="Team">
          </figure>
        </div>
        {/if}
        <div class="column">
          <div class="title is-4">{team.strStadium}</div>
          <div class="subtitle">{team.strStadiumLocation}</div>
          <p>{team.strStadiumDescription}</p>
        </div>
      </div>
    {/if}

  </div>

</section>