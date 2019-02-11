<template>
  <div class="body"> <!-- Begin Body -->
     <div class="content"> <!-- Begin Content -->
       <b-container class="get_discovered">
       <b-row>
        <b-col cols="12">
            <h1>Explore Axia's Catalog</h1>
            <p>Browse through available songs perfect for any situation.</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2">Filters</b-col>
        <b-col cols="10">
          <div class="songs">
              <div v-if="songs.length > 0" class="table-wrap">
                <div>
                  <router-link v-bind:to="{ name: 'NewSong' }" class="">Add Song</router-link>
                    </div>
                      <table>
                        <tr>
                          <td>Title</td>
                          <td width="550">Description</td>
                          <td width="100" align="center">Action</td>
                        </tr>
                        <!-- <tr v-bind:"song in songs">
                          <td>{{ song.title }}</td>
                          <td>{{ song.description }}</td>
                          <td align="center">
                            <router-link v-bind:to="{ name: 'EditSong', params: { id: song._id } }">Edit</router-link> |
                            <a href="#">Delete</a>
                          </td>
                        </tr> -->
                      </table>
                    </div>
                  <div v-else>
                    There are no songs available.. Be the first! <br /><br />
                  <router-link v-bind:to="{ name: 'NewSong' }" class="add_post_link">Add Song</router-link>
                </div>
              </div>
        </b-col>
      </b-row>
     </b-container>
   </div> <!-- end content -->
 </div> <!-- end body -->

</template>

<script>
import SongService from '@/services/SongService'
export default {
  name: 'songs',
  data () {
    return {
      songs: []
    }
  },
  mounted () {
    this.getSongs()
  },
  methods: {
    async getSongs () {
      const response = await SongService.fetchSongs()
      this.songs = response.data.songs
    }
  }
}
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
