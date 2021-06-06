<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let item;

  const IMGS_KEYS = [
    'strTeamFanart1',
    'strTeamFanart2',
    'strTeamFanart3',
    'strTeamFanart4',
    'strTeamBanner',
    'strTeamLogo',
    'strTeamBadge'
  ];

  const getTeamImage = () => {
    for (let imgKey of IMGS_KEYS) {
      if (item[imgKey]) {
        return item[imgKey];
      }
    }

    return 'https://www.nepal90.com/images/original/icon_team.png';
  }

  const removeCard = () => {
    dispatch('removeTeam', {id: item.idTeam})
  }
</script>

<style>
  .card {
    position: relative;
    width: 280px;
    margin-right: 20px;
    margin-bottom: 30px;
  }

  .card:hover .delete {
    display: block;
  }

  .card-image img {
    object-fit: contain;
  }

  .delete {
    display: none;
    position: absolute;
    top: -12px;
    right: -12px;
    z-index: 2;
  }
</style>

<div class="card">
  <button class="delete is-medium" on:click={removeCard}></button>
  <div class="card-image">
    <figure class="image is-5by3">
      <img src={getTeamImage()} alt="FanArt">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src={item.strTeamBadge} alt="Badge">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{item.strTeam ? item.strTeam : item.strAlternate}</p>
        <p class="subtitle is-6">{item.strLeague}</p>
      </div>
    </div>

    <div class="content">
      To fined out more <a href="/">Click Hear</a>
    </div>
  </div>
</div>