import Api from '@/services/Api'

export default {
  fetchSongs () {
    return Api().get('songs')
  },
  addSong (params) {
    return Api().post('songs', params)
  }
}
