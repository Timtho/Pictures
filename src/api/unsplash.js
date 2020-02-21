import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID WR3KayV3Th_RvWevxGSWSSB65QuOEzTK1ogCPZrTQRw'
  }
});
