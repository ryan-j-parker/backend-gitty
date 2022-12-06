const tradeCodeForToken = async (code) => {
  console.log(`CALLING MOCK tradeCodeForToken! ${code}`);
  return 'MOCK TOKEN FOR CODE';
};

const getGithubProfile = async (token) => {
  console.log(`CALLING MOCK getGithubProfile ${token}`);
  return {
    login: 'fictitious',
    email: 'test@useremail.net',
    avatar_url: 'http://placekitten.com/200/300',
  };
};

module.exports = { tradeCodeForToken, getGithubProfile };
