<template>
  <div class="profile">
    <h1>Your Profile</h1>
      <div class="form">
        <div>
          <input type="text" name="username" placeholder="Username" v-model="title">
        </div>
        <div>
          <textarea rows="3" cols="5" placeholder="BIO" v-model="bio"></textarea>
        </div>
        <div>
          <input type="text" name="facebook" placeholder="Facebook URL" v-model="facebook">
        </div>
        <div>
          <input type="text" name="twitter" placeholder="Twitter URL" v-model="twitter">
        </div>
        <div>
          <input type="text" name="soundcloud" placeholder="Soundcloud URL" v-model="soundcloud">
        </div>
        <div>
          <input type="text" name="instagram" placeholder="Instagram URL" v-model="instagram">
        </div>
        <div>
          <input type="text" name="website" placeholder="Website URL" v-model="website">
        </div>

        <div>
          <button class="app_post_btn" @click="editProfile">Save</button>
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
