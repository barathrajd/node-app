let url = '';

if ((process.env.NODE_ENV || '').trim() === 'production') {
  url = '/api/';
} else {
  url = 'http://localhost:8000/api/'
}

export default url;