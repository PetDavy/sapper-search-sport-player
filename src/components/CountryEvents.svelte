<script>
  export let leagueEvents;
  // console.log(leagueEvents.events);
</script>

<style>
  .card {
    position: relative;
    min-width: 225px;
    margin-right: 20px;
    margin-bottom: 5px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .card-content {
    position: relative;
    z-index: 2;
  }

  .card-image {
    background-color: #000;
  }

  .event-img {
    object-position: center;
    object-fit: cover;
    opacity: 0.7;
  }

  .card-score {
    padding-right: 15px;
  }

  .subtitle {
    margin-bottom: 0;
  }
</style>

{#each leagueEvents.events as event}
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by2">
        <img
          class="event-img"
          src={event.strThumb}
          alt="event">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-5">{event.strEvent}</p>
          <p class="subtitle is-6">
            {event.dateEvent}
          </p>
          <p class="card-score is-size-3 has-text-weight-bold has-text-centered">
            {event.intHomeScore}:{event.intAwayScore}
          </p>
        </div>
      </div>
<!-- 
      <div class="content">
        {event.strDescriptionEN ? event.strDescriptionEN : event.strFilename}
      </div> -->
    </div>
  </div>
  
{/each}