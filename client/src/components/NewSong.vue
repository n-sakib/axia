<template>
  <div class="songs">
    <h1>Add Your Next Big Hit</h1>
      <div class="form">
        <div>
          <input type="text" name="title" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <input type="text" name="artist" placeholder="ARTIST" v-model="artist">
        </div>
        <div>
          <textarea rows="5" cols="5" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div>
        <div>
          <textarea rows="5" cols="5" placeholder="CATEGORIES" v-model="categories"></textarea>
        </div>
        <div>
          <button class="app_post_btn" @click="addSong">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
import SongService from '@/services/SongService'
export default {
  name: 'NewPost',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    async addPost () {
      await SongService.addSong({
        title: this.title,
        description: this.description
      })
      this.$router.push({ name: 'Songs' })
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 100%;
  border: none;
  cursor: pointer;
}
</style>
